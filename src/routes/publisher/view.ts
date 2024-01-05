import { getpublishers } from "./controller";

const express = require("express");
const router = express.Router();
router.get("/", getpublishers);
export default router;
