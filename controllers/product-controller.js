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
        instock
      } = req.body;

      if (!productName || !productShortDesc || !productPrice || !productCategory || !productQuantity) {
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
        instock // true = in stock, false = out of stock
      });

      await newProduct.save();

      res.json({ msg: "Adding new product successfully!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getProductsByCategory: async (req, res) => {
    try {   
      const reqParams = req.params.category;
      const productCategory = await Product.find({productCategory: reqParams});

      res.json(productCategory);
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  },
  getProductsBySearch: async (req, res) => {

  },
  getProductsByFilter: async (req, res) => {


  }, 
  getAllProducts: async (req, res) => {
    try {
      const product = await Product.find();
      
      res.json(product);
    }catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateProduct: async (req, res) => {


  }
}

module.exports = productController;