import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/books';

const ListOfBooks = ({ item }) => {
  const dispatchAction = useDispatch();
  return (
    <div id="listContent flex-col">
      <div className="booksList">
        {
          item.map((book) => (
            <div key={book.id} className="book-row flex-row">
              <div className="bookLeft flex-col">
                <Book
                  id={book.id}
                  title={book.title}
                  category={book.category}
                  author={book.author}
                />
                <div className="buttons-left">
                  <button type="button" className="br blueText">Comments</button>
                  <button type="button" className="br blueText" onClick={() => dispatchAction(removeBook(book.id))}>Remove</button>
                  <button type="button" className="blueText">Edit</button>
                </div>
              </div>
              <div className="buttons-right">
                <button type="button" id="completed">Completed</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

ListOfBooks.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};

export default ListOfBooks;
