//main root file
import React, { Component } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Result from "../components/Result";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import LoginModal from "../children/LoginModal";
import Comments from "../children/Comments";


class Root extends Component {
    constructor(props){
        super(props)
        // initialize state
        this.state = {
            mainComponent: "comment",
            nativeName: "",
            language: "",
            country: "Thailand",
            flag: "",
            embassyLink: "",
            embassyAddress: [],
            warning: {},
            alert: {},
            currency:  "",
            rate: 0,
        }
        this.renderComponent = this.renderComponent.bind(this);
        this.setMainComponent = this.setMainComponent.bind(this);
        this.setEmbassyAndWarning = this.setEmbassyAndWarning.bind(this);
        this.setCountryDetails = this.setCountryDetails.bind(this);
    }

    setCountryDetails(currency, rate, lat, lng, country, native, language, flag){
        // after get data back from its child then set to state
        this.setState({
            currency: currency,
            rate: rate,
            lat: lat,
            lng: lng,
            country: country,
            nativeName: native,
            language: language,
            flag: flag
        })
    }
    
    renderComponent(){
        switch(this.state.mainComponent){
            case "main":
                return(<Main />)
            case "login":
                return(<LoginForm setMainComponent={this.setMainComponent}/>)
            case "result":
                return(<Result state={this.state}/>)
            case "comment":
                return(<Comments country={this.state.country}/>)
            default:
                return(<Main />)
        }
    }
    setEmbassyAndWarning(data){
        console.log(data);
        // if there is no warning
        if(data.length == 1){
            this.setState({
                embassyAddress: data[0].embassy,
                embassyLink: data[0].link,
                warning: {}
            })
        } else if(data.length == 2){
            this.setState({
                embassyAddress: data[0].embassy,
                embassyLink: data[0].link,
                warning: data[1]
            })
        }
    }

    setMainComponent(component){
        this.setState({mainComponent: component})
    }
    render() {
        return (
                <div>
                    <NavBar setMainComponent={this.setMainComponent}
                    setEmbassyAndWarning={this.setEmbassyAndWarning}
                    // give acccess to ButtonBar to set state
                    state={this.state}
                    setToggleModal={this.setToggleModal}
                    setCountryDetails={this.setCountryDetails}
                    /> 

                    {/* We are going to render everything here */}
                        {this.renderComponent()}

                    {/* passing toggleModal state to LoginModal Component */}
                    <LoginModal toggleModal={this.state.toggleModal}/>
                    <Footer />
                </div>
        )
    }
};
export default Root;
