const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const cron = require('cron');

var j = schedule.scheduleJob('* * * * *', function () {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '****',
            pass: '****'
        }
    });
    let mailOptions = {
        from: '"Tejaswini" <tejach956@gmail.com>',
        to: "2016csb1036@iitrpr.ac.in,knyaswanth@iitrpr.ac.in,2016csb1035@iitrpr.ac.in,2016eeb1092@iitrpr.ac.in",
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
});