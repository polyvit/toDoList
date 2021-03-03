import {combineReducers} from 'redux';

import list from "./reducers/list";

const appReducer = combineReducers({
  list
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
