import { useEffect, useState } from "react";
import * as BooksAPI from '../BooksAPI'; 
import Book from "./Book";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const SearchBook = ({ books, updateShelf }) => {

    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
 
     useEffect(() => {

    const timer = setTimeout( async () => {
        if(query.length !== '' && query.length > 0) {
            await BooksAPI.search(query.trim()).then(res => {
              if(!res.error) {
                res.forEach((searchedBook) => {
                  searchedBook.shelf = 'none'
                  books.map((book) => (  
                    book.id !== searchedBook.id
                    ?
                    searchedBook.shelf = 'none'
                    :
                    searchedBook.shelf = book.shelf                    
                    ))
                  })
                  setSearchResult(res)
              } else {
                setSearchResult([])
              } 
            })
          } else if(query.length === 0) {
            setSearchResult([])
          }
      
    }, 1000);

       return () => {
            clearTimeout(timer);
        } 

    }, [query, books]);
    
    return <>
    <div className="search-books">
          <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
            
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
          
          <div className="search-books-results">
            <ol className="books-grid">
        {
             searchResult.length > 0
             ? 
             //Filter output to lower case letters
              searchResult?.filter(b => b.title.toLowerCase().includes(query.toLowerCase()))
              .map((searchedBook) => (           
                <Book
                  key={searchedBook.id}
                  book={searchedBook}
                  updateShelf={updateShelf}
                />             
              )) 
              :
              <p>Start Searching</p>             
        }
         
            </ol>
          </div>
        </div>
    </>
};

SearchBook.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func,
}

export default SearchBook