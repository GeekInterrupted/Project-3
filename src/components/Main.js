import React, { Component } from "react";
import Logo from "../components/Logo";

const styles = {
    container: {
    //   width: 500,
      textAlign: 'center',
      paddingTop: 10,
      float: "none",
      margin: "auto",
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