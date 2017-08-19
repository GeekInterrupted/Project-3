import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import entryActions from "../actions/entry.js";
import falcorModel from "../falcorModel.js";

//use the spread operator to spread one object state into a second one
const mapStateToProps = (state) => ({
    ...state
});
//bind the countries' actions to this.props component
const mapDispatchToProps = (dispatch) => ({
    entryActions: bindActionCreators(entryActions, dispatch)
});

class TravelDiary extends Component {
    constructor(props) {
        super(props);
     }

     //_fetch is the asynchronous function that will let us use the await keyword
     //using async await instead of promises will avoid callback hell situations
componentWillMount () {
    if(typeof window !== "undefined") {
    this._fetch();
    }
}

async _fetch() {
    const entriesLength = await falcorModel.
    getValue("entries.length").
    then((length) => length);
    

    const entries = await falcorModel.
    get(["entries", {from: 0, to: entriesLength-1},
    ["entryTitle", "entryContent"]])
    .then((entriesResponse) => entriesResponse.json.entries);

    //we will be able to dispatch an action from props since the entries object 
    //is fetched from Falcor and is now available in the reducer
        this.props.entryActions.entriesList(entries);
    }

    render() {
        let entryArray = [];

        for (let entryKey in this.props.entry) {
            //reducer is available via the routes/index.js
            const entryDetails = this.props.entry[entryKey];
        
            const currentEntry = (
                <div key = {entryKey}>
                <h2>Entry Title: {entryDetails.entryTitle}</h2>
                <h3>Entry Content: {entryDetails.entryContent}</h3>              
                </div>);
                entryArray.push(currentEntry);
            }
            return (
                <div>
                
                <h1>Travel Diary Entries</h1>
                {entryArray}
                </div>
            );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TravelDiary);