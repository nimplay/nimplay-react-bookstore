import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBookToAPI, removeBookFromAPI, getStateFromAPI } from '../../utils/apiActions';
import {
  addBook,
  removeBook,
  GET,
  ASYNC_ADD,
  ASYNC_REMOVE,
} from './Books';

const asyncAdd = createAsyncThunk(
  ASYNC_ADD,
  async (book, { dispatch }) => {
    const answer = await addBookToAPI(book);
    dispatch(addBook(book));
    return answer;
  },
);

const asyncRemove = createAsyncThunk(
  ASYNC_REMOVE,
  async (book, { dispatch }) => {
    const answer = await removeBookFromAPI(book);
    dispatch(removeBook(book));
    return answer;
  },
);

const asyncGet = createAsyncThunk(
  GET,
  async () => {
    const answer = await getStateFromAPI();
    return answer.books;
  },
);

export { asyncAdd, asyncGet, asyncRemove };
