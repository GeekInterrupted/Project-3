
import React, { Component } from "react";
import Search from "../children/Search-working";

class NavBar extends Component {
    constructor(props) {
        super(props)
        // this.renderNavBtn = this.renderNavBtn.bind(this);
        this.setCountryDetails = this.setCountryDetails.bind(this);
        this.setEmbassyAndWarning = this.setEmbassyAndWarning.bind(this);
        this.setMainComponent = this.setMainComponent.bind(this);
    }
    // render Navbar depending on mainComponent
    renderNavBtn(){
      if(this.props.state.mainComponent == "login" || this.props.state.mainComponent == "register" ){
        // remove input
        $("#searchForm").addClass("invisible");
        return(      
          <li className="nav-item active">
            <a href="# "className="nav-link" onClick={()=>this.setMainComponent("main")}>Home <span className="sr-only">(current)</span></a>
          </li>
        )
      } else {
        // add input
        $("#searchForm").removeClass("invisible");
        return(
          <li className="nav-item active">
            <a href="#" className="nav-link" onClick={()=>this.setMainComponent("login")}>Log In <span className="sr-only">(current)</span> </a>
          </li>
        )
      }
    }

    setMainComponent(component){
      this.props.setMainComponent(component)
    }
    // pass this function to search component to get data back and send to main layout
    setEmbassyAndWarning(chunk){
      this.props.setEmbassyAndWarning(chunk);
    }
    setCountryDetails(currency, rate, lat, lng, country, native, language, flag){
      // pass to its parent
      this.props.setCountryDetails(currency, rate, lat, lng, country, native, language, flag);
    }


    render() {
        return (
          <nav className="navbar navbar-light bg-light justify-content-between">
            <a href="/" className="navbar-brand" >Logo</a>
              {/* give access to search component and pass data back */}
              <Search setSearchResult={this.setSearchResult}
              setEmbassyAndWarning={this.setEmbassyAndWarning}
              setCountryDetails={this.setCountryDetails}
              setMainComponent={this.setMainComponent}
              />
              <ul className="navbar-nav right">
                {/* render all btn */}
                {this.renderNavBtn()}
              </ul>
          </nav>

        );
    }
}
export default NavBar;