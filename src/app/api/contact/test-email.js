import nodemailer from 'nodemailer';

// Replace these with your actual credentials for testing
const EMAIL_USER = 'abhishekreddy@aftl.co.uk';
const EMAIL_PASS = 'sbmcamvayaaqxufz';
const EMAIL_RECIPIENT = 'contact@aftl.co.uk';

async function testEmail() {
  console.log('Starting email test...');
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  });

  try {
    console.log('Testing connection...');
    await transporter.verify();
    console.log('Connection successful!');

    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_RECIPIENT,
      subject: 'Test Email',
      text: 'This is a test email to verify the configuration.'
    });

    console.log('Test email sent successfully:', info.response);
  } catch (error) {
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command
    });
  }
}

testEmail(); 