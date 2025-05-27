import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '../../../../');
dotenv.config({ path: join(rootDir, '.env') });

async function testEmailConfig() {
  console.log('Starting email configuration test...');
  console.log('Testing Gmail SMTP connection...');

  try {
    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_RECIPIENT) {
      throw new Error('Required environment variables are not set. Please check your .env file.');
    }

    console.log('Environment variables loaded:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_RECIPIENT: process.env.EMAIL_RECIPIENT,
      EMAIL_PASS: '********' // Masked for security
    });

    // Test different security settings
    const securityTests = [
      {
        name: 'Default Gmail Settings',
        config: {
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        }
      },
      {
        name: 'Direct SMTP with SSL',
        config: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        }
      },
      {
        name: 'Direct SMTP with TLS',
        config: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        }
      }
    ];

    for (const test of securityTests) {
      console.log(`\nTesting configuration: ${test.name}`);
      try {
        console.log('Creating test transporter...');
        const transporter = createTransport({
          ...test.config,
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
          subject: `Test Email - ${test.name}`,
          text: `This is a test email using ${test.name} configuration.`,
          html: `<h3>Test Email</h3><p>This is a test email using ${test.name} configuration.</p>`
        });

        console.log('✓ Test email sent successfully!');
        console.log('Email details:', {
          messageId: result.messageId,
          response: result.response,
          accepted: result.accepted,
          rejected: result.rejected
        });

        // If we get here, we found a working configuration
        console.log('\n✓✓✓ Found working configuration:', test.name);
        return;
      } catch (error) {
        console.error(`❌ Error with ${test.name}:`, {
          name: error.name,
          message: error.message,
          code: error.code,
          command: error.command
        });
      }
    }

    throw new Error('All configuration attempts failed. Please check Gmail security settings.');

  } catch (error) {
    console.error('\n❌ Final error:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command
    });
    
    console.log('\nTroubleshooting steps:');
    console.log('1. Check if 2-Step Verification is enabled: https://myaccount.google.com/security');
    console.log('2. Generate a new App Password: https://myaccount.google.com/apppasswords');
    console.log('3. Check for security alerts: https://myaccount.google.com/security-checkup');
    console.log('4. Try unlocking captcha: https://accounts.google.com/DisplayUnlockCaptcha');
  }
}

testEmailConfig(); 