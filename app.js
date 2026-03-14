const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

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

app.get("/", (req, res) => {
    res.send("hi i am groot");
})

// Index
app.get("/listings", async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

// New
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})

app.post("/listings", async (req, res) => {
    let  listing = req.body.listing;
    await Listing.create(listing);
    res.redirect("/listings");
})

// show 
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
})

app.listen(8080, () => {
    console.log("app is listening on port 8080");
})