/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author, genre } = props;
  return (
    <div className="book">
      <div>
        <h4 className="book-genre">{genre}</h4>
        <h3>{title}</h3>
        <p className="book-author">{author}</p>
        <div className="book-btns">
          <button type="submit" className="comment-book">Comments</button>
          <button type="submit" className="delete-book">Remove</button>
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
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};
export default Book;
