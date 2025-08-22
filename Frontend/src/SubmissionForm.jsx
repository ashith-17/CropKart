import React, { useState } from "react";
import { addSubmission } from "./api";

function SubmissionForm({ users, projects, onSubmissionAdded }) {
  const [project, setProject] = useState("");
  const [submittedBy, setSubmittedBy] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addSubmission({ project, submittedBy, link });
      alert("Submission added!");
      setProject("");
      setSubmittedBy("");
      setLink("");
      if (onSubmissionAdded) onSubmissionAdded(res.data);
    } catch (err) {
      console.error(err);
      alert("Error adding submission");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <select value={project} onChange={(e) => setProject(e.target.value)} required>
        <option value="">Select Project</option>
        {projects.map((p) => (
          <option key={p._id} value={p._id}>{p.title}</option>
        ))}
      </select>

      <select value={submittedBy} onChange={(e) => setSubmittedBy(e.target.value)} required>
        <option value="">Select User</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>

      <input
        type="url"
        placeholder="GitHub/Project Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />

      <button type="submit">Add Submission</button>
    </form>
  );
}

export default SubmissionForm;
