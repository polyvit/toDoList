import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from './rootReducer';

const middlewares = [thunk];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;

const configureStore = initialState => {
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();

export default store;
