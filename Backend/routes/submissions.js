const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// Create a new submission
router.post('/', async (req, res) => {
    try {
        const submission = new Submission(req.body);
        await submission.save();
        res.status(201).json(submission);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all submissions
router.get('/', async (req, res) => {
    const submissions = await Submission.find().populate('project submittedBy');
    res.json(submissions);
});

module.exports = router;
