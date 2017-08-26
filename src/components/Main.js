import React, { Component } from "react";
import Logo from "../components/Logo";
import Landscape from "../components/Landscape";

const styles = {
    container: {
    //   width: 500,
      textAlign: 'center',
      paddingTop: 150,
      float: "none",
      margin: "auto",
    //   height: 100,
    },
      };

class Main extends Component {
    constructor(props) {
        super(props);
     } 
    render() {
            return (
                <div className="main-logo particle" style = {styles.container}>
                    
                  
                <Logo />
                    
                </div>
            );
    }
}
export default Main;