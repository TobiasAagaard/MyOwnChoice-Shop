import { sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPW,
  {
    host: process.DBHOST,
    dialect: "mysql",
  }
);

export default { sequelize };
