const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listeningSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
        set: (v) => v===""? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ]
});

// middleware
listeningSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
})

const Listing = mongoose.model("Listing", listeningSchema);
module.exports = Listing;