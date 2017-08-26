// Require all Schemas
const Comments = require ("../models/Comments");
const Like = require ("../models/Like");
const Dislike = require ("../models/Dislike");

module.exports = {
    // Here we'll save the news based on the JSON input.
    postComment: (req, res)=>{
        console.log(req.body);
        const entry = new Comments(req.body);
            // Now, save that entry to the db
            entry.save((err, doc)=> {
                // Log any errors    
                if (err) {
                    console.log(err);

                // Or log the doc
                } else { 
                    res.json("done")      
                };
            })
    },
    
    getComments: (req, res)=>{
        console.log(req.params.country)
        Comments.find({country: req.params.country})
        .populate("like")
        .populate("dislike")
        .exec((err,comments)=>{
            // Log any errors
            if (err){
                console.log(err);
            // or send back all comments
            }else{
                console.log(comments)
                res.json(comments);
            }
        })
    },
    // Here we'll save the like based on the JSON input.
    postLike: (req, res)=>{
        // we will save user who likes in the like model
        const newLike = new Like({like: req.body.user});
            // Now, save that like to the db
            newLike.save((err, like)=> {
                // Log any errors    
                if (err) {
                    console.log(err);

                // Or log the doc
                } else { 
                    // Use the Comments id to find and update its note
                    Comments.findOneAndUpdate({ "_id": req.body.id }, {$push: {"like": like._id}})
                    
                    // Execute the above query
                    .exec((err, commentLike)=> {
                        // Log any errors
                        if (err) {
                        console.log(err);
                        }
                        //send new doc to browser
                        else{
                        res.json(commentLike);
                        }
                    });      
                };
            })
    },
    // Here we'll save the like based on the JSON input.
    postDislike: (req, res)=>{
        // we will save user who likes in the like model
        const newDislike = new Dislike({like: req.body.user});
            // Now, save that like to the db
            newDislike.save((err, dislike)=> {
                // Log any errors    
                if (err) {
                    console.log(err);

                // Or log the doc
                } else { 
                    // Use the Comments id to find and update its note
                    Comments.findOneAndUpdate({ "_id": req.body.id }, {$push: {"dislike": dislike._id}})
                    
                    // Execute the above query
                    .exec((err, commentDislike)=> {
                        // Log any errors
                        if (err) {
                        console.log(err);
                        }
                        //send new doc to browser
                        else{
                        res.json(commentDislike);
                        }
                    });      
                };
            })
    },
}
