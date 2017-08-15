// Import react component from react
import React, { Component } from "react";

// import Helpers
import Helpers from "../config/Helpers";


// Create class component
class Search extends Component {
    constructor(){
        super()
        // initialize state
        this.state = {
            country: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // set this component state to whatever users type in real time
    handleChange(event){
        // grab the input value
        this.setState({country : event.target.value})
    }
    // when users click
    handleClick(event){
        event.preventDefault();
        console.log(`This is the Seach's state ${this.state.country}`);
        
        // make HTTP requests from helpers
        Helpers.getCurrencyRate(this.state.country);
        Helpers.getEmbassyAndWaring(this.state.country);
    }

    render(){
        return(
                <form>
                    <input 
                    type="text"
                    value={this.state.country}
                    onChange={this.handleChange}
                    placeholder="Country"
                    />
                    <button
                    type="button"
                    onClick={this.handleClick}
                    >Submit</button>
                </form>
        )
    }
}

export default Search;