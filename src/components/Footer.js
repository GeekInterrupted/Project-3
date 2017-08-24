import React, { Component } from "react";

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="container">
                <span className="text-muted text-center"><p className="p-footer">&copy; Crazy B*tches || 
                    Olga O'Neal    
                    <a href="https://github.com/GeekInterrupted/">
                    <i className="fa fa-github"></i></a>
                    |
                    Kotchaparn Wongkor 
                    <a href="https://www.linkedin.com/in/kotchaparn-wongkor ">
                    <i className="fa fa-linkedin"></i></a> 
                    <a href="https://github.com/kotchaparn-w">
                    <i className="fa fa-github"></i></a></p>
                </span>
                </div>
            </footer>
        )
    }
}

export default Footer;
