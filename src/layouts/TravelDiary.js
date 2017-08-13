import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import countryActions from "../actions/country.js";
import falcorModel from "../falcorModel.js";

//line 30 needs to be fixed = not parsing the object properly 
//<h3>Calling Codes: {countryDetails.countryCallingCodes}</h3>


//use the spread operator to spread one object state into a second one
const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    countryActions: bindActionCreators(countryActions, dispatch)
});

class TravelDiary extends Component {
    constructor(props) {
        super(props);
     }

     //_fetch is the asynchronous function that will let us use the await keyword
     //using async await instead of promises will avoid callback hell situations
componentWillMount () {
    this._fetch();
}

async _fetch() {
    const countriesLength = await falcorModel.
    getValue("countries.length").
    then((length) => length);

    const countries = await falcorModel.
    get(["countries", {from: 0, to: countriesLength-1},
    ["id", "countryName", "countryLang", "countryCapital", "countryCallingCodes"]])
    .then((countriesResponse) => countriesResponse.json.countries);

//we will be able to dispatch an action from props since the countries object 
//is fetched from Falcor and is now available in the reducer
    this.props.countryActions.countriesList(countries);
    
}


    render() {
        let countryArray = [];

        for (let countryKey in this.props) {
            const countryDetails = this.props[countryKey];
            console.log(countryDetails);
            const currentCountry = (
                <div key = {countryKey}>
                <h2>Country Name: {countryDetails.countryName}</h2>
                <h3>Capital: {countryDetails.countryCapital}</h3>
                <h3>Calling Codes: {countryDetails.countryCallingCodes}</h3>

                <h3>Currency: {countryDetails.countryCurrency}</h3>

                <h3>Language: {countryDetails.countryLang}</h3>
                
                </div>);
                countryArray.push(currentCountry);
            }
            return (
                <div>
                <h1>Countries of the world</h1>
                {countryArray}
                </div>
            );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TravelDiary);