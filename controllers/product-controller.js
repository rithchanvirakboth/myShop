const Product = require('../model/Product');

const productController = {
  uploadProduct: async (req, res) => {
    try { 
      const { 
        productName, 
        productShortDesc,
        productLongDesc,
        productPrice,
        productImg,
        productCategory,
        productQuantity,
      } = req.body;

      if (!productName || !productShortDesc || !productPrice || !productImg || !productCategory || !productQuantity) {
        return res.status(400).json({ msg: "Please fill in all fields" });
      }

      const newProduct = new Product({
        productName,
        productShortDesc,
        productLongDesc,
        productPrice,
        productImg,
        productCategory,
        productQuantity,
        instock, // true = in stock, false = out of stock
      });

      await newProduct.save();

      res.json({ msg: "Adding new product successfully!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getProductsByCategory: async (req, res) => {

  },
  getProductsBySearch: async (req, res) => {

  },
  getProductsByFilter: async (req, res) => {


  }, 
  getAllProducts: async (req, res) => {
  },

  updateProduct: async (req, res) => {


  }
}

module.exports = productController;