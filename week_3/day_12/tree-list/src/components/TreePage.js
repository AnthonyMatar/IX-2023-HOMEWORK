import React from "react";
import { Link } from "react-router-dom";

export default function TreePage() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/add-tree">Add Tree</Link>
      </div>
    </div>
  );
}
