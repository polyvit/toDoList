import {combineReducers} from 'redux';

import status from "./reducers/status/status";

const appReducer = combineReducers({
  status
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
