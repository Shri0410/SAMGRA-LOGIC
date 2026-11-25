import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from server/.env or root .env
dotenv.config({ path: path.join(__dirname, ".env") });
dotenv.config(); // fallback to default root .env if present

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Transporter configuration for SMTP
const createTransporter = () => {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const authPass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, "") : "";

  return nodemailer.createTransport({
    host,
    port,
    secure, // true for 465, false for other ports like 587
    auth: {
      user: process.env.SMTP_USER,
      pass: authPass,
    },
  });
};

// Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "SAMGRA LOGIC Contact API is running",
    smtpConfigured: Boolean(process.env.SMTP_USER && process.env.SMTP_PASS),
    targetEmail: process.env.TO_EMAIL || "regulationbharat@gmail.com"
  });
});

// Contact / Enquiry Submission Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // 1. Basic Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: "Name is required." });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, message: "Email is required." });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, message: "Please provide a valid email address." });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: "Message is required." });
    }

    // 2. Validate SMTP credentials setup
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials missing in environment variables.");
      return res.status(500).json({
        success: false,
        message: "Email service is not yet configured. Please set SMTP_USER and SMTP_PASS in server/.env."
      });
    }

    const transporter = createTransporter();
    const targetRecipient = process.env.TO_EMAIL || "regulationbharat@gmail.com";
    const enquirySubject = subject ? `New Enquiry [${subject}] - ${name.trim()}` : `New Contact Form Enquiry from ${name.trim()}`;

    // 3. HTML Email Template with SAMGRA LOGIC Branding
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f7f5; margin: 0; padding: 20px; color: #1a2f23; }
        .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(10, 61, 36, 0.08); border: 1px solid #e1e9e4; }
        .header { background: linear-gradient(135deg, #0a3d24 0%, #145934 100%); padding: 30px 25px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 22px; letter-spacing: 1.5px; font-weight: 700; color: #ffffff; }
        .header p { margin: 6px 0 0; font-size: 13px; color: #cfb53b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
        .content { padding: 30px 25px; }
        .badge { display: inline-block; background-color: #e9f4ed; color: #0a3d24; font-weight: 600; font-size: 12px; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; border: 1px solid #c0dfcb; }
        .field-group { margin-bottom: 16px; border-bottom: 1px solid #edf3ef; padding-bottom: 12px; }
        .field-group:last-of-type { border-bottom: none; }
        .label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #5a7364; margin-bottom: 4px; }
        .value { font-size: 15px; color: #1a2f23; font-weight: 500; }
        .message-box { background: #f8faf9; border-left: 4px solid #cfb53b; padding: 16px; border-radius: 4px; margin-top: 8px; font-size: 15px; line-height: 1.6; color: #233b2e; white-space: pre-wrap; }
        .footer { background: #f8faf9; padding: 18px 25px; text-align: center; font-size: 12px; color: #6e8477; border-top: 1px solid #e9eee9; }
        .reply-btn { display: inline-block; background: #0a3d24; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SAMGRA LOGIC</h1>
          <p>New Enquiry Submission</p>
        </div>
        <div class="content">
          <div class="badge">Website Lead</div>
          
          <div class="field-group">
            <div class="label">Full Name</div>
            <div class="value">${name.trim()}</div>
          </div>

          <div class="field-group">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${email.trim()}" style="color: #0a3d24; font-weight: 600; text-decoration: none;">${email.trim()}</a></div>
          </div>

          ${phone ? `
          <div class="field-group">
            <div class="label">Phone Number</div>
            <div class="value">${phone.trim()}</div>
          </div>
          ` : ""}

          ${company ? `
          <div class="field-group">
            <div class="label">Company / Organization</div>
            <div class="value">${company.trim()}</div>
          </div>
          ` : ""}

          ${subject ? `
          <div class="field-group">
            <div class="label">Area of Interest / Service</div>
            <div class="value"><strong>${subject.trim()}</strong></div>
          </div>
          ` : ""}

          <div class="field-group">
            <div class="label">Message</div>
            <div class="message-box">${message.trim()}</div>
          </div>

          <div style="text-align: center;">
            <a href="mailto:${email.trim()}?subject=Re: ${encodeURIComponent(enquirySubject)}" class="reply-btn">Reply to ${name.trim()}</a>
          </div>
        </div>
        <div class="footer">
          Received via SAMGRA LOGIC website contact form &bull; Delivered to ${targetRecipient}
        </div>
      </div>
    </body>
    </html>
    `;

    // Plain text version
    const textContent = `
NEW ENQUIRY - SAMGRA LOGIC
=======================================
Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone ? phone.trim() : "Not provided"}
Company: ${company ? company.trim() : "Not provided"}
Area of Interest: ${subject ? subject.trim() : "General"}

Message:
${message.trim()}
=======================================
Delivered to: ${targetRecipient}
    `;

    // 4. Send email to recipient
    const mailOptions = {
      from: `"SAMGRA LOGIC Website" <${process.env.SMTP_USER}>`,
      to: targetRecipient,
      replyTo: email.trim(),
      subject: enquirySubject,
      text: textContent,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email successfully sent:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Thank you! Your enquiry has been sent successfully.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send your enquiry due to an internal mail error. Please try again or reach out directly at regulationbharat@gmail.com.",
      error: error.message,
    });
  }
});

// Serve static frontend in production if dist folder exists
const distPath = path.join(__dirname, "../dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api/")) {
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        return res.sendFile(indexPath);
      }
    }
    return next();
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 SAMGRA LOGIC Server running on http://localhost:${PORT}`);
  console.log(`📧 Contact API route: POST http://localhost:${PORT}/api/contact`);
  console.log(`🎯 Recipient Target: ${process.env.TO_EMAIL || "regulationbharat@gmail.com"}`);
  console.log(`=========================================`);
});
