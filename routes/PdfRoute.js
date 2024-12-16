const express = require("express");
const router = express.Router();
const pdfController = require("../controller/PdfController");
router.post("/generate",pdfController.PdfGenerator);

module.exports=router;
