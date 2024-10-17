import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';
import BookCtx from './context/booksctx';

function App() {
  const { fetchBooks, books } = useContext(BooksContext)
  const { setBooksText } = useContext(BookCtx)

  useEffect(() => {
    console.log("useEffect books " + books)
    fetchBooks();
    setBooksText(books)
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
