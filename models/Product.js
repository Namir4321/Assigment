const mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      // unique: true,
    },
    productPrice: {
      type: Number,
      required: true,
      //   unique: true,
    },
    productQuantity: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
