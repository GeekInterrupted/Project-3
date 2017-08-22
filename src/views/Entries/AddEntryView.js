"use strict";

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stateToHTML } from 'draft-js-export-html';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import entryActions from '../../actions/entry.js';
import { RaisedButton, Paper, Popover } from "material-ui";
import falcorModel from '../../falcorModel.js';
import DefaultInput from '../../components/DefaultInput';
import Formsy from 'formsy-react';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  entryActions: bindActionCreators(entryActions, dispatch)
});

class AddEntryView extends Component {
  constructor(props) {
    super(props);
    // this._onDraftJSChange = this._onDraftJSChange.bind(this);
    this._entrySubmit = this._entrySubmit.bind(this);
    this.state = {
      title: 'test',
      contentJSON: {},
      htmlContent: '',
      newEntryID: null,
    };
  }

  async _entrySubmit(entryModel) {
    let newEntry = {
      entryTitle: entryModel.title,
      entrySubTitle: entryModel.subTitle,
      entryContent: this.state.htmlContent,
      entryContentJSON: this.state.contentJSON
    }
    let newEntryID = await falcorModel
    .call(
      'entries.add',
      [newEntry]
    ).then((result) => {
      return falcorModel.getValue(
        ['entries', 'newEntryID']
      ).then((entryID) => {
        return entryID;
      });
    });

    newEntry['_id'] = newEntryID;
    this.props.entryActions.pushNewEntry(newEntry);
    this.setState({ newEntryID: newEntryID });
  }


  _onDraftJSChange(contentJSON, contentState) {
    let htmlContent = stateToHTML(contentState);
    this.setState({contentJSON, htmlContent});
  }

  render () {
    if(this.state.newEntryID) {
      return (
        <div style={{height: '100%', width: '75%', margin: 'auto'}}>
          <h3>Your new entry ID is {this.state.newEntryID}</h3>
          <Link to='/dashboard'>
            <RaisedButton
              secondary={true}
              type="submit"
              style={{margin: '10px auto', display: 'block', width: 150}}
              label='Done' />
          </Link>
        </div>
      );
    }
    return (
      <div style={{height: '100%', width: '75%', margin: 'auto'}}>
        <h1>Add Entry</h1>
        <Formsy.Form onSubmit={this._entrySubmit}>
          <DefaultInput
            onChange={(event) => {}}
            name='title'
            title='Entry Title (required)' required />

          <DefaultInput
            onChange={(event) => {}}
            name='subTitle'
            title='Entry Subtitle' />

       
            
    

          <RaisedButton
            secondary={true}
            type="submit"
            style={{margin: '10px auto', display: 'block', width: 150}}
            label={'Submit Entry'} />
        </Formsy.Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryView);