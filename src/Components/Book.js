import PropTypes from 'prop-types';

const Book = ({
  id, title, author, category,
}) => (
  <div className="bookLeft flex-col">
    <div id={id} className="book flex-col">
      <span className="greyText">{category}</span>
      <span id="title">{title}</span>
      <span className="blueText">{author}</span>
    </div>
    <div className="buttons-left">
      <button type="button" className="br blueText">Comments</button>
      <button type="button" className="br blueText">Remove</button>
      <button type="button" className="blueText">Edit</button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
