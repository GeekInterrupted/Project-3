//this is the main wrapper for the whole application
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import customTheme from "../components/customTheme";
import { RaisedButton, Paper } from "material-ui";
import ButtonBar from "../components/navBarButtons";
import Search from "../children/Search";
import Result from "../components/Result";
import Footer from "../components/Footer";

class MainLayout extends Component {
    constructor(props){
        super(props)
         // initialize state
         this.state = {
            embassyLink: "",
            embassyAddress: [],
            warning: {},
            alert: {},
            currency:  "",
            rate: 0
        }
        // this.setState = this.setResult.bind(this);
        this.setCurrency = this.setCurrency.bind(this);
    }
    // to handle result from search component
    // setResult(){
    //     this.setState({});
    // }
    setCurrency(currency, rate){
        // after get data back from its child then set to state
        this.setState({
            currency: currency,
            rate: rate
        })
    }
    render(){
        return (
            <div> 
            {/*  Passing path name to ButtonBar component*/}
            <ButtonBar location={this.props.location.pathname}
            // give acccess to ButtonBar to set state 
            setResult={this.setResult}
            setCurrency={this.setCurrency}
            /> 
            {/* <Search />       */}
            {this.props.children}

            <Footer />
           </div>  
        );
    }
}
export default MainLayout;