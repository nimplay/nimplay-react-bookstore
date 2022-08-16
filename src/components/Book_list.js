import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="home-container">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} genre={book.genre} />
        ))}
      </div>
    </>
  );
}

export default BookList;
