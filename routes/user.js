const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js")

const { renderSignupForm, signup, renderLoginForm, login, logout } = require("../controlllers/users.js");

// signup
router
    .route("/signup")
    .get(renderSignupForm)
    .post(signup);

// LogIn
router
    .route("/login")
    .get(renderLoginForm)
    .post(
        saveRedirectUrl, 
        passport.authenticate("local", { 
            failureRedirect: "/login", 
            failureFlash: true
        }), 
        login
    );         // passport.authenticate() middleware invokes req.login() automatically

    // logout
router.get("/logout", logout)

module.exports = router;