/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author, genre } = props;
  return (
    <>
      <div>
        <h4 className="book-genre">{genre}</h4>
        <h3>{title}</h3>
        <p className="book-author">{author}</p>
      </div>
    </>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};
export default Book;
