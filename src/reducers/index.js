import {combineReducers} from "redux";
import {routeReducer} from "redux-simple-router";
import entry from "./entry";

export default combineReducers ({
    routing: routeReducer,
    entry
});

