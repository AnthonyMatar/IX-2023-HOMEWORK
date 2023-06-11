import React from "react";
import Spinner from '../common/Spinner';

export default function BookTable(props) {
  return (
    <div>
      {props.loading ? ( <Spinner></Spinner>) : (
      <table className="table mt-5">
      <thead>
        <tr className = "text-center">
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {props.books.map((book) => {
          return (
            <tr className = "text-center" key= {book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>
                <button
                  onClick={() => props.onEditClick(book)}
                  className="btn btn-secondary me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.onDeleteClick(book)}
                  className="btn btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
      )}
    </div>
  );
}
