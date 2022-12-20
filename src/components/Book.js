import PropTypes from "prop-types";

const Book = ({ book, updateShelf }) => {

  //Handles updateShelf function
  const handleShelfUpdate = (event) => {
    event.preventDefault();
    updateShelf(book, event.target.value)
  }

  //Checks if image is available
  let imgAvailable = book?.imageLinks ? book?.imageLinks?.thumbnail : 'Image not Found';
  
  return <>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url(${imgAvailable})`,
          }}
        ></div>
        <div className="book-shelf-changer">
        <select onChange={handleShelfUpdate}
          value={book.shelf}>
          <option value="change" disabled>
            Move to...
          </option>
          <option value='currentlyReading'>
          currentlyReading
          </option>
          <option value='wantToRead'>
          wantToRead
          </option>
          <option value='read'>
          read
          </option>
          <option value="none">None</option>
        </select>
      </div>
      </div>
      <div className="book-title">{book.title ? book.title : "Book Title cannot be found"}</div>
      <div className="book-authors">{book.authors ? book.authors.join(' - ') : 'Author not Available'}</div>
    </div>
              
  </>
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func,
}

export default Book