const initData = require("./data.js");
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
require('dotenv').config();

main()
    .then((req, res) => {
        console.log("connected")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.ATLASDB_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: obj.owner || "69c924b8eb03dabef49282fc"
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();