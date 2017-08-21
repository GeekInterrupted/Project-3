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

class MainLayout extends Component {
    constructor(props){
        super(props)
    }
    // static propTypes = {
    //     children: PropTypes.element
    // }
    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>  
  
            <div> 
            <ButtonBar /> 
            <br />
            <br />
            <br />
            <Search />      
          
            {this.props.children}
            </div>
           
            </MuiThemeProvider>
        );
    }
}
export default MainLayout;