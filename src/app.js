import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import country from "./reducers/country";
import TravelDiary from "./layouts/TravelDiary";


/*createStore utility
Creates a Redux store that holds the complete state tree of your app
*/
const store = createStore(country);

render(
    <Provider store = {store}>
    <TravelDiary />
    </Provider>,
    document.getElementById("Root")
);

