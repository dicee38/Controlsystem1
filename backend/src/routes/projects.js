import express from "express";
import {
  authMiddleware,
  roleMiddleware,
} from "../middleware/authMiddleware.js";
import Project from "../models/Project.js";

const router = express.Router();

// получить все проекты
router.get("/", authMiddleware, async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

// создать проект (только менеджер)
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["manager"]),
  async (req, res) => {
    const { name, description } = req.body;
    const project = await Project.create({ name, description });
    res.status(201).json(project);
  }
);

// обновить проект
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["manager"]),
  async (req, res) => {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    await project.update(req.body);
    res.json(project);
  }
);

// удалить проект
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["manager"]),
  async (req, res) => {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    await project.destroy();
    res.json({ message: "Project deleted" });
  }
);

export default router;
