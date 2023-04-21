const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productShortDesc: {
      type: String,
      trim: true,
    },
    productLongDesc: {
      type: String,
      trim: true,
    },
    productPrice: {
      type: Number,
      required: true,
      trim: true,
    },
    productImg: {
      type: String,
      trim: true,
      default: "https://res.cloudinary.com/dweitfbey/image/upload/v1682048476/product/No-Image-Placeholder.svg_fjzqfx.png",
    },
    productCategory: {
      type: String,
      required: true,
      trim: true,
    },
    productQuantity: {
      type: Number,
      required: true,
      trim: true,
    },
    instock: {
      type: Boolean,
      default: true, // true = in stock, false = out of stock
    }, 
    productRating: {
      type: Number,
      default: 0, 
    },
    numberOfPurchased: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
