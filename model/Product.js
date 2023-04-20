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
      required: true,
      trim: true,
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
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
