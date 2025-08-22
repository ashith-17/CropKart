const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Create a new project
router.post('/', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all projects
router.get('/', async (req, res) => {
    const projects = await Project.find().populate('createdBy teamMembers');
    res.json(projects);
});

module.exports = router;
