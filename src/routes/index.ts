import express from "express";
// import test from "./test/view"
// import user from "./user/view"
// import post from "./blogs/view"
import book from "./book/view";
import content_owner from "./contetn_owner/view";
import publisher from "./publisher/view";
const route = express.Router();
route.use("/book", book);
route.use("/contentowner", content_owner);
route.use("/publisher", publisher);

export default route;
