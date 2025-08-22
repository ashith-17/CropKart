import React, { useState } from "react";
import { addProject } from "./api";

function ProjectForm({ users, onProjectAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addProject({
        title,
        description,
        createdBy,
        teamMembers,
      });
      alert("Project added!");
      setTitle("");
      setDescription("");
      setCreatedBy("");
      setTeamMembers([]);
      if (onProjectAdded) onProjectAdded(res.data);
    } catch (err) {
      console.error(err);
      alert("Error adding project");
    }
  };

  const handleTeamChange = (e) => {
    const options = Array.from(e.target.selectedOptions);
    setTeamMembers(options.map((o) => o.value));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select
        value={createdBy}
        onChange={(e) => setCreatedBy(e.target.value)}
        required
      >
        <option value="">Select Creator</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>
      <select
        multiple
        value={teamMembers}
        onChange={handleTeamChange}
        style={{ height: "100px" }}
      >
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
