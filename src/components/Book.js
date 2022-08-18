/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author, category } = props;
  return (
    <>
      <div>
        <h4 className="book-genre">{category}</h4>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
    </>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
