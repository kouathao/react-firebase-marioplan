import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
// 3) import root reducers and add to store
import rootReducers from "./store/reducers/rootReducer";
// 5) import Provider from react-redux. This is the binding outer layer
import { Provider } from "react-redux";
// * 1) import thunk from redux-thunk
import thunk from "redux-thunk";

// 1) import create store from redux
import { createStore, applyMiddleware } from "redux";

// 2) initialize store 4) Pass in root Reducers
// * 2) Add middleware thunk into store with applyMiddlware from redux
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// 6) Then pass in store to Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
