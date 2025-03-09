const transporter = require('../config/nodemailer');

const sendApplicationEmail = async (req, res) => {
    const { name, course, email, contact, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'aabbhhiisshheekk8887@gmail.com',
        subject: 'New Course Application',
        html: `
            <h3>New Course Application</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Course:</strong> ${course}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Application sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send application' });
    }
};

module.exports = { sendApplicationEmail };
