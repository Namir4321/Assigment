const express = require("express");
const router = express.Router();
const verify = require("../middleware/verify");
const authController = require("../controller/UserController");
router.get("/allproduct/:id", verify, authController.fetchProductById);
router.post("/addproducts", verify, authController.addProduct);

module.exports = router;
