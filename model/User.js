const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    confirmPassword: {
      type: String,
      required: true,
      trim: true,
    },
    birthDate: {
      type: Date,
      required: true,
      trim: true,
    },
    bioDesc: {
      type: String,
    },
    profilePic: {
      type: String,
      default: "https://res.cloudinary.com/dweitfbey/image/upload/v1681972811/avatar/istockphoto-1337144146-612x612_kvkcd2.png",
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    zipcode: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    role: {
      type: Number,
      default: 0, // 0 = user, 1 = admin
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
