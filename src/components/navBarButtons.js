import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

const style = {
  margin: 12,
};

class ButtonBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {

return (
  <div>
    <Link to="/">
    <RaisedButton type="submit" label={"Home"} primary={true} style={style} />
    </Link>
    <Link to="/login">
    <RaisedButton type="submit" label={"Login"} primary={true} style={style} />
    </Link>
    <Link to="/edit-entry">
    <RaisedButton  type="submit" label={"Edit Entry"} primary={true} style={style} />
    </Link>
    <br />
      {/*content of current route will go in the props.children below */}
    {this.props.children}
    <br />

  </div>
);
}
}
export default ButtonBar;