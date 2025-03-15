const express = require('express');
const router = express.Router();
const ApplyController = require('../controllers/ApplyController');

router.post('/apply', ApplyController.submitApplication);
router.get('/applications', ApplyController.getApplications);

module.exports = router;
