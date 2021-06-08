import { applyMiddleware, createStore, Middleware } from "redux";
import thunk from "redux-thunk";
import { initialRootState, rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWares: Middleware[] = [thunk];

const store = createStore(
  rootReducer,
  initialRootState,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;
