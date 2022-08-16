import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/Books';
import Categories from './categories/Categories';
import arrBooks from './List_books';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: Categories,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: arrBooks,
});

export default store;
