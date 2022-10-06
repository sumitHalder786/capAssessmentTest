import { createStore, combineReducers } from "redux";

import listReducers from "./reducer";
const rootReducer = combineReducers({ listReducerData: listReducers });

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
