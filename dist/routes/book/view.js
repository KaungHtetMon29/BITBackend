"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var express = require("express");
var router = express.Router();
router.post("/", controller_1.addbook);
router.get("/", controller_1.getbook);
router.get("/:bid", controller_1.findonebook);
router.delete("/:id", controller_1.deletebook);
router.put("/", controller_1.updatebook);
exports.default = router;
//# sourceMappingURL=view.js.map