/* eslint-disable react/prop-types */
import React from 'react';

function Book() {
  return (
    <div className="book">
      <div>
        <h4 className="book-genre">Action</h4>
        <h3>Title</h3>
        <p className="book-author">Author</p>
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

export default Book;
