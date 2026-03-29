const initData = require("./data.js");
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

main()
    .then((req, res) => {
        console.log("connected")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "69c924b8eb03dabef49282fc"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();