import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Hardcode credentials temporarily for testing
const EMAIL_USER = 'abhishekreddy@aftl.co.uk';
const EMAIL_PASS = 'sbmcamvayaaqxufz';
const EMAIL_RECIPIENT = 'contact@aftl.co.uk';

export async function POST(request) {
  try {
    // Log both environment variables and hardcoded values
    console.log('Credentials check:', {
      fromEnv: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS_EXISTS: !!process.env.EMAIL_PASS,
        EMAIL_RECIPIENT: process.env.EMAIL_RECIPIENT
      },
      hardcoded: {
        EMAIL_USER,
        EMAIL_PASS_EXISTS: !!EMAIL_PASS,
        EMAIL_RECIPIENT
      }
    });

    const data = await request.json();
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

    // Create transporter using hardcoded credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,  // Use hardcoded value
        pass: EMAIL_PASS   // Use hardcoded value
      }
    });

    // Configure email data
    const mailOptions = {
      from: EMAIL_USER,  // Use hardcoded value
      to: EMAIL_RECIPIENT,  // Use hardcoded value
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
      await transporter.verify();
      console.log('SMTP connection verified');
      
      // Send email
      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result);

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