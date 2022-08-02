import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import counter from "../modules/counter";

const rootReducer = combineReducers({ counter });
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
