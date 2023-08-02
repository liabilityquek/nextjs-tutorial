import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
const Email = require('../emails/index.tsx');

export async function sendEmail(options, payload) {
    try {
        // const emailHtml = render(<Email payloadBody={payload} />,
        //     {
        //         plainText: true,
        //     });

        // console.log(`emailHtml: ${emailHtml}`);
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: "apikey",
                pass: process.env.SENDGRID_API_KEY,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: options.subject,
            html: options.body,

        };
        // console.log(`mailOptions.subject: ${mailOptions.subject}`);
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(`Error sending email notification: ${error}`)
    }

};
