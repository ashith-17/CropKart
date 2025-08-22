const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    link: { type: String, required: true }, // GitHub or file link
    score: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Submission', SubmissionSchema);
