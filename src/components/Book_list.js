import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/Books';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleRemove = (book) => {
    dispatch(removeBook(book));
  };
  return (
    <div className="home-container">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <Book title={book.title} author={book.author} genre={book.genre} />
            <div className="book-btns">
              <button type="submit" className="comment-book">Comments</button>
              <button type="submit" className="delete-book" id={`remove-${book.id}`} onClick={() => handleRemove(book)}>Remove</button>
              <button type="submit" className="edit-book">Edit</button>
            </div>
          </div>
          <div>
            <p className="book-porcentage-number">65%</p>
            <p className="book-porcentage">COMPLETED</p>
          </div>
          <div>
            <p className="book-character">CURRENT CHAPTER</p>
            <p className="book-character-number">Chapter 17</p>
            <button type="submit" className="update-book">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
