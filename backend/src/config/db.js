import { Sequelize } from "sequelize";
import config from "./config.js";

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.pass,
  {
    host: config.db.host || "postgres",
    port: config.db.port || 5432,
    dialect: "postgres",
    logging: false,
  }
);

export default sequelize;
