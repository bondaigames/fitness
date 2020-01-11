import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
//set redux debugger
import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
