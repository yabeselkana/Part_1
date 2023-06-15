const express = require("express");
const router = express.Router();
const ProductRouter = require("../routes/products");

router.use("/products", ProductRouter);

module.exports = router;
