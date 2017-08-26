// Import react component from react
import React, { Component } from "react";
import worldmapConfig from "../children/worldmap"
import Comments from "../children/Comments";


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
        this.renderEmbassy = this.renderEmbassy.bind(this);
        this.renderNativeName = this.renderNativeName.bind(this);
        this.renderWarning = this.renderWarning.bind(this);
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.state.lat){
            // If there is lat then call config
            worldmapConfig(this.props.state.country, this.props.state.lat, this.props.state.lng)
        }
        if(prevProps.state.rate !== this.props.state.rate){
            this.setState({rate: this.props.state.rate})
        }

        $(".close").on("click", function(e){
            e.preventDefault();
            $(".alert").addClass("invisible");
        })
    
    }
    componentDidMount(){
        $(".alert").addClass("invisible");
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
                <img src={this.props.state.flag} alt={this.props.state.country} className="flag border border-dark"/>
            )
        }
    }
    renderName(){
        if(this.props.state.country){
            return(
               <h2 className="countryName">{this.props.state.country}</h2>
            )
        }
    }
    renderNativeName(){
        if(this.props.state.nativeName){
            return(
                <div>
               <h4 className="nativeName">{this.props.state.nativeName}</h4>
               <h4 className="lan">Language: {this.props.state.language}</h4>
               </div>
            )
        }
    }
    renderCurrency(){
        if (this.props.state.currency){
            return(
                <div className="card">
                    <h4 className="card-header ">Exchange Rate</h4>
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <label className="col-3 col-form-label"><h4>USD</h4></label>
                                <div className="col-2">
                                <h5><input type="number" className="form-control-plaintext" value={this.state.dollar} onChange={this.handleUSChange}/></h5>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-3 col-form-label"><h4>{this.props.state.currency}</h4></label>
                                <div className="col-2">
                                <h5><input type="number" className="form-control-plaintext" value={this.state.rate} onChange={this.handleCurrencyChange}/></h5>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        
    }
    
    renderEmbassy(){
        if (this.props.state.embassyAddress){
            return(
                <div className="card">
                        {this.props.state.embassyAddress.map(function(detail, i){
                            if (i == 0){
                                return (<h4 key={i} className="card-header">{detail}</h4>)
                            } 
                            
                        })}
                        <div className="card-body">
                            {this.props.state.embassyAddress.map(function(detail, i){
                                if (i > 0 ){
                                    return(
                                        <p key={i} className="card-text">{detail}</p>)
                                }
                            })}      
                        </div>
                </div>
            )
        }
    }

    renderWarning(){
        // warning must not be an empty object to render
        if(!$.isEmptyObject(this.props.state.warning)){
            $(".alert").removeClass("invisible");
            return(<div className="alert alert-warning alert-dismissible fade show" role="alert">
                <button type="button" className="close"aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {this.props.state.warning.warning}! <a href={this.props.state.warning.link} className="alert-link">click here</a> on {this.props.state.warning.date}.
            </div>
            )
        }
    }

    render(){
        return(
            <div className="main-result">
                {/* where the travel alert render */}
                {this.renderWarning()}
                {/* where are country name, flag lan, and native name display */}
                <div className="container">
                    <div className="row row-header">   
                        <div className="col text-center">
                            {this.renderName()}
                        </div> 
                        <div className="col text-center">
                            {this.renderFlag()}
                        </div>
                        <div className="col text-center">
                            {this.renderNativeName()}
                        </div>
                    </div>
                </div>

                {/* where the amchart diplays */}
                <div className="container">
                    <div className="row">
                        {/* map collumn */}
                        <div className="col-8">
                                <div id="chartdiv"></div>
                        </div>
                        {/* where the embassy and currency display */}
                        <div className="col-4">
                            {this.renderEmbassy()}
                            {this.renderCurrency()}
                        </div>
                    </div>
                </div>
                {/* <Comments country={this.props.state.country}/> */}
            </div>
        )
    }
}

export default Result;