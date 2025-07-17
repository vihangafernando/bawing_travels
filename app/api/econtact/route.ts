import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("⏳ Sending emails...");

    // ✅ Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: "mail.bawingtravels.com",
      port: 465, // or 587
      secure: true,
      auth: {
        user: "bookings@bawingtravels.com",
        pass: "bawingtravels194846",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.verify((error, success) => {
      if (error) {
        console.error("SMTP Connection Error:", error);
      } else {
        console.log("SMTP Server is ready to send messages.");
      }
    });

    // ✅ Email to Admin
    let adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "bookings@bawingtravels.com", // Change this to the actual admin email
      subject: "New Contact Form Submission - Bawing Travels",
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f9;
        }
        .email-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        .email-header {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
          text-align: center;
        }
        .email-card {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .email-card p {
          margin: 8px 0;
          color: #333;
        }
        .email-card span {
          font-weight: bold;
        }
        .email-footer {
          text-align: center;
          font-size: 14px;
          color: #777;
          margin-top: 20px;
        }
        .email-footer a {
          color: #333;
          text-decoration: none;
        }
      </style>
      <title>Email Template</title>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          New Message from Contact Form
        </div>

        <div class="email-card">
          <p><span>Name:</span> ${name}</p>
          <p><span>Email:</span> ${email}</p>
          <p><span>Phone:</span> ${phone}</p>
          <p><span>Subject:</span> ${subject}</p>
          <p><span>Message:</span></p>
          <p>${message}</p>
        </div>

        <div class="email-footer">
          <p>Thank you for your inquiry!</p>
          <p><a href="mailto:admin@example.com">Reply to this email</a></p>
        </div>
      </div>
    </body>
    </html>
  `,
    };

    // ✅ Confirmation Email to Client with "Code Crest" Branding
    let clientMailOptions = {
      from: `"Bawing Travels" <${process.env.EMAIL_USER}>`,
      to: email, // Send to the client
      subject: "Bawing Travels - Inquiry Received",
      html: `
        <div style="background-color: #f4f4f4; padding: 40px; font-family: Arial, sans-serif; text-align: center;">
          <!-- Header -->
          <div style="background-color: #4CAF50; color: white; padding: 20px; font-size: 24px; font-weight: bold; border-radius: 10px 10px 0 0;">
            Bawing Travels - Inquiry Received
          </div>
    
          <!-- Card -->
          <div style="background-color: white; padding: 25px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); max-width: 500px; margin: 20px auto;">
            <p style="color: #333; font-size: 18px;">Thank you, <strong>${name}</strong>, for reaching out to <span style="color: #4CAF50;">Bawing Travels</span>.</p>
            <p style="color: #666; font-size: 16px;">We've received your inquiry and will get back to you shortly.</p>
    
            <!-- Details Box -->
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; color: #333; text-align: left; margin-top: 20px;">
              <p style="margin: 0 0 10px; font-size: 16px;"><strong>Your Details:</strong></p>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</li>
                <li style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</li>
                <li style="margin-bottom: 8px;"><strong>Phone:</strong> ${phone}</li>
                <li style="margin-bottom: 8px;"><strong>Subject:</strong> ${subject}</li>
              </ul>
            </div>
    
            <!-- Message Box -->
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; color: #333; text-align: left; margin-top: 20px;">
              <p style="margin: 0 0 10px; font-size: 16px;"><strong>Your Message:</strong></p>
              <blockquote style="border-left: 4px solid #4CAF50; padding-left: 10px; margin: 5px 0; color: #666;">
                ${message}
              </blockquote>
            </div>
    
            <!-- Footer -->
            <p style="color: #999; font-size: 14px; margin-top: 20px;">Best Regards,</p>
            <p style="color: #333; font-size: 16px; font-weight: bold;">Bawing Travels Team</p>
          </div>
        </div>
      `,
    };

    // ✅ Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    console.log("✅ Emails sent successfully!");

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Error sending emails:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
