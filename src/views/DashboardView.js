"use strict";

import React, { Component } from "react";
import Falcor from "falcor";
import falcorModel from "../falcorModel.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LoginForm } from "../components/LoginForm.js";
import { Link } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {RaisedButton, 
        Paper, 
        Avatar, 
        List, 
        ListItem, 
        ActionInfo, 
        FileFolder, 
        Divider } from "material-ui";

const mapStateToProps = (state) => ({
...state
});

const mapDispatchToProps = (dispatch) => ({
})

class DashboardView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let entryArray = [];
        this.props.entry((entryDetails, entryKey) => {
            let entryContentPlainText = entryDetails.entryContent.replace(/<\/?[^>]+(>|$)/g, "");
            let currentEntry = (
                <Link to={`/edit-entry/${entryDetails['_id']}`} key={entryKey}>
                <ListItem
                primaryText={entryDetails.entryTitle}
                secondaryText={entryDetails.entryContentPlainText}/>
                </Link>
            );
            entryArray.push(currentEntry);
        });
        return (
            <div style={{height: '100%', width: '75%', margin: 'auto'}}>
            <MuiThemeProvider>
            <Link to='/add-entry'>
              <RaisedButton
              label="Create an entry"
              secondary={true}
              style={{margin: '20px 20px 20px 20px'}} />
            </Link>
            <List>
              {entryArray}
            </List>
            </MuiThemeProvider>
          </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);