const nodemailer = require("nodemailer");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

export async function sendEmail(options) {
    try {

        const template = fs.readFileSync(
            path.resolve(__dirname, `../email_template/${options.templateName}.html`),
            "utf-8"
        );
        console.log('__dirname:', __dirname);
        console.log('Full path:', path.resolve(__dirname, `../email_template/${options.templateName}.html`));


        const html = ejs.render(template, options.templateVariables);
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
            // to: options.email,
            to: process.env.EMAIL_TO,
            subject: options.subject,
            html: html,

        };
        //   console.log(mailOptions.html);
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(`Error sending email notification: ${error}`)
    }

};
