const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const UPDATE = 'bookstore/books/UPDATE';

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
      return [
        ...state,
        action.book,
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    case UPDATE:
      return state.map((book) => {
        if (book.id === action.book.id) {
          return action.book;
        }
        return book;
      });
    default:
      return state;
  }
};

export { addBook, updateBook, removeBook };
export default bookReducer;
