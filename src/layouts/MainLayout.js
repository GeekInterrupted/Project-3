//this is the main wrapper for the whole application
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MainLayout extends Component {
    constructor(props){
        super(props)
    }
    // static propTypes = {
    //     children: PropTypes.element
    // }
    render() {
        return (
            <div>
            <span>
            Links: <Link to = "/login">Login </Link>
            </span>
            || <Link to = "/edit-entry"> Edit Entry</Link>
            <br />
            {/*content of current route will go in the props.children below */}
            {this.props.children}
            </div>
        );
    }
}
export default MainLayout;