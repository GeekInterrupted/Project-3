import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import country from "./reducers/country";
import TravelDiary from "./layouts/TravelDiary";
import Search from "./children/Search";


/*createStore utility
Creates a Redux store that holds the complete state tree of your app
*/
const store = createStore(country);

render(
    <div id="main">
    <Provider store = {store}>   
    <TravelDiary />
    </Provider>
    <Search />
    </div>,
    document.getElementById("Root")
);

