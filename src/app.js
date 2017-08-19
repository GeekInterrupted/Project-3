import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {syncReduxAndRouter} from "redux-simple-router";
import Root from "./containers/Root";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { createStore } from "redux";
import entry from "./reducers/entry";
import TravelDiary from "./layouts/TravelDiary";

const target = document.getElementById("Root");
const history = createBrowserHistory();

export const store = configureStore (window.__INITIAL_STATE__);

syncReduxAndRouter(history, store);

const node = (
    <Root
    history={history}
    store={store}
    />   
);

ReactDOM.render(node, target);

/*createStore utility
Creates a Redux store that holds the complete state tree of your app
*/
// const store = createStore(entry);

// render(
//     <div id="main">

//     <Search />
//     <Provider store = {store}>   
//     <TravelDiary />
//     </Provider>
    
//     <br />
//     <br />
//     <br />
//     </div>,
//     document.getElementById("Root")
// );

