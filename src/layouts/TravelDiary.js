import React, { Component } from "react";
import { connect } from "react-redux";

//line 30 needs to be fixed = not parsing the object properly 
//<h3>Calling Codes: {countryDetails.countryCallingCodes}</h3>


//use the spread operator to spread one object state into a second one
const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
});

class TravelDiary extends Component {
    constructor(props) {
        super(props);
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

                <h3>Currency: {countryDetails.countryCurrency.toString()}</h3>

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