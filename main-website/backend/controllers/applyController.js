const ApplyModel = require('../models/ApplyModel');
const nodemailer = require('nodemailer');

exports.submitApplication = (req, res) => {
    const formData = req.body;

    ApplyModel.saveApplication(formData, (err, result) => {
        if (err) {
            console.error('Error saving application:', err);
            return res.status(500).json({ message: 'Failed to save application.' });
        }

        // Send email notification
        sendEmail(formData);

        res.status(201).json({ message: 'Application submitted successfully!' });
    });
};

exports.getApplications = (req, res) => {
    ApplyModel.getAllApplications((err, results) => {
        if (err) {
            console.error('Error fetching applications:', err);
            return res.status(500).json({ message: 'Failed to fetch applications.' });
        }
        res.status(200).json(results);
    });
};

const sendEmail = (formData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.COLLEGE_EMAIL,
        subject: 'New Application Submission',
        text: `New application received:\n\nName: ${formData.name}\nCourse: ${formData.course}\nEmail: ${formData.email}\nContact: ${formData.contact}\nMessage: ${formData.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
