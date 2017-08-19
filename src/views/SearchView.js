import React, { Component } from "react";
import Falcor from "falcor";
import falcorModel from "../falcorModel.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Search from "../children/Search";

const mapStateToProps = (state) => ({
    ...state
  });

const mapDispatchToProps = (dispatch) => ({});

class SearchView extends Component {
    render() {
        return (
            <div>
            THIS IS A PLACEHOLDER FOR SEARCH
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchView);