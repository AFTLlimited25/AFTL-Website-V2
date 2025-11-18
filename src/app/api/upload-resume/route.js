// /app/api/upload-resume/route.js (Next.js 13+ App Router)
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import os from "os";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;

    // Use temporary directory instead of public/ for cloud hosts
    const tempDir = os.tmpdir();
    const filePath = path.join(tempDir, fileName);

    // Save the file temporarily
    await fs.promises.writeFile(filePath, fileBuffer);

    // Create Nodemailer transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // Gmail or App email
        pass: process.env.SMTP_PASS, // App password
      },
    });

    // Send email with attachment
    await transporter.sendMail({
      from: `"Career Portal" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO, 
      subject: "New Resume Uploaded",
      text: "A new resume has been uploaded. See attachment.",
      attachments: [
        {
          filename: file.name,
          path: filePath,
        },
      ],
    });

    // Delete temp file after sending
    await fs.promises.unlink(filePath);

    return NextResponse.json({ message: "✅ Resume uploaded & email sent successfully!" });
  } catch (error) {
    console.error("Upload/email error:", error);

    // Return detailed error in development (optional)
    return NextResponse.json(
      { error: "❌ Failed to upload or send email.", details: error.message },
      { status: 500 }
    );
  }
}
