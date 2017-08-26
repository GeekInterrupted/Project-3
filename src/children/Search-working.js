// Import react component from react
import React, { Component } from "react";

// import Helpers
import Helpers from "../config/Helpers";

// Create class component
class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            country: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // set this component state to whatever users type in real time
    handleChange(event){
        // grab the input value
        this.setState({country : event.target.value});
    }

    // when users click
    handleClick(event){
        event.preventDefault();
        // make HTTP requests from helpers
        Helpers.getEmbassyAndWarning(this.state.country).then(function(data){
            this.props.setEmbassyAndWarning(data);
        }.bind(this));

        // make HTTP requests from helpers
        Helpers.getCurrencyRate(this.state.country).then(function(data){
            // then set its parent state
            this.props.setCountryDetails(data.currency, data.xRate, data.lat, data.lng, data.country, data.nativeName, data.language, data.flag)
            this.props.setMainComponent("result");
        }.bind(this));
    
        // reset the state (clear the input);
        this.setState({country: ""});
    }

    render(){
        return(
                <form className="form-inline mr-sm-2" id="searchForm">
                    <input className="form-control mr-sm-2" 
                    type="text" 
                    value={this.state.country}
                    onChange={this.handleChange}
                    placeholder="Country Name" 
                    aria-label="Search"
                    />
                    <button className="btn btn-outline-primary my-2 my-sm-0" 
                    type="submit"
                    onClick={this.handleClick}
                    >
                    Search
                    </button>
                </form>
        )
    }
}

export default Search;