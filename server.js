const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const userRoute = require("./routes/user-route");
const adminRoute = require("./routes/admin-route");
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use(cookieParser());

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
app.get("/", (req, res) => {
  res.send("Hello World!");
}, (err) => {
  console.log(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
