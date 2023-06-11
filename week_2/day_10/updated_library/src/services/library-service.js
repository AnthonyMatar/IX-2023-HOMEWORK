import { collection, addDoc, query, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Book } from "../models/book";

import { db } from "../firebase/firebase.js";

class LibraryService {
  constructor() {
    this.collection = "books";
  }
  async fetchBooks() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const books = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const book = new Book(data.Title, data.Author, data.ISBN, data.id, data.userID);
      console.log(book);

      books.push(book);
    });

    return books;
  }

  async createBook(book, props) {
    const collectionRef = collection(db, this.collection);
    const docRef = await addDoc(collectionRef, {
      Title: book.title,
      Author: book.author,
      ISBN: book.isbn,
      userID: book.userID
    });
    book.id = docRef.id;
    await updateDoc(docRef, {
      ID: book.id,
    })
    return book;
  }

  async editBook(book) {
    const docRef = doc(db, this.collection, book.id);
    await updateDoc(docRef, {
      Title: book.title,
      Author: book.author,
      ISBN: book.isbn
    });
    book.id = docRef.id;
    return book;

  }

  async deleteBook(book) {
    const docRef = doc(db, this.collection, book.id);
    await deleteDoc(docRef);
  }
}

const service = new LibraryService();
export default service;
