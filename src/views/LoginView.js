import React, { Component } from "react";
import Falcor from "falcor";
import falcorModel from "../falcorModel.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => ({
    ...state
});

//reducers go here
const mapDispatchToProps = (dispatch) => ({});

class LoginView extends Component {
    render() {
        return (
            <div>
            <h1>Login View</h1>
            PLACEHOLDER FOR LOGIN FORM
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);