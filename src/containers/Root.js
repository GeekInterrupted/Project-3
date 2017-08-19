//main root file
import React, { Component } from "react";
import { Router } from 'react-router';
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import routes from "../routes";
import createHashHistory from "history/lib/createHashHistory";
// import { createHashHistory, BrowserRouter, HashRouter, MemoryRouter, StaticRouter } from 'history'



class Root extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    }
    render() {
        return (
            <Provider store = {this.props.store}>
            <div>
            <Router history = {this.props.history}>
            {routes}
            </Router>
            </div>
            </Provider>
        )
    }
};
export default Root;
