const ADD_BOOK = 'library/books/ADD_BOOK';
const REMOVE_BOOK = 'library/books/REMOVE_BOOK';

const stateInit = [{
  id: 1, title: 'The Da Vinci Code', category: 'Fiction', author: 'Dan Brown',
},
{
  id: 2, title: 'Shogun', category: 'History', author: 'James Clevell',
},
{
  id: 3, title: 'The Way of the Peaceful Warrior', category: 'Biography', author: 'Dan Millman',
},
{
  id: 4, title: 'The A.B.C. Murders ', category: 'Crime', author: 'Agatha Cristie',
}];

export const addBook = (payload) => ({
  type: ADD_BOOK,
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

    default:
      return state;
  }
};

export default booksReducer;
