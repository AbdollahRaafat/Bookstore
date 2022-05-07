const ADD_BOOK = 'library/books/ADD_BOOK';
const REMOVE_BOOK = 'library/books/REMOVE_BOOK';
const api = 'y7oY66oF0fycYurRjoHf';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api}/books`;

const stateInit = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = stateInit, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case GET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export const getBooksList = () => async (dispatch) => {
  const booksList = await fetch(`${url}`)
    .then((response) => response.json());
  const booksID = Object.keys(booksList);
  const booksArr = [];
  booksID.map((item) => booksArr.push({
    id: item,
    title: booksList[item][0].title,
    author: booksList[item][0].author,
    category: booksList[item][0].category,
  }));
  dispatch(getBooks(booksArr));
};

export const postBook = (newBook) => async (dispatch) => {
  await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: newBook.id,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook(newBook));
};

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
};

export default booksReducer;
