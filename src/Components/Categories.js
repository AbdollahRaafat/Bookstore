import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector(((state) => state.catReducer));
  const dispatchAction = useDispatch();
  return (
    <div className="main-content">
      <div id="cat">
        <button type="button" onClick={() => dispatchAction(categories)}>Check Status!</button>
        <h1>{categories.payload}</h1>
      </div>
    </div>
  );
};

export default Categories;
