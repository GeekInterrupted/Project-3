const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    country: {
        type: String
    },
    user: {
        type: String
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    like: [{
        type: Schema.Types.ObjectId,
        ref: "Like"
    }],
    dislike: [{
        type: Schema.Types.ObjectId,
        ref: "Dislike"
      }]
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;