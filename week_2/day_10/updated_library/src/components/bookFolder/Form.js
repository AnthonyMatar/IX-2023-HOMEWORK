import { useEffect, useState } from "react";
import React from "react";
import { Book } from "../../models/book";
import Spinner from "../common/Spinner";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setISBN(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  async function onFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (isEmpty()) {
      return;
    }
    await props.onBookSubmit(title, author, isbn, null);
    setLoading(false);
    clear();
  }

  function isEmpty() {
    return (title === "") | (author === "") | (isbn === "");
  }

  function clear() {
    setTitle("");
    setAuthor("");
    setISBN("");
  }

  return (
    <div>
      <h1>Library</h1>

      <form id="form" onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Author </label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> #ISBN </label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setISBN(e.target.value)}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {loading ? <Spinner extraClass="change-size" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
