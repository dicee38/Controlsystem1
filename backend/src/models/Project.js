import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Project = sequelize.define("Project", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: {
    type: DataTypes.ENUM("active", "completed", "on_hold"),
    defaultValue: "active",
  },
});

export default Project;
