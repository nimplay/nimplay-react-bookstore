const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const UPDATE = 'bookstore/books/UPDATE';
const GET = 'bookstore/books/GET';
const ASYNC_ADD = 'bookstore/books/ASYNC_ADD';
const ASYNC_REMOVE = 'bookstore/books/ASYNC_REMOVE';

const addBook = (book) => ({
  type: ADD,
  book,
});

const removeBook = (book) => ({
  type: REMOVE,
  book,
});

const updateBook = (book) => ({
  type: UPDATE,
  book,
});

const bookReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD:
      if (state.find((elem) => elem.item_id === action.book.item_id)) {
        return state;
      }
      return [
        ...state,
        action.book,
      ];
    case UPDATE:
      return state.map((book) => {
        if (book.item_id === action.book.item_id) {
          return action.book;
        }
        return book;
      });
    case REMOVE:
      return state.filter((book) => book.item_id !== action.book.item_id);
    case `${GET}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export {
  addBook,
  updateBook,
  removeBook,
  GET,
  ASYNC_ADD,
  ASYNC_REMOVE,
};
export default bookReducer;
