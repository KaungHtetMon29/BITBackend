"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import test from "./test/view"
// import user from "./user/view"
// import post from "./blogs/view"
var view_1 = __importDefault(require("./book/view"));
var view_2 = __importDefault(require("./contetn_owner/view"));
var view_3 = __importDefault(require("./publisher/view"));
var route = express_1.default.Router();
route.use("/book", view_1.default);
route.use("/contentowner", view_2.default);
route.use("/publisher", view_3.default);
exports.default = route;
//# sourceMappingURL=index.js.map