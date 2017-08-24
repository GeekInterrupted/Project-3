
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
        // If props.state toggleModal equals false then render login btn
        if(!this.props.state.toggleModal){
          return(
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>$(".modal").modal('show')}>Login</a>
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