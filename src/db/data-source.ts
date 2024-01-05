import content_owner from "../entity/content_owner";
import publisher from "../entity/publisher";
import tbl_book from "../entity/tbl_book";
import "reflect-metadata";
import { DataSource } from "typeorm";

require("dotenv").config();

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.PW,
  database: process.env.DB,
  synchronize: true,
  logging: false,
  migrationsRun: true,
  ssl: false,
  entities: ["dist/entity/*.js"],
  migrations: ["dist/migration/*.js"],
});
export default AppDataSource;

// "dist/entity/*.js"
