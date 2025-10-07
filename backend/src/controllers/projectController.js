import { Project } from "../models/index.js";

export async function getProjects(req, res) {
  const projects = await Project.findAll();
  res.json(projects);
}

export async function createProject(req, res) {
  try {
    const { name } = req.body;
    const project = await Project.create({ name });
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
