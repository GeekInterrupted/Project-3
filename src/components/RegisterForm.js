import React from 'react';
import Formsy from 'formsy-react';
import { RaisedButton, Paper } from 'material-ui';
import DefaultInput from './DefaultInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from '../components/customTheme';

export class RegisterForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Formsy.Form onSubmit={this.props.onSubmit}>
        <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
        <Paper zDepth={1} style={{padding: 32}}>
          <h3>Registration form</h3>
          <DefaultInput onChange={(event) => {}} name='username' title='Username'
    required />
          <DefaultInput onChange={(event) => {}} name='firstName' title='Firstname' required
    />
          <DefaultInput onChange={(event) => {}} name='lastName' title='Lastname'
    required />
          <DefaultInput onChange={(event) => {}} name='email' title='Email' required />
          <DefaultInput onChange={(event) => {}} type='password' name='password'
    title='Password' required />
          <div style={{marginTop: 24}}>
            <RaisedButton
            secondary={true}
            type="submit"
            style={{margin: '0 auto', display: 'block', width: 150}}
            label={'Register'} />
          </div>
        </Paper>
        </ MuiThemeProvider>
    </Formsy.Form>
    );
  }
}