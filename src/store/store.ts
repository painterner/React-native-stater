import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import { allReducers } from "./reducers";

const middlewares = [thunk];

// root store
export const rootStore = createStore(
  allReducers,
  applyMiddleware(...middlewares)
);
