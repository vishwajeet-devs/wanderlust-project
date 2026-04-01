const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLogedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js"); 

const { index, renderNewForm, createListing, showListing, editListing, updateListing, deleteListing } = require("../controlllers/listings.js"); 

const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(index))
    .post(isLogedIn, upload.single("listing[image]"), validateListing, wrapAsync(createListing));

router.get("/new", isLogedIn, renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(showListing))
    .put(isLogedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(updateListing))
    .delete(isLogedIn, isOwner, wrapAsync(deleteListing));

router.get("/:id/edit", isLogedIn, isOwner, wrapAsync(editListing));

module.exports = router;