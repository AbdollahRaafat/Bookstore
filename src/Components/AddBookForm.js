import React from 'react';

const AddBookForm = () => (
  <div className="add">
    <h1>ADD NEW BOOK</h1>
    <form className="addNew flex-row">
      <label htmlFor="title">
        <input
          type="text"
          placeholder="Book title"
          name="title"
          id="title"
          className="flex-row"
        />
      </label>
      <label htmlFor="author">
        <input
          type="text"
          placeholder="Author"
          name="author"
          id="author"
          className="flex-row"
        />
      </label>
      <button type="submit" value="submit" id="submit">
        Submit
      </button>
    </form>
  </div>
);

export default AddBookForm;
