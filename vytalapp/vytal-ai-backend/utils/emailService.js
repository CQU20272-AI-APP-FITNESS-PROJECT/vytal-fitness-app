import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendOtpEmail = async (toEmail, otp) => {
    const mailOptions = {
        from: `"Vytal.AI" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: 'Your Vytal.AI Login OTP',
        html: `
            <div style="font-family: Arial, sans-serif; text-align: center; color: #333;">
                <h2>Vytal.AI One-Time Password</h2>
                <p>Please use the following OTP to complete your login. This OTP is valid for 10 minutes.</p>
                <h1 style="font-size: 48px; letter-spacing: 8px; margin: 20px; color: #007BFF;">${otp}</h1>
                <p>If you did not request this, please ignore this email.</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP email sent successfully to:', toEmail);
    } catch (error) {
        console.error('Error sending OTP email:', error);
        throw new Error('Could not send OTP email.');
    }
};