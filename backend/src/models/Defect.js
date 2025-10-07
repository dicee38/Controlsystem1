import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";
import Project from "./Project.js";

const Defect = sequelize.define("Defect", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  priority: {
    type: DataTypes.ENUM("low", "medium", "high"),
    defaultValue: "medium",
  },
  status: {
    type: DataTypes.ENUM("new", "in_progress", "review", "closed", "cancelled"),
    defaultValue: "new",
  },
  attachment: { type: DataTypes.STRING }, // путь к файлу
});

// связи
User.hasMany(Defect, { foreignKey: "assignedTo" });
Defect.belongsTo(User, { as: "assignee", foreignKey: "assignedTo" });

Project.hasMany(Defect, { foreignKey: "projectId" });
Defect.belongsTo(Project, { foreignKey: "projectId" });

export default Defect;
