import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 4000,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
  },
  jwtSecret: process.env.JWT_SECRET,
};
