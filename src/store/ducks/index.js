import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import starship from "./starship";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    starship,
  });

const Reducers = (history) => appReducer(history);

export default Reducers;
