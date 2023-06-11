import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookTable from "../bookFolder/BookTable";
import Form from "../bookFolder/Form";
import { useEffect, useState } from "react";
import LibraryService from "../../services/library-service";
import { Book } from "../../models/book";

export default function BookPage(props) {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    setLoading(true);
    try{
      const books = await LibraryService.fetchBooks();
      setBooks(books.filter((book) => book.userID ===  props.user.uid));
    }
    catch(err){

    }
    setLoading(false);
    
  }

  async function onBookSubmit(title, author, isbn, id) {
    const newBook = await LibraryService.createBook(new Book(title, author, isbn, id,  props.user.uid));
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
    setBooks(books.filter((x) => book.id !== x.id));
  }

  return (
    <div className="container m-5">
      <div className="card p-4">
        <Form bookToEdit={bookToEdit} onBookSubmit={onBookSubmit}></Form>
        <BookTable
          books={books}
          loading={loading}
          onDeleteClick={onDeleteClick}
          onEditClick={onEditClick}
        ></BookTable>
      </div>
    </div>
  );
}
