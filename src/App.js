import "./App.css";
import { useEffect, useState } from "react";
import SearchBook from "./components/Search";
import BookList from "./components/BookList";
import * as BooksAPI from './BooksAPI';
import { Route, Routes } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  // Get all books
  useEffect(() => {  
      (async () => {
        const res = await BooksAPI.getAll();
        setBooks(res); 
    })()
     }, [])

  // Update Shelf 
  const updateShelf = async (book, shelf) => {
  await BooksAPI.update(book, shelf).then(() => {
    book.shelf = shelf
    setBooks(books.filter(b => book.id !== b.id).concat(book))
  })
  }
   
  return (
    <Routes>
      <Route 
      exact
      path="/"
      element={<BookList books={books} updateShelf={updateShelf}
      />}
      />
      <Route 
      path="/search"
      element={
      <SearchBook books={books} updateShelf={updateShelf}
      />}
      />
    </Routes>
  );
}

export default App;
