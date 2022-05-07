import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import catReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  catReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
