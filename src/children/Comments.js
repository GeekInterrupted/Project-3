// Import react component from react
import React, { Component } from "react";
// import Helpers
import Helpers from "../config/Helpers";

class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: "",
            initComments: []
        }
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleDislikeClick = this.handleDislikeClick.bind(this);

    }
    componentDidMount(){
        console.log("Component comments did update");
        // get all comments
        Helpers.getComments(this.props.country).then(comments=>{
            // set all comments
            this.setState({initComments: comments});
        })
    }

    handleComment(e){
        // set state to whatever users type
        this.setState({ comment: e.target.value});
    }

    handleSubmit(e){
        // prevent browser refreshing
        e.preventDefault();
        // passing country user and comment
        Helpers.postComment(this.props.country, "John Doe", this.state.comment).then(result=>{
            console.log(result);

            // then reset state
            this.setState({comment:""});
        });
    }
    handleLikeClick(id){

        event.preventDefault();

        Helpers.postLike(id, "Jan Doe").then(like=>{
            // get new data
            Helpers.getComments(this.props.country).then(comments=>{
                // set all comments
                this.setState({initComments: comments});
                
            })
        })
    }

    handleDislikeClick(id){
        event.preventDefault();
        
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
                                            <img className="d-flex mr-3" src="http://via.placeholder.com/40x40" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <h5 className="mt-0">{comments.user}</h5>
                                            {comments.comment}

                                            {/* dislike and like btn */}
                                            <p>
                                                {/* like btn */}
                                                <a href="#"
                                                onClick={()=>this.handleLikeClick(comments._id)}>
                                                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                                </a><span className="badge badge-primary">{comments.like.length == 0? "": comments.like.length}</span>

                                                {/* dislike btn */}
                                                <a href="#"
                                                onClick={()=>this.handleDislikeClick()}>
                                                <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                                                </a><span className="badge badge-danger">{comments.dislike.length == 0? "": comments.dislike.length}</span> 
                                            </p>
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
                                                    onClick={()=>this.handleDislikeClick()}>
                                                    <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                                                    </a><span className="badge badge-danger">{comments.dislike}</span> 

                                                    {/* like btn */}
                                                    <a href="#"
                                                    onClick={()=>this.handleLikeClick()}
                                                    id={comments._id}>
                                                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                                    </a><span className="badge badge-primary">{comments.like}</span>
                                                </p>
                                            </div>
                                            <img className="d-flex mr-3" src="http://via.placeholder.com/40x40" alt="Generic placeholder image"/>
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
                            <label htmlFor="exampleFormControlTextarea1">Comment</label>
                            <textarea className="form-control" 
                            id="comment" 
                            rows="3"
                            value={this.state.comment}
                            onChange={this.handleComment}
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