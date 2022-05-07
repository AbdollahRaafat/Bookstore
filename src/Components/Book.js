import PropTypes from 'prop-types';

const Book = ({
  id, title, author, category,
}) => (
  <div id={id} className="book flex-col">
    <p className="greyText">{category}</p>
    <p className="title">{title}</p>
    <p className="blueText">{author}</p>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

Book.defaultProps = {
  category: 'Not implemented yet',
};

export default Book;
