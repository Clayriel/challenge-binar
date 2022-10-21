const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const userBio = require("../controllers/userBio");
const userHistory = require("../controllers/userHistory");
const mid = require("../helper/middleware");

// AUTH
router.post("/auth", auth.create);
router.post("/auth/login", auth.login);

// USER BIO
router.get("/userBio", userBio.getAll);
router.post("/userBio/add", mid.mustLogin, userBio.create);
router.put("/userBio/update", mid.mustLogin, userBio.update);
router.get("/userBio/:id", mid.mustLogin, userBio.getDetail);
router.delete("/userBio/delete/:id", mid.mustLogin, userBio.delete);

// USER HISTORY
router.post("/history/add", mid.mustLogin, userHistory.create);
router.get("/history/all", userHistory.getAll);
router.get("/history/:id", mid.mustLogin, userHistory.getDetail);

module.exports = router;
