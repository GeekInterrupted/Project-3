const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    like: {
        type: String
    }
});

const Like = mongoose.model("Like", LikeSchema);

module.exports = Like;