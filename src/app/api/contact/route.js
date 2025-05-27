import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export async function POST(request) {
    try {
        console.log('Starting contact form submission...');
        
        const data = await request.json();
        console.log('Received form data:', {
            name: data.name,
            email: data.email,
            subject: data.subject,
            hasMessage: !!data.message
        });

        const { name, email, subject, message } = data;

        // Validate the input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields' },
                { status: 400 }
            );
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        // Create transporter
        console.log('Creating email transporter...');
        console.log('Environment variables check:', {
            hasGmailUser: !!process.env.GMAIL_USER,
            hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
            hasGmailRecipient: !!process.env.GMAIL_RECIPIENT,
            gmailUser: process.env.GMAIL_USER
        });

        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.GMAIL_RECIPIENT) {
            throw new Error('Missing email configuration. Please check your environment variables.');
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD // Use App Password here
            }
        });

        // Verify transporter configuration
        console.log('Verifying transporter...');
        await transporter.verify();
        console.log('Transporter verified successfully');

        // Configure email data
        console.log('Configuring email data...');
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_RECIPIENT,
            subject: `Contact Form: ${subject || 'New Message'} from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject || 'N/A'}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // Send email
        console.log('Attempting to send email...');
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', {
            messageId: result.messageId,
            response: result.response
        });

        return NextResponse.json({
            success: true,
            message: 'Thank you for your message. We will get back to you soon!'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { 
                success: false, 
                message: 'Failed to send message. Please try again later.',
                error: error.message 
            },
            { status: 500 }
        );
    }
}
