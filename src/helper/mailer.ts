/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import User from "@/models/userModel";
const sendMail = async ({
    email,
    emailType,
    userId,
}: {
    email: string;
    emailType: string;
    userId: string;
}) => {
    try {
        const hashed = Math.round(Math.random() * 100000 + 1)
        const hashedPassword = await bcrypt.hash(userId, 10)
        if (emailType === "VERIFY") {
            await User.findOneAndUpdate(
                { _id: userId },
                { verifyToken: hashed, verifyTokenExpiry: Date.now() + 3600000 }
            );
        } else if (emailType === "FORGOT") {
            await User.findOneAndUpdate(
                { _id: userId },
                { forgotPassword: hashedPassword, forgotPasswordExpiry: Date.now() + 3600000 }
            );
        }

        const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const verifyHtml = `<p><a href='${process.env.DOMAIN}/verifyemail?token=${hashed}'>Here</a></p> 
        <br>${process.env.DOMAIN}/verifyemail/?token=${hashed}</br>`;

        const forgotHtml = '<p>Successfully password reset</p>';

        const mailOptions = {
            from: "ammarshaikh50099@gmail.com",
            to: email,
            subject: `${emailType === "VERIFY" ? "Verify Email" : "Forgot Password"}`,
            html: `<p> ${emailType === "VERIFY" ? "click to verify your email" + verifyHtml : "reset your password" + forgotHtml}</p>`,
        };
        const mail = await transport.sendMail(mailOptions);
        return mail;
    } catch (error: any) {
        console.log(error.message);
    }
};
export default sendMail;
//adfa