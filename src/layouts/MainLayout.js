//this is the main wrapper for the whole application
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import customTheme from "../components/customTheme";
import { RaisedButton, Paper } from "material-ui";
import ButtonBar from "../components/navBarButtons";
import Footer from "../components/Footer";
import Result from "../components/Result";

class MainLayout extends Component {
    constructor(props){
        super(props)
         // initialize state
         this.state = {
            country: "",
            flag: "",
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
    setCurrency(currency, rate, lat, lng, country, flag){
        // after get data back from its child then set to state
        this.setState({
            currency: currency,
            rate: rate,
            lat: lat,
            lng: lng,
            country: country,
            flag: flag
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
            <Result state={this.state}/>
            {/* {this.props.children} */}

            <Footer />
           </div>  
        );
    }
}
export default MainLayout;