import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { getBooksList, deleteBook } from '../redux/books/books';

const ListOfBooks = () => {
  const dispatchAction = useDispatch();
  const item = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatchAction(getBooksList());
  }, [dispatchAction]);

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
                  <button type="button" className="br blueText" onClick={() => dispatchAction(deleteBook(book.id))}>Remove</button>
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

export default ListOfBooks;
