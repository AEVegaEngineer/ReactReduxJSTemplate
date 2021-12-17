import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from 'redux-thunk';

import { testReducer } from "../reducers/testReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  test: testReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

