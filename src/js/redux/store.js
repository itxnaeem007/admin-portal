import { createStore, applyMiddleware, compose } from "redux";
import createReducer from "./reducer/";
import logger from "redux-logger";
import Thunk from "redux-thunk";
import "regenerator-runtime/runtime";


const store = createStore(
  createReducer(),
  {},
  compose(applyMiddleware(logger, Thunk))
);

export default store;
