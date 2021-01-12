import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { Campaign } from "../types/Campaign";
import { User } from "../types/User";

export interface AnyAction<T, P> {
  type: T;
  payload: P;
}

export interface FetchState<R> {
  fetched: boolean;
  fetching: boolean;
  result: R;
}

export interface State {
  campaigns: Campaign[];
  users: FetchState<User[]>;
}

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
