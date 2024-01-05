const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const { text } = require('express');

const sendEmail = async(req,res) => {
    let testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lindsay.cormier@ethereal.email',
            pass: 'A7cX7drhycXBXHYXpx',
        },
    });

    let info = await transporter.sendMail({
        from: '"Benjamin" <benjamin.oldfriend@gmail.com>',
        to: 'benjamin.oldfriend@gmail.com',
        subject: 'Hello Dude',
        html: '<h2>Sending emails using Nodemailer with Nodejs</h2>'
    });
    res.json(info);
}

const sendEmailSendGrid = async (req,res) => {
    sgMail.setApiKey(process.env.Sendgrid_API_Key);

    const msg = {
        to: 'benjamin.oldfriend@gmail.com',
        from: 'learncodetutorial@gmail.com',
        subject: 'Sending mail using SendGrid with JS',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>Let us deep dive into JS!!</strong>'
    };

    const info = await sgMail.send(msg);
    res.json(info);
};

module.exports = sendEmail;