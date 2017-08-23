import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../children/Search-working";

class ButtonBar extends Component {
    constructor(props) {
        super(props)
        // this.renderNavBtn = this.renderNavBtn.bind(this);
        this.setCurrency = this.setCurrency.bind(this);
    }
    // render Navbar depending on path
    renderNavBtn(){
      if(this.props.location == "/login" || this.props.location == "/register" ){
        // remove input
        $("#searchForm").addClass("invisible");
        return(      
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
        )
      } else {
        // add input
        $("#searchForm").removeClass("invisible");
        return(
          <li className="nav-item active">
            <Link to="/login" className="nav-link">Log In <span className="sr-only">(current)</span></Link>
          </li>
        )
      }
    }
    // pass this function to search component to get data back and send to main layout
    // setSearchResult(){
    //   this.props.setResult({});
    // }
    setCurrency(currency, rate, lat, lng, country, flag){
      // pass to its parent
      this.props.setCurrency(currency, rate, lat, lng, country, flag);
    }


    render() {
        return (
          <nav className="navbar navbar-light bg-light justify-content-between">
            <Link to="/" className="navbar-brand" >Logo</Link>
              {/* give access to search component and pass data back */}
              <Search setSearchResult={this.setSearchResult}
              setCurrency={this.setCurrency}
              />
              <ul className="navbar-nav right">
                {/* render all btn */}
                {this.renderNavBtn()}
              </ul>
          </nav>
          //    {/* <div>
          //  <Link to="/">
          //   <RaisedButton type="submit" label={"Home"} primary={true} style={style} />
          //   </Link>
          //    <Link to="/login">
          //   <RaisedButton type="submit" label={"Login"} primary={true} style={style} />
          //    </Link>
          //   <Link to="/edit_entry">
          //    <RaisedButton  type="submit" label={"Edit Entry"} primary={true} style={style} />
          //   </Link>
          //    <br />
          //    <Link to="/logout">
          //    <RaisedButton  type="submit" label={"Logout"} primary={true} style={style} />
          //  </Link>
          //    <Link to="/add_entry">
          //    <RaisedButton  type="submit" label={"Add Entry"} primary={true} style={style} />
          //   </Link>
          //    <Link to="/register">
          //    <RaisedButton  type="submit" label={"Register"} primary={true} style={style} />
          //    </Link>
          //    </div> */}
        );
    }
}
export default ButtonBar;