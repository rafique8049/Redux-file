import { createStore, combineReducers } from "redux";
import { loanReducer } from "../loanReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ loanReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
