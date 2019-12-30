// !combine all reducers
// 1) import all reducers
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

// 2) import combineReducers from redux
import { combineReducers } from "redux";

// 3) What we will pass into the root store in index.js
const rootReducers = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducers;
