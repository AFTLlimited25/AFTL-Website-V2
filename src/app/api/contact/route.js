import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Enhanced logging
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

    // Create transporter using environment variables
    console.log('Creating email transporter...');
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      debug: true,
      logger: true
    });

    // Configure email data
    console.log('Configuring email data...');
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
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
      `,
    };

    try {
      // Verify connection first
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
      
      // Send email
      console.log('Attempting to send email...');
      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', {
        messageId: result.messageId,
        response: result.response,
        accepted: result.accepted,
        rejected: result.rejected
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      });
    } catch (emailError) {
      console.error('Email error details:', {
        name: emailError.name,
        message: emailError.message,
        code: emailError.code,
        command: emailError.command
      });
      throw emailError;  // Re-throw to be caught by outer try-catch
    }

  } catch (error) {
    console.error('Contact form error:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command
    });
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 