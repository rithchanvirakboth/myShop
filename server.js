require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors  = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

const userRoute = require("./routes/user-route");
const adminRoute = require("./routes/admin-route");
const uploadRoute = require("./routes/upload-route");
const productRoute = require("./routes/product-route");

const URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
  useTempFiles: true
}));

// Database connection
mongoose.connect(URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.log(err);
});

// routes
app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/api", uploadRoute);
app.use("/product", productRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
