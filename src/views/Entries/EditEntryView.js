"use strict";

import React, { Component } from 'react';
import Falcor from 'falcor';
import { Link } from 'react-router';
import falcorModel from '../../falcorModel.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import entryActions from '../../actions/entry.js';
import { stateToHTML } from 'draft-js-export-html';
import { RaisedButton, Paper, Popover } from "material-ui";
import DefaultInput from '../../components/DefaultInput';
import Formsy from 'formsy-react';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  entryActions: bindActionCreators(entryActions, dispatch)
});

class EditEntryView extends Component {
  constructor(props) {
    super(props);
    this._onDraftJSChange = this._onDraftJSChange.bind(this);
    this._entryEditSubmit = this._entryEditSubmit.bind(this);
    this._fetchEntryData = this._fetchEntryData.bind(this);
    this._handleDeleteTap = this._handleDeleteTap.bind(this);
    this._handleDeletion = this._handleDeletion.bind(this);
    this._handleClosePopover = this._handleClosePopover.bind(this);

    this.state = {
      entryFetchError: null,
      entryEditSuccess: null,
      editedEntryID: null,
      entryDetails: null,
      title: 'test',
      contentJSON: {},
      htmlContent: '',
      openDelete: false,
      deleteAnchorEl: null,

    };
  }

  _handleDeleteTap(event) {
    this.setState({
      openDelete: true,
      deleteAnchorEl: event.currentTarget
    });
  }

  async _handleDeletion() {
    let entryID = this.state.editedEntryID;

    let deletetionResults = await falcorModel.call(
            ['entries', 'delete'],
            [entryID]
          ).then((result) => {
        return result;
      });

    this.props.entryActions.deleteEntry(entryID);
    this.setState({
      openDelete: false
    });
    this.props.history.pushState(null, '/dashboard');
  }

  _handleClosePopover() {
    this.setState({
      openDelete: false
    });
  }

  componentWillMount() {
    this._fetchEntryData();
  }

  _fetchEntryData() {
    let entryID = this.props.params.entryID;
    if(typeof window !== 'undefined' && entryID) {
      let entryDetails = this.props.entry.get(entryID);
      if(entryDetails) {
        this.setState({
          editedEntryID: entryID,
          entryDetails: entryDetails,
    
          contentJSON: entryDetails.entryContentJSON,
          htmlContent: entryDetails.entryContent
        });
      } else {
        this.setState({
          entryFetchError: true
        })
      }
    }
  }

  _onDraftJSChange(contentJSON, contentState) {
    let htmlContent = stateToHTML(contentState);
    this.setState({contentJSON, htmlContent});
  }

  async _entryEditSubmit(entryModel) {
    let currentEntryID = this.state.editedEntryID;
    let editedEntry = {
      _id: currentEntryID,
      entryTitle: entryModel.title,
      entrySubTitle: entryModel.subTitle,
      entryContent: this.state.htmlContent,entryContentJSON: this.state.contentJSON,
 
    }

    let editResults = await falcorModel
      .call(
            ['entries', 'update'],
            [editedEntry]
          ).
      then((result) => {
        return result;
      });

    this.props.entryActions.editEntry(editedEntry);
    this.setState({ entryEditSuccess: true });
  }



  render () {
    if(this.state.entryFetchError) {
      return <h1>Entry not found (invalid entry ID {this.props.params.entryID})</h1>;
    } else if(!this.state.editedEntryID) {
      return <h1>Loading entry details</h1>;
    } else if(this.state.entryEditSuccess) {
      return (
        <div style={{height: '100%', width: '75%', margin: 'auto'}}>
          <h3>Your entry has been edited successfully</h3>
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

    // let initialWYSIWYGValue = this.state.articleDetails.articleContentJSON;

    return (
      <div style={{height: '100%', width: '75%', margin: 'auto'}}>
        <h1>Edit an existing entry</h1>
        <Formsy.Form onSubmit={this._entryEditSubmit}>
          <DefaultInput
            onChange={(event) => {}}
            name='title'
            value={this.state.entryDetails.entryTitle}
            title='Entry Title (required)' required />
          <DefaultInput
            onChange={(event) => {}}
            name='subTitle'
            value={this.state.entryDetails.entrySubTitle}
            title='Entry Subtitle' />
  


          <RaisedButton
            onClick={this._entryEditSubmit}
            secondary={true}
            type="submit"
            style={{margin: '10px auto', display: 'block', width: 150}}
            label={'Submit Edition'} />
        </Formsy.Form>
        <h1>Delete permamently this entry</h1>
        <RaisedButton
          onClick={this._handleDeleteTap}
          label="Delete" />
        <Popover
          open={this.state.openDelete}
          anchorEl={this.state.deleteAnchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this._handleClosePopover}>
          <div style={{padding: 20}}>
            <RaisedButton
              onClick={this._handleDeletion}
              primary={true}
              label="Permament delete, click here"/>
          </div>
        </Popover>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEntryView);