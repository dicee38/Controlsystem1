import { Defect } from "../models/index.js";

export async function getDefects(req, res) {
  const defects = await Defect.findAll();
  res.json(defects);
}

export async function createDefect(req, res) {
  try {
    const { title, description, status, priority, projectId, assigneeId } =
      req.body;
    const defect = await Defect.create({
      title,
      description,
      status,
      priority,
      ProjectId: projectId,
      assigneeId,
    });
    res.json(defect);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
