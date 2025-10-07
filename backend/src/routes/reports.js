import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import Defect from "../models/Defect.js";

const router = express.Router();

// простой отчёт: количество дефектов по статусам
router.get("/", authMiddleware, async (req, res) => {
  const counts = await Defect.findAll({
    attributes: ["status", [Defect.sequelize.fn("COUNT", "*"), "count"]],
    group: ["status"],
  });

  res.json(counts);
});

export default router;
