import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import Book from './Book';
import { getBooksList, deleteBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const ListOfBooks = () => {
  const dispatchAction = useDispatch();
  const item = useSelector((state) => state.booksReducer);
  const percentage = 66;

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
              <div className="middle flex-row">
                <div className="circle">
                  <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </div>
                <div className="perc">
                  <h2>0%</h2>
                  <p>Completed</p>
                </div>
              </div>
              <div className="buttons-right">
                <p>CURRENT CHAPTER</p>
                <h2>Chapter 9</h2>
                <button type="button" id="completed">UPDATE PROGRESS</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ListOfBooks;
