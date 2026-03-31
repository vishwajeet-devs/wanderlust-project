const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLogedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js"); 

const { index, renderNewForm, createListing, showListing, editListing, updateListing, deleteListing } = require("../controlllers/listings.js"); 


router
    .route("/")
    .get(wrapAsync(index))
    .post(isLogedIn, validateListing, createListing);

router.get("/new", isLogedIn, renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(showListing))
    .put(isLogedIn, isOwner, validateListing, wrapAsync(updateListing))
    .delete(isLogedIn, isOwner, wrapAsync(deleteListing));

router.get("/:id/edit", isLogedIn, isOwner, wrapAsync(editListing));

module.exports = router;