import { createTransport } from 'nodemailer';

async function testEmailConfig() {
  console.log('Starting email configuration test...');

  try {
    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_RECIPIENT) {
      throw new Error('Required environment variables are not set. Please check your .env file.');
    }

    console.log('Creating test transporter...');
    const transporter = createTransport({
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

    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('✓ SMTP connection verified successfully');

    console.log('Sending test email...');
    const result = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: 'Test Email - Contact Form',
      text: 'This is a test email to verify the contact form configuration.',
      html: '<h3>Test Email</h3><p>This is a test email to verify the contact form configuration.</p>'
    });

    console.log('✓ Test email sent successfully!');
    console.log('Email details:', {
      messageId: result.messageId,
      response: result.response,
      accepted: result.accepted,
      rejected: result.rejected
    });

  } catch (error) {
    console.error('❌ Error during email test:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command
    });
  }
}

testEmailConfig(); 