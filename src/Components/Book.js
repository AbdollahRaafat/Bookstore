import PropTypes from 'prop-types';

const Book = ({
  id, title, author, category,
}) => (
  <div id={id} className="book flex-col">
    <span className="greyText">{category}</span>
    <span id="title">{title}</span>
    <span className="blueText">{author}</span>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
