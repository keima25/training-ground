import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import anime from './reducers/anime';

const middlewares = [ReduxThunk];
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    anime,
  }),
  composeEnchancers(applyMiddleware(...middlewares))
);

export default store;
