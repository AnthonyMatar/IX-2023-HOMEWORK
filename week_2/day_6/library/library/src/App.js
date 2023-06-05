import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookTable from "./Components/BookTable";
import Form from "./Components/Form";
//import { Book } from "./models/book";
import { useState } from "react";

function App() {

  const[books, setBooks] = useState([]);
  const[bookToEdit, setBookToEdit] = useState(null);

  function onBookSubmit(book){
    setBookToEdit(null);
    setBooks([...books, book]);
  }
  function onEditClick(book){
    setBookToEdit(book);
    setBooks(books.filter((x) => book.isbn !== x.isbn));
  }

  function onDeleteClick(book){
    setBooks(books.filter((x) => book.isbn !== x.isbn));
  }

  

  return (
    <div className = "container m-5">
      <div className="card p-4">
        <Form bookToEdit = {bookToEdit} onBookSubmit = {onBookSubmit}></Form>
        <BookTable books = {books} onDeleteClick = {onDeleteClick} onEditClick = {onEditClick}></BookTable>
      </div>
    </div>
  );
}

export default App;
