import rootReducer from "../reducers";
//Redux Thunk middleware allows you to write action creators that 
//return a function instead of an action. The thunk can be used to 
//delay the dispatch of an action, or to dispatch only if a certain condition is met.
import thunk from "redux-thunk"; //server side rendering
import {applyMiddleware, compose, createStore} from "redux";

export default function configureStore
(initialState, debug = false) {
    let createStoreWithMiddleware;
    const middleware = applyMiddleware(thunk);

    createStoreWithMiddleware = compose(middleware);

    const store = createStoreWithMiddleware
    (createStore) (
        rootReducer, initialState
    );
    //exporting store composed by many reducers in index.js
    //handles the server-rendering initial state
    return store; 
}


