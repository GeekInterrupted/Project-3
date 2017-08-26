const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DislikeSchema = new Schema({
    dislike: {
        type: String
    }
});

const Dislike = mongoose.model("Dislike", DislikeSchema);

module.exports = Dislike;