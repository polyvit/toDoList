import {combineReducers} from 'redux';

import ListReducer from "./reducers/list-reducer/list-reducer";

const appReducer = combineReducers({
  ListReducer
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
