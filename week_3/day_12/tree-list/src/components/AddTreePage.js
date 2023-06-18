import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FileService from "../services/file.service";
import TreeService from "../services/tree.service";
import { Tree } from "../models/Tree";

export default function AddTreePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log('Upload progress: ', progress);
      });

      await TreeService.createTree(new Tree(null, name, downloadUrl));
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/">Tree List</Link>
      </div>

      <div className="container my-5">
        <div className="card card-body">
          <h1>Add Tree</h1>

          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Tree Image</label>
              <input
                onChange={onFileSelected}
                type="file"
                className="form-control"
                multiple
              ></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Tree Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter name of selected tree"
              ></input>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">
                Add Tree
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
