// Import react component from react
import React, { Component } from "react";
import worldmapConfig from "../children/worldmap"


class Result extends Component {
    constructor(props){
        super(props)
        this.state ={
            dollar: 1,
            rate: 0
        }
        this.renderFlag = this.renderFlag.bind(this);
        this.renderName = this.renderName.bind(this);
        this.renderCurrency= this.renderCurrency.bind(this);
        this.handleUSChange = this.handleUSChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.state.lat){
            // If there is lat then call config
            worldmapConfig(this.props.state.country, this.props.state.lat, this.props.state.lng)
        }
        if(prevProps.state.rate !== this.props.state.rate){
            this.setState({rate: this.props.state.rate})
        }
    
    }
    handleUSChange(e){
        let dollarValue = parseFloat(e.target.value).toFixed(2);
        let convertValue = parseFloat(dollarValue *= this.props.state.rate).toFixed(2);
        this.setState({ dollar: e.target.value, rate : convertValue});
        
    }
    handleCurrencyChange(e){
        let currencyValue = parseFloat(e.target.value).toFixed(2);
        let convertValue = parseFloat(currencyValue /= this.props.state.rate).toFixed(2);
        this.setState({ rate: e.target.value, dollar : convertValue});
    }
    renderFlag(){
        if(this.props.state.flag){
            return(
                <img src={this.props.state.flag} alt={this.props.state.country} className="flag"/>
            )
        }
    }
    renderName(){
        if(this.props.state.country){
            return(
               <h1 className="countryName">{this.renderFlag()}{this.props.state.country}</h1>
            )
        }
    }
    renderCurrency(){
        if (this.props.state.currency){
            return(
                <div className="card">
                    <h4 className="card-header">Currency and Exchange Rate</h4>
                    <div className="card-body">
                        <h4 className="card-title">USD <input type="number" value={this.state.dollar} onChange={this.handleUSChange}/></h4>
                        <h4 className="card-title">{this.props.state.currency} <input type="number" value={this.state.rate} onChange={this.handleCurrencyChange}/></h4>
                    </div>
                </div>
            )
        }
        
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="container">
                        <div className="text-center">
                            {/* {this.renderFlag()} */}
                            {this.renderName()}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* map collumn */}
                    <div className="col-lg-8">
                            <div id="chartdiv"></div>
                    </div>
                    <div className="col-lg-4">
                                <div className="card">
                                    <h4 className="card-header">U.S. Embassy</h4>
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                        {this.renderCurrency()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;