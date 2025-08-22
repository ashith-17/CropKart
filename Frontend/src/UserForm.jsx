import React, { useState } from "react";
import { addUser } from "./api";

function UserForm({ onUserAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("participant");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addUser({ name, email, role });
      alert("User added successfully!");
      setName("");
      setEmail("");
      setRole("participant");
      if (onUserAdded) onUserAdded(res.data); // update users list
    } catch (err) {
      console.error(err);
      alert("Error adding user");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="participant">Participant</option>
        <option value="mentor">Mentor</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
