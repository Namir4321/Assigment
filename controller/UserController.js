const Product = require("../models/Product");

exports.fetchProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        error: "User ID is required in the request parameters.",
      });
    }
    const users = await Product.find({ userId: id });

    if (!users || users.length === 0) {
      return res.status(404).json({
        error: `No products found for the provided User ID: ${id}.`,
      });
    }
      res.status(200).json({
        message: "Products fetched successfully.",
        data: users,
      });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        error: `Invalid User ID format: ${req.params.id}`,
      });
    }
     res.status(500).json({
      error: "An error occurred while fetching products. Please try again later.",
      details: error.message,
    });
  }
};
exports.addProduct = async (req, res, next) => {
  try {
    console.log(req.body)
    const { productName, productPrice, productQuantity,userId } = req.body;
    if (!productName || !productPrice || !productQuantity) {
      return res.status(400).json({
        error:
          "All fields (productName, productPrice, productQuantity) are required.",
      });
    }
    if (
      typeof productPrice !== "number" ||
      typeof productQuantity !== "number"
    ) {
      return res.status(400).json({
        error:
          "Invalid data types. 'productPrice' and 'productQuantity' must be numbers.",
      });
    }
    console.log(req.userId);
    const newProduct = await Product.create({
      productName,
      productPrice,
      productQuantity,
      userId: userId,
    });
    return res.status(201).json({
      message: "Product added successfully.",
      product: newProduct,
    });
  } catch (err) {
    console.error("Error in addProduct:", err);

    return res.status(500).json({
      error: "An error occurred while adding the product.",
      details: err.message,
    });
  }
};
