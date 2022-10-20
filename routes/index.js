const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const userBio = require("../controllers/userBio");
const userHistory = require("../controllers/userHistory");

// AUTH
router.post("/auth", auth.create);
router.post("/auth/login", auth.login);

// USER BIO
router.get("/userBio", userBio.getAll);
router.post("/userBio/add", userBio.create);
router.put("/userBio/update", userBio.update);
router.get("/userBio/:id", userBio.getDetail);
router.delete("/userBio/delete/:id", userBio.delete);

// USER HISTORY
router.post("/history/add", userHistory.create);
router.get("/history/all", userHistory.getAll);
router.get("/history/:id", userHistory.getDetail);

module.exports = router;
