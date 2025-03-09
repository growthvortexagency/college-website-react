const validateForm = (req, res, next) => {
    const { name, course, email, contact, message } = req.body;

    if (!name || !course || !email || !contact || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    next();
};

module.exports = validateForm;
