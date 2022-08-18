import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/Books';
import Categories from './categories/Categories';
import { asyncGet } from './books/ApiBooks';

const preloadedState = {
  books: [],
  categories: [],
};

const rootReducer = combineReducers({
  books: booksReducer,
  categories: Categories,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.dispatch(asyncGet());

export default store;
