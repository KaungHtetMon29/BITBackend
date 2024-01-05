"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
require("dotenv").config();
var AppDataSource = new typeorm_1.DataSource({
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
exports.default = AppDataSource;
// "dist/entity/*.js"
//# sourceMappingURL=data-source.js.map