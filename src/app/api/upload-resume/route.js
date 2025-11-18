import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

const uploadDir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, fileName);

    await fs.promises.writeFile(filePath, fileBuffer);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Career Portal" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Resume Uploaded",
      text: "A new resume has been uploaded. See attachment.",
      attachments: [{ filename: file.name, path: filePath }],
    });

    await fs.promises.unlink(filePath);

    return NextResponse.json({ message: "✅ Resume uploaded & email sent successfully!" });
  } catch (error) {
    console.error("Upload/email error:", error);
    return NextResponse.json({ error: "❌ Failed to upload or send email." }, { status: 500 });
  }
}
