const express = require("express");
const router = express.Router();

// Purane controller ki jagah naya saaf controller use karenge
const authController = require("../controllers/newAuthController");

// Signup aur Login ke routes naye controller se jod diye
router.route("/signup").post(authController.registerUser);
router.route("/login").post(authController.loginUser);

// Baaki routes waise hi rahenge (par yeh naye controller mein nahi hain, 
// isliye inhe abhi ke liye hata rahe hain taaki crash na ho)
// router.route("/forgotPassword").post(authController.forgotPassword);
// router.route("/resetPassword/:token").patch(authController.resetPassword);
// router.route("/me").get(authController.getUserProfile);
// router.route("/logout").get(authController.logout);

module.exports = router;