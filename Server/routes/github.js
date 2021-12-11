const express = require("express");

const gitController = require("../controller/github");

const router = express.Router();

router.get("/profile", gitController.GetProfile);
router.get("/repo", gitController.GetRepo);
router.get("/commits", gitController.GetCommits);

module.exports = router;
