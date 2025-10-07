import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import Defect from "../models/Defect.js";

const router = express.Router();

// все дефекты
router.get("/", authMiddleware, async (req, res) => {
  const defects = await Defect.findAll();
  res.json(defects);
});

// создать дефект
router.post("/", authMiddleware, async (req, res) => {
  const defect = await Defect.create(req.body);
  res.status(201).json(defect);
});

// обновить дефект
router.put("/:id", authMiddleware, async (req, res) => {
  const defect = await Defect.findByPk(req.params.id);
  if (!defect) return res.status(404).json({ message: "Defect not found" });
  await defect.update(req.body);
  res.json(defect);
});

// удалить дефект
router.delete("/:id", authMiddleware, async (req, res) => {
  const defect = await Defect.findByPk(req.params.id);
  if (!defect) return res.status(404).json({ message: "Defect not found" });
  await defect.destroy();
  res.json({ message: "Defect deleted" });
});

export default router;
