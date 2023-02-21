import { applyMiddleware, legacy_createStore, combineReducers } from "redux";

import thunk from "redux-thunk";

import { reducer } from "./reducer";

const rootreducer = combineReducers({
    reducer: reducer,
  });
  
  export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
  