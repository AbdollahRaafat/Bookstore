import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import catReducer from './categories/categories';

const reducer = combineReducers({
  booksRed: booksReducer,
  catRed: catReducer,
});

const store = createStore(
  reducer(),
  applyMiddleware(logger),
);

export default store;
