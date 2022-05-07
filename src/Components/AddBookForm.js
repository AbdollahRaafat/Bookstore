import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBook } from '../redux/books/books';

const AddBookForm = () => {
  const booksList = useSelector((state) => state.booksReducer);
  const dispatchAction = useDispatch();
  const [newBook, setNew] = useState({
    title: '',
    author: '',
    category: '',
  });

  const addToStore = (ev) => {
    ev.preventDefault();
    const id = `item${booksList.length + 1}`;
    const { title, author, category } = newBook;
    const bookToAdd = {
      title,
      id,
      author,
      category,
    };
    dispatchAction(postBook(bookToAdd));
    setNew({
      title: '',
      author: '',
      id: '',
      category: '',
    });
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
        <select placeholder="categories" name="category" onChange={onChange} required>
          <option value="">Category</option>
          <option value="Romance">Biography</option>
          <option value="Documentary">History</option>
          <option value="Fiction">Fiction</option>
          <option value="Crime">Crime</option>
        </select>
        <button type="submit" onClick={addToStore} value="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
