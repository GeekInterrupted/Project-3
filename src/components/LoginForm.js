import React, { Component } from "react";
import Formsy from "formsy-react";
import { RaisedButton, Paper } from "material-ui";
import DefaultInput from "./DefaultInput";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customTheme from '../components/customTheme';
import { Link } from "react-router-dom";

const styles = {
  container: {
    width: 500,
    textAlign: 'center',
    paddingTop: 10,
    float: "none",
    margin: "auto",
  },
};

class LoginForm extends Component {
  constructor() {
    super();
  }

  render() {
      return (
        <Formsy.Form onSubmit={this.props.onSubmit}>
        <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}> 
        <div style = {styles.container}>
        <Paper zDepth={1} style={{padding: 32}}>
          <h3>Log in</h3>
          <DefaultInput onChange={(event) => {}} name='username' title='Username (admin)'
      required />
          <DefaultInput onChange={(event) => {}} type='password' name='password'
      title='Password (123456)' required />
          <div style={{marginTop: 24}}>
           <RaisedButton
            secondary={true}
            type="submit"
            style={{margin: '0 auto', display: 'block', width: 150}}
            label={'Log in'} />
          </div>
          <span>Have not <Link to="/register">registered</Link>?</span>
        </Paper>
        </div>
        </MuiThemeProvider>
      </Formsy.Form>
    );
  }
}
export default LoginForm;