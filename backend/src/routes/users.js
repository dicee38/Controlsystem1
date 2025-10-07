import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// получить свой профиль
router.get("/me", authMiddleware, async (req, res) => {
  res.json({ id: req.user.id, email: req.user.email, role: req.user.role });
});

export default router;
