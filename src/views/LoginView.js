"use strict";

import React, { Component } from "react";
import Falcor from "falcor";
import falcorModel from "../falcorModel.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import LoginForm from "../components/LoginForm.js";
import {Snackbar} from "material-ui";

const mapStateToProps = (state) => ({
    ...state
});

//reducers go here
const mapDispatchToProps = (dispatch) => ({});

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
        this.login = this.login.bind(this);
    }

async login(credentials) {
    console.info("credentials", credentials);

    let loginResult = await falcorModel
    .call(
        ["login"],
        [credentials]
    ).
    then((result) => {
        return loginResult;
    });

    lettokenRes = await falcorModel.getValue("login.token");
    console.info("tokenRes", tokenRes);

    if (tokenRes === "INVALID") {
        //login failed, send error message
        let errorRes = await falcorModel.getValue("login.error");
        this.setState({error: errorRes});
        return;
    }

    if(tokenRes) {
        let username = await falcorModel.getValue("login.username");
        let role = await falcorModel.getValue("login.role");

        localStorage.setItem("token", tokenRes);
        localStorage.setItem("username", username);
        localStorage.setItem("role", role);

        this.props.history.pushState(null, "/dashboard");
        return;
    } else {
        alert("Bad login - you broke the internets");
    }
    return
}

    render() {
        return (
            <div>
            <LoginForm />
           
         
          </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);