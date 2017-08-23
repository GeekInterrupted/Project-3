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
        this.renderembassy = this.renderembassy.bind(this);
    }

    // set this component state to whatever users type in real time
    handleChange(event){
        // grab the input value
        this.setState({country : event.target.value});
    }
    // when users click
    handleClick(event){
        event.preventDefault();
        console.log(`This is the Search's state ${this.state.country}`);
        
        // make HTTP requests from helpers
        Helpers.getCurrencyRate(this.state.country).then(function(data){
            // then set its parent state
            this.props.setCurrency(data.currency, data.xRate, data.lat, data.lng, data.country, data.flag)
        }.bind(this));
        // Helpers.getEmbassyAndWaring(this.state.country).then(function(data){
        //         console.log(data);
        //         // Iterate the data and check if there are alert or warning
        //         for(let i = 0; i < data.length; i++){
        //             // set state with all data we get
        //             if (data[0]){
        //                 this.setState({embassyLink: data[0].link, embassyAddress: data[0].embassy});                     
        //             }
        //             // if there is a warning
        //             if(data[1]){
        //                 this.setState({warning: data[1]});
        //             } 
        //             // if there is an alert
        //             if(data[2]){
        //                 this.setState({alert: data[2]});
        //             } 
        //         }
        // }.bind(this));
        // reset the state (clear the input);
        this.setState({country: ""});
    }

    renderembassy() {
        // if there is something in embassy array then render it
        if(this.state.embassyLink){

            // if there is an alert
            if(this.state.warning){
                return(
                    <div>
                        <a href={this.state.embassyLink}><strong>{this.state.embassyAddress[0]}</strong></a>
                        {/* iterate through address array */}
                        {this.state.embassyAddress.map(function(detail, i){  
                                if(i > 0){
                                    return(
                                        <p key={i}>{detail}</p>
                                    )
                                }
                        })}
                        {/* assign warning info */}
                        <a href={this.state.warning.link}>{this.state.warning.warning}</a>
                        <p>{this.state.warning.date}</p>
                    </div>
                ) 
            // if there is an alert and
            }else if(this.state.alert && this.state.alert){
                // do something in here

                // if there is neither alert nor warning
            }else{
                return(
                    <div>
                        {/* render embassy detail */}
                        <a href={this.state.embassyLink}><strong>{this.state.embassyAddress[0]}</strong></a>
                        {this.state.embassyAddress.map(function(detail, i){  
                                if(i > 0){
                                    return(
                                        <p key={i}>{detail}</p>
                                    )
                                }
                        })}
                   </div>
                )              
            }
        }
    }

    render(){
        return(
                <form className="form-inline mr-sm-2" id="searchForm">
                    <input className="form-control mr-sm-2" 
                    type="text" 
                    value={this.state.country}
                    onChange={this.handleChange}
                    placeholder="Country" 
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