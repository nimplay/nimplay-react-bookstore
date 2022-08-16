import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/Categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(checkStatus());
  };
  const button = <button type="button" onClick={handleCheck} className="category-btn">Check status</button>;
  return (
    <div className="category-container">
      {button}
      <div>{categories}</div>
    </div>
  );
};

export default Categories;
