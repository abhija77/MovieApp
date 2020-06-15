import { combineReducers } from "redux";
import reducerItem from "./reducerItem";

const rootReducer = combineReducers({
  users: reducerItem,
});
