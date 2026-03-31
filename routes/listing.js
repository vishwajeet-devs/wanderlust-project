const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLogedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js"); 

const { index, renderNewForm, createListing, showListing, editListing, updateListing, deleteListing } = require("../controlllers/listings.js"); 

// Index
router.get("/", wrapAsync(index));

// New
router.get("/new", isLogedIn, renderNewForm);
//create
router.post("/", isLogedIn, validateListing, createListing);

// show 
router.get("/:id", wrapAsync(showListing));

// edit
router.get("/:id/edit", isLogedIn, isOwner, wrapAsync(editListing));

//update
router.put("/:id", isLogedIn, isOwner, validateListing, wrapAsync(updateListing));

// Delete listing
router.delete("/:id", isLogedIn, isOwner, wrapAsync(deleteListing));

module.exports = router;