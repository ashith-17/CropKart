import axios from "axios";

// Base URL for your backend
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// USERS
export const getUsers = () => API.get("/users");
export const addUser = (data) => API.post("/users", data);

// PROJECTS
export const getProjects = () => API.get("/projects");
export const addProject = (data) => API.post("/projects", data);

// SUBMISSIONS
export const getSubmissions = () => API.get("/submissions");
export const addSubmission = (data) => API.post("/submissions", data);
