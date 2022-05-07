import React from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import ListOfBooks from './ListOfBooks';

const AllBooks = () => {
  const booksList = useSelector((state) => state.booksReducer);

  return (
    <div className="main-content">
      <ListOfBooks item={booksList} />
      <AddBookForm />
    </div>
  );
};

export default AllBooks;
