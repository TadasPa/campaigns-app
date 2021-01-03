import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';

export interface AnyAction<T, P> { 
    type: T;
    payload: P;
}

const store = createStore(rootReducer, devToolsEnhancer({ trace: true, traceLimit: 25 }))

export default store;