import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import Reducers from "./ducks";

export const history = createBrowserHistory();
export const store = createStore(Reducers(history), applyMiddleware(thunk));
