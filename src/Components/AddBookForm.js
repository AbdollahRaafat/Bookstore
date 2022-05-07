import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const booksList = useSelector((state) => state.booksReducer);
  const dispatchAction = useDispatch();
  const [newBook, setNew] = useState({
    title: '',
    author: '',
  });

  const addToStore = (ev) => {
    ev.preventDefault();
    const id = booksList.length + 1;
    const { title, author } = newBook;
    const bookToAdd = {
      title,
      id,
      author,
    };
    dispatchAction(addBook(bookToAdd));
  };

  const onChange = (ev) => {
    setNew({
      ...newBook,
      [ev.target.name]: ev.target.value,
    });
  };

  return (
    <div className="add">
      <h1>ADD NEW BOOK</h1>
      <form className="addNew flex-row" onSubmit={addToStore}>
        <label htmlFor="title">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            id="title"
            className="flex-row"
            onChange={onChange}
          />
        </label>
        <label htmlFor="author">
          <input
            type="text"
            placeholder="Author"
            name="author"
            id="author"
            className="flex-row"
            onChange={onChange}
          />
        </label>
        <button type="submit" onClick={addToStore} value="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
