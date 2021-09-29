import { combineReducers } from "redux";
import tabReducer from "./tabs/tabReducer";
import marketReducer from "./market/marketReducer";

export default combineReducers({ tabReducer, marketReducer });
