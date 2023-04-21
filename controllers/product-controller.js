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
      const reqcategory = req.query.category

      if(reqcategory === "all") {
        const product = await Product.find();
        res.json(product);
      }

      if(reqcategory === "Hoodie"){
        const product = await Product.find({productCategory: "Hoodie"});

        res.json(product);
      }

      if(reqcategory === "T-Shirt"){
        const product = await Product.find({productCategory: "T-Shirt"});

        res.json(product);
      }

      if(reqcategory === "Jacket"){
        const product = await Product.find({productCategory: "Jacket"});

        res.json(product);
      }

    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  },
  getProductsBySearch: async (req, res) => {
    try {
      const searchQuery = req.query.search;

      const product = await Product.find({productName: {$regex: searchQuery, $options: "i"}});

      if(product.length === 0) return res.status(400).json({msg: "No product found"})
      res.json(product);
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  },
  getProductsByFilter: async (req, res) => {
    try {
      const reqFilter = req.query.filter;

      if(reqFilter === "all") {
        const product = await Product.find();
        res.json(product);
      }
      if(reqFilter === "topRated"){
        const product = await Product.find().sort({productRating: -1});

        res.json(product);
      }

      if(reqFilter === "lowToHigh"){
        const product = await Product.find().sort({productPrice: 1});

        res.json(product);
      }

      if(reqFilter === "highToLow"){
        const product = await Product.find().sort({productPrice: -1});

        res.json(product);
      }

      if(reqFilter === "bestSale"){
        const product = await Product.find().sort({numberOfPurchased: -1});

        res.json(product);
      }

      if(reqFilter === "newest"){
        const product = await Product.find().sort({createdAt: -1});

        res.json(product);
      }

      if(reqFilter === "oldest"){
        const product = await Product.find().sort({createdAt: 1});

        res.json(product);
      }
      else {
        res.json({msg: "No product found"});
      }
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  }, 
  getAllProducts: async (req, res) => {
    try {
      const product = await Product.find();
      
      res.json(product);
    }catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getProductPagination: async (req, res) => {
    try {
      const page = req.query.page;

      const product = await Product.find().skip((page - 1) * 9).limit(9);


      res.json(product);
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  },

  updateProduct: async (req, res) => {


  }
}

module.exports = productController;