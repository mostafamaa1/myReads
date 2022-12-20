import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({ updateShelf, books, title }) => {
    
  return <>
      <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {books &&
                books.map((book) => (
                  <li key={book.id}>
                  <Book updateShelf={updateShelf} book={book}/>
                  </li>
                  ))}  
                </ol>
              </div>
            </div>
      </div>
  </>

};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export default BookShelf