// Import react component from react
import React, { Component } from "react";

class LoginModal extends Component {
    constructor(props){
    super(props)
    }

    componentDidUpdate(){
        $('#username-input').focus()
    }

    render(){
            return(
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div  className="row">
                                    <div className="col-4 text-right">
                                        <label htmlFor="recipient-name" className="form-label">Username</label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" className="form-control" id="username-input"/>
                                     </div>
                                </div>
                                <div  className="row password-row">
                                    <div className="col-4 text-right">
                                        <label htmlFor="message-text" className="form-label">Password</label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" className="form-control" id="password-input"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                    <button type="button" className="btn btn-primary"><i className="fa fa-sign-in" aria-hidden="true"></i> Log In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <p>Have not yet been register?</p>   
                        </div>
                    </div>
                </div>
            </div>
            )
       
    }
}

export default LoginModal;