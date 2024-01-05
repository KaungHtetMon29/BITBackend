import {
  addbook,
  deletebook,
  findonebook,
  getbook,
  updatebook,
} from "./controller";

const express = require("express");
const router = express.Router();
router.post("/", addbook);
router.get("/", getbook);
router.get("/:bid", findonebook);
router.delete("/:id", deletebook);
router.put("/", updatebook);
export default router;
