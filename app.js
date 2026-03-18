const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

main()
    .then((req, res) => {
        console.log("connected")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', engine);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("hi i am groot");
})

// mddleware function for schema validations
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(404, errMsg);
    } else next();
}

// Index
app.get("/listings", wrapAsync(async (req, res, next) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

// New
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})

app.post("/listings", validateListing, wrapAsync(async (req, res, next) => {
    let  listing = req.body.listing;
    await Listing.create(listing);
    res.redirect("/listings");
}));

// show 
app.get("/listings/:id", wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}));

// edit
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    if(!req.body.listing){
        throw new ExpressError(400, "send valid data for listing");
    }
    let { id } = req.params;
    let newListing = req.body.listing;
    await Listing.findByIdAndUpdate(id, newListing);
    res.redirect(`/listings/${id}`);
}));

// Delete
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

app.use((req, res, next) => {
    next(new ExpressError(404, "page not found"));
});

// middleware - error handler
app.use((err, req, res, next) => {
    let { statusCode=500, message="Something went wrong" } = err;
    res.status(statusCode).render("listings/error.ejs", {message});
})

app.listen(8080, () => {
    console.log("app is listening on port 8080");
})