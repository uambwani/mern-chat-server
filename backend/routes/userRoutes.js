const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// register
router.route("/").post(registerUser);

// login
router.post("/login", authUser);

// search
router.get("/", protect, allUsers);

module.exports = router;
