import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const BookList = ({ books, updateShelf }) => {
  //Book shelves
  const shelves = [
    { title: "Currently Reading", shelf: "currentlyReading" },
    { title: "Want to Read", shelf: "wantToRead" },
    { title: "Read", shelf: "read" }
  ];

  return <>
  <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        {shelves.map((bookshelf, index) => (
            <BookShelf
              key={index}
              title={bookshelf.title}
              books={
                books.filter(
                  book => book && book.shelf === bookshelf.shelf
                )
              }
              updateShelf={updateShelf}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
      </>
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func,
}

export default BookList