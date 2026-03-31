const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js")

const { renderSignupForm, signup, renderLoginForm, login, logout } = require("../controlllers/users.js");

//SignUp 
router.get("/signup", renderSignupForm)

router.post("/signup", signup)

// LogIn
router.get("/login", renderLoginForm);

router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true}), login)         // passport.authenticate() middleware invokes req.login() automatically

// logout
router.get("/logout", logout)

module.exports = router;