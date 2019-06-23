const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const cron = require('cron');
require('dotenv').config();

var arr = process.env.TO_EMAIL.split(",");

var j = schedule.scheduleJob('30 21 * * *', function () {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    });

    var i;
    for (i = 0; i < arr.length; i++) {
        let mailOptions = {
            from: '"Tejaswini" <tejach956@gmail.com>',
            to: arr[i],
            subject: "Reminder",
            text: "Time to start for work",
            html: "<b>Time to start for work</b>"
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({
                    message: 'An email has been sent'
                });
            }
        });
    }

});