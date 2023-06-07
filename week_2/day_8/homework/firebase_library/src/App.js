import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookTable from "./components/BookTable";
import Form from "./components/Form";
//import { Book } from "./models/book";
import { useEffect, useState } from "react";
import LibraryService from "./services/library-service";

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    const books = await LibraryService.fetchBooks();
    setBooks(books);
  }

  async function onBookSubmit(book) {
    const newBook = await LibraryService.createBook(book);
    setBookToEdit(null);
    setBooks([...books, newBook]);
  }
  async function onEditClick(book) {
    await LibraryService.editBook(book);
    setBookToEdit(book);
    onDeleteClick(book);
  }

  async function onDeleteClick(book) {
    await LibraryService.deleteBook(book);
    setBooks(books.filter((x) => book.isbn !== x.isbn));
  }

  return (
    <div className="container m-5">
      <div className="card p-4">
        <Form bookToEdit={bookToEdit} onBookSubmit={onBookSubmit}></Form>
        <BookTable
          books={books}
          onDeleteClick={onDeleteClick}
          onEditClick={onEditClick}
        ></BookTable>
      </div>
    </div>
  );
}

export default App;
