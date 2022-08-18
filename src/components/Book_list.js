import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { asyncRemove } from '../redux/books/ApiBooks';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleRemove = (book) => {
    dispatch(asyncRemove(book)).then((response) => {
      const alert = document.getElementById('alert');
      alert.innerHTML = response.payload;
      setTimeout(() => {
        alert.innerHTML = '';
      }, 3000);
    });
  };
  return (
    <div className="home-container">
      {books.map((book) => (
        <div key={book.item_id} className="book">
          <div>
            <Book title={book.title} author={book.author} category={book.category} />
            <div className="book-btns">
              <button type="submit" className="comment-book">Comments</button>
              <button type="submit" className="delete-book" onClick={() => handleRemove(book)}>Remove</button>
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
