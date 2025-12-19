// Serverless function to send emails via Resend API
// Deploy this to Vercel, Netlify, or any serverless platform
// Install: npm install resend

import { Resend } from 'resend';

// Initialize Resend with your API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: 'Invalid email format'
            });
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'MindLap Website <noreply@yourdomain.com>', // Update with your verified domain
            to: ['info@mindlaparchitects.com'], // Update with your email
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: #F89FA3;
                            color: white;
                            padding: 20px;
                            text-align: center;
                            border-radius: 5px 5px 0 0;
                        }
                        .content {
                            background: #f9f9f9;
                            padding: 30px;
                            border: 1px solid #ddd;
                            border-radius: 0 0 5px 5px;
                        }
                        .field {
                            margin-bottom: 20px;
                        }
                        .field-label {
                            font-weight: bold;
                            color: #666;
                            text-transform: uppercase;
                            font-size: 12px;
                            margin-bottom: 5px;
                        }
                        .field-value {
                            background: white;
                            padding: 15px;
                            border-left: 3px solid #F89FA3;
                            border-radius: 3px;
                        }
                        .footer {
                            margin-top: 20px;
                            padding-top: 20px;
                            border-top: 1px solid #ddd;
                            color: #666;
                            font-size: 12px;
                            text-align: center;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h2 style="margin: 0;">New Contact Form Submission</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="field-label">Name</div>
                            <div class="field-value">${name}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Email</div>
                            <div class="field-value">
                                <a href="mailto:${email}" style="color: #F89FA3; text-decoration: none;">
                                    ${email}
                                </a>
                            </div>
                        </div>
                        <div class="field">
                            <div class="field-label">Message</div>
                            <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                        </div>
                    </div>
                    <div class="footer">
                        Sent from MindLap Architects website contact form
                    </div>
                </body>
                </html>
            `,
        });

        console.log('Email sent successfully:', data);

        return res.status(200).json({
            message: 'Email sent successfully',
            id: data.id
        });

    } catch (error) {
        console.error('Error sending email:', error);

        return res.status(500).json({
            message: 'Failed to send email',
            error: error.message
        });
    }
}
