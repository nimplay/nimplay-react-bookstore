import { v4 } from 'uuid';

const arrBooks = {
  books: [
    {
      id: v4(),
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      genre: 'Novel',
    },
    {
      id: v4(),
      title: 'The Hobbit',
      author: 'Tolkien',
      genre: 'fantasy',
    },
    {
      id: v4(),
      title: 'The Jazz Piano Book',
      author: 'Mark Levine',
      genre: 'Education',
    },
  ],
  categories: [],
};

export default arrBooks;
