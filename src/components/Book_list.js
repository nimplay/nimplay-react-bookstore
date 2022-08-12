import React from 'react';
import Book from './Book';

function BookList() {
  return (
    <>
      <div className="home-container">
        <Book />
        <Book />
      </div>
    </>
  );
}

export default BookList;
