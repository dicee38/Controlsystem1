import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Report = sequelize.define("Report", {
  name: { type: DataTypes.STRING, allowNull: false },
  data: { type: DataTypes.JSON },
});

export default Report;
