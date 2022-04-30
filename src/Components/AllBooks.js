import React, { Component } from 'react';
import AddBookForm from './AddBookForm';
import ListOfBooks from './ListOfBooks';

class AllBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{
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
      }],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div className="main-content">
        <ListOfBooks item={books} />
        <AddBookForm />
      </div>
    );
  }
}

export default AllBooks;
