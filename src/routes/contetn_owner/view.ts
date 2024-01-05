import { getcontentowners } from "./controller";

const express = require("express");
const router = express.Router();
router.get("/", getcontentowners);
export default router;
