import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = process.env.NODE_ENV === 'production' ? [thunkMiddleware] : [thunkMiddleware, createLogger()];

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
