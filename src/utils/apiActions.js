import { API_PATH } from './apiInfo';

const addBookToAPI = async (book) => {
  const response = await fetch(API_PATH, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const text = await response.text();
  return text;
};

const removeBookFromAPI = async (book) => {
  const response = await fetch(`${API_PATH}/${book.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const text = await response.text();
  return text;
};

const getStateFromAPI = async () => {
  const response = await fetch(API_PATH);
  const data = await response.json();
  const idsArray = Object.keys(data).map((item) => ({
    item_id: item,
  }));
  const booksArray = Object.values(data);
  const booksObject = idsArray.map((item, id) => {
    const book = booksArray[id];
    const { title, author, category } = book[0];
    return ({
      ...item,
      title,
      author,
      category,
    });
  });

  const categories = new Set();

  booksObject.forEach((book) => {
    categories.add(book.category);
  });

  const initialState = {
    books: booksObject,
    categories,
  };
  return initialState;
};

export { addBookToAPI, removeBookFromAPI, getStateFromAPI };
