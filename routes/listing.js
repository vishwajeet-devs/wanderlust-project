const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLogedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js"); 

// Index
router.get("/", wrapAsync(async (req, res, next) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

// New
router.get("/new", isLogedIn, (req, res) => {
    res.render("listings/new.ejs");
})

router.post("/", isLogedIn, validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New listing created!");
    res.redirect("/listings");
}));

// show 
router.get("/:id", wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            },
        })
        .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested dosen't exists");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}));

// edit
router.get("/:id/edit", isLogedIn, isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested dosen't exists");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
}));

//update
router.put("/:id", isLogedIn, isOwner, validateListing, wrapAsync(async (req, res) => {
    if(!req.body.listing){
        throw new ExpressError(400, "send valid data for listing");
    }
    let { id } = req.params;
    let newListing = req.body.listing;
    await Listing.findByIdAndUpdate(id, newListing);
    req.flash("success", "listing updated!")
    res.redirect(`/listings/${id}`);
}));

// Delete listing
router.delete("/:id", isLogedIn, isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted")
    res.redirect("/listings");
}));

module.exports = router;