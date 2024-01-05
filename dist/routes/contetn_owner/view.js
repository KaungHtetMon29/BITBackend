"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var express = require("express");
var router = express.Router();
router.get("/", controller_1.getcontentowners);
exports.default = router;
//# sourceMappingURL=view.js.map