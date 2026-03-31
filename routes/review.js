const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");       // model
const Listing = require("../models/listing.js");     // model
const { validateReview } = require("../middleware.js"); 
const { isLogedIn, isReviewAuthor } = require("../middleware.js");

const { createReview, deleteReview } = require("../controlllers/reviews.js");

// reviews
// post route
router.post("/", validateReview, isLogedIn, wrapAsync(createReview));

// Delete review
router.delete("/:reviewId", isLogedIn, isReviewAuthor, wrapAsync(deleteReview));

module.exports = router;