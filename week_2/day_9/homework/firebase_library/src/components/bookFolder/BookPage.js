import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookTable from "../bookFolder/BookTable";
import Form from "../bookFolder/Form";
import { useEffect, useState } from "react";
import LibraryService from "../../services/library-service";

export default function BookPage() {
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
    setBooks(books.filter((x) => book.id !== x.id));
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
