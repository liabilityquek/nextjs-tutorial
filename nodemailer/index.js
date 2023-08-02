const nodemailer = require("nodemailer");
import { render } from '@react-email/render';
const Email = require('../emails/index.tsx');

export async function sendEmail(options, payload) {
    const emailHtml = render(<Email payloadBody={payload}/>,
    {
        pretty: true,
    });

    console.log(`emailHtml: ${emailHtml}`);
    try {
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
            html: '<strong>testing</strong>',

        };
        // console.log(`mailOptions.subject: ${mailOptions.subject}`);
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(`Error sending email notification: ${error}`)
    }

};
