const express = require('express');
const router = express.Router();
const { sendApplicationEmail } = require('../controllers/applyController');
const validateForm = require('../middleware/validateForm');

router.post('/apply', validateForm, sendApplicationEmail);

module.exports = router;
