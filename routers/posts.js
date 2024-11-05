const express = require("express");
const router = express.Router();
const postsController = require("../controllers/dbControllers");

router.get("/", postsController.index);

router.get("/:slug", postsController.show);

router.post("/", postsController.store);

router.put("/:slug", postsController.update);

module.exports = router;