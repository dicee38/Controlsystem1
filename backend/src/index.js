import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";

// импортируем роуты
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import projectRoutes from "./routes/projects.js";
import defectRoutes from "./routes/defects.js";
import reportRoutes from "./routes/reports.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// миддлвары
app.use(cors());
app.use(express.json());

// базовые роуты
app.get("/", (req, res) => {
  res.json({ message: "ControlSystem API is running 🚀" });
});

// API эндпоинты
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/defects", defectRoutes);
app.use("/api/reports", reportRoutes);

// запуск сервера и подключение к БД
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");

    await sequelize.sync({ alter: true }); // авто-создание таблиц
    console.log("✅ Models synced");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
})();
