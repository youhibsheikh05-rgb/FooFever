const User = require("../models/user");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME + "d",
  });
};

const sendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const options = {
    expires: new Date(Date.now() + process.env.JWT_EXPIRES_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  user.password = undefined;
  res.status(statusCode).cookie("jwt", token, options).json({
    success: true,
    token,
    data: { user },
  });
};

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, passwordConfirm, phoneNumber } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    passwordConfirm,
    phoneNumber,
    avatar: {
      public_id: "default_avatar",
      url: "https://via.placeholder.com/150",
    },
  });

  sendToken(user, 201, res);
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  const isPasswordMatched = await user.correctPassword(password, user.password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  sendToken(user, 200, res);
});