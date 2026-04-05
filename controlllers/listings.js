const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res, next) => {
    let search = req.query.search?.trim();
    let category = req.query.cat;
    let allListings;

    if (search) {
        allListings = await Listing.find({
            $or: [
                { title: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } }
            ]
        });
    } 
    else if (category) {
        allListings = await Listing.find({ category });
    } 
    else {
        allListings = await Listing.find({});
    }

    res.render("listings/index.ejs", { allListings, search, category });
};

module.exports.showMyListing = async (req, res) => {
    let search = req.query.search?.trim();

    let query = {
        owner: req.user._id
    };

    if (search) {
        query.$or = [
            { title: { $regex: "^" + search, $options: "i" } },
            { location: { $regex: "^" + search, $options: "i" } }
        ];
    }
    let allListings = await Listing.find(query);
    res.render("listings/my.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient
        .forwardGeocode({
          query: req.body.listing.location,
          limit: 1
        })
          .send()

    let url = req.file.path;
    let filename = req.path.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    newListing.geometry = response.body.features[0].geometry;

    await newListing.save();
    req.flash("success", "New listing created!");
    res.redirect("/listings");
};

module.exports.showListing = async (req, res, next) => {
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
};

module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested dosen't exists");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    if(!req.body.listing){
        throw new ExpressError(400, "send valid data for listing");
    }

    let response = await geocodingClient
        .forwardGeocode({
          query: req.body.listing.location,
          limit: 1
        })
          .send();

    let { id } = req.params;
    let newListing = req.body.listing;
    newListing.geometry = response.body.features[0].geometry;

    let listing = await Listing.findByIdAndUpdate(id, newListing);

    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.path.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    
    req.flash("success", "listing updated!")
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted")
    res.redirect("/listings");
};