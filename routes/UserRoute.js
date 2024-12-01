const express = require("express");
const router = express.Router();
const verify = require("../middleware/verify");
const authController = require("../controller/UserController");
router.get("/allusers", verify, authController.fetchUsers);

module.exports = router;
