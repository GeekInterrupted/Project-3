// Import react component from react
import React, { Component } from "react";
// import Helpers
import Helpers from "../config/Helpers";

class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: "",
            user: "",
            initComments: []
        }
        this.handleComment = this.handleComment.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleDislikeClick = this.handleDislikeClick.bind(this);
        this.renderComments = this.renderComments.bind(this);

    }
    componentDidUpdate(prevProps, prevState){     
        if(prevProps.country !== this.props.country){
            console.log(this.props.country)
            // get all comments
            Helpers.getComments(this.props.country).then(comments=>{
                
                // set all comments
                this.setState({initComments: comments});
            })
        }
        
    }

    handleComment(e){
        // set state to whatever users type
        this.setState({ comment: e.target.value});
    }

    handleUser(e){
        // set state to whatever users type
        this.setState({ user: e.target.value})
    }


    handleSubmit(e){
        // prevent browser refreshing
        e.preventDefault();
        if(this.state.user.length < 2){
            $("#inputName").addClass("is-invalid");
        } else{
            // passing country user and comment
            Helpers.postComment(this.props.country, this.state.user, this.state.comment).then(result=>{
                // then reset state
                this.setState({comment:"", user: ""});
                // get new data
                Helpers.getComments(this.props.country).then(comments=>{
                    // set all comments
                    this.setState({initComments: comments});
                    
                })
            });
        }
        
    }
    handleLikeClick(e, id){
        e.preventDefault();

        Helpers.postLike(id, "Jan Doe").then(dislike=>{
            // get new data
            Helpers.getComments(this.props.country).then(comments=>{
                // set all comments
                this.setState({initComments: comments});
                
            })
        })
    }

    handleDislikeClick(e, id){
        e.preventDefault();
        
                Helpers.postDislike(id, "Joan Doe").then(like=>{
                    // get new data
                    Helpers.getComments(this.props.country).then(comments=>{
                        // set all comments
                        this.setState({initComments: comments});
                        
                    })
                })
    }

    renderComments(){
        // if there are any comments
        if(this.state.initComments[0]){
            return ( 
                <div>
                    {this.state.initComments.map(function(comments, i){
                        if (i % 2 == 0){
                            return(
                                <div className="row ml-5" key={comments._id}>
                                    <div className="col-6">
                                        <div className="media"> 
                                            <img className="d-flex mr-3 profile-photo" src="https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/13381310_1092885060784022_1610038092_n.jpg?ig_cache_key=MTI3MTgxNTc3NDk3NjE4Mzc0MA%3D%3D.2" alt="pofile photo"/>
                                        <div className="media-body">
                                            <h5 className="mt-0">{comments.user}</h5>
                                            {comments.comment}

                                            {/* dislike and like btn */}
                                                {/* like btn */}
                                                <a href="#"
                                                onClick={(e)=>this.handleLikeClick(e, comments._id)}>
                                                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                                </a><span className="badge badge-primary">{comments.like.length == 0? "": comments.like.length}</span>

                                                {/* dislike btn */}
                                                <a href="#" role="button"
                                                onClick={(e)=>this.handleDislikeClick(e, comments._id)}>
                                                <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                                                </a><span className="badge badge-danger">{comments.dislike.length == 0? "": comments.dislike.length}</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        } else {
                            return(
                                <div className="row justify-content-end mr-5" key={comments._id}>
                                    <div className="col-6">
                                        <div className="media"> 
                                            <div className=" mr-4 media-body text-right">
                                                <h5>{comments.user}</h5>
                                                {comments.comment}

                                                {/* dislike and like btn */}
                                                <p>
                                                    {/* dislike btn */}
                                                    <a href="#"
                                                    onClick={(e)=>this.handleDislikeClick(e, comments._id)}>
                                                    <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                                                    </a><span className="badge badge-danger">{comments.dislike.length == 0? "": comments.dislike.length}</span> 

                                                    {/* like btn */}
                                                    <a href="#"
                                                    onClick={(e)=>this.handleLikeClick(e, comments._id)}>
                                                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                                    </a><span className="badge badge-primary">{comments.like.length == 0? "": comments.like.length}</span>
                                                </p>
                                            </div>
                                            <img className="d-flex mr-3 profile-photo" src="http://sheisfiercehq.com/wp-content/uploads/2015/01/Kelly-Cartoon-Headshot.jpg" alt="profile photo"/>
                                        </div>
                                    </div>
                                </div>
                        )}
                    },this)}
                </div>
            )
        }
    }
    
    render(){
        return(
            <div className="mt-5 container comments-area">
                {this.renderComments()}
            {/* comment area */}
            <div className="row justify-content-center">
                <div className="col-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputAddress" className="col-form-label">Name</label>
                            <input type="text" 
                            className="form-control col-6" 
                            id="inputName" 
                            placeholder="Your name"
                            value={this.state.user}
                            onChange={this.handleUser}
                            required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Comment</label>
                            <textarea className="form-control" 
                            id="comment" 
                            rows="3"
                            value={this.state.comment}
                            onChange={this.handleComment}
                            required
                            ></textarea>
                            <div className="mt-4 row justify-content-center submit-btn">
                                <a className="btn btn-primary" 
                                href="#" 
                                role="button"
                                onClick={this.handleSubmit}
                                >Submit</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Comments;