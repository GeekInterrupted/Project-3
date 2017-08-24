import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.setMainComponent = this.setMainComponent.bind(this);
  }

  setMainComponent(component){
    this.props.setMainComponent(component)
  }

  render() {
      return (
          <span>Have not <a href="#" onClick={()=>this.setMainComponent("register")}>registered</a>?</span>
      );
  }
}
export default LoginForm;