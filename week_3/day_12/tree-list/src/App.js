import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css' 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TreePage from "./components/TreePage";
import AddTreePage from "./components/AddTreePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TreePage/>}></Route>
        <Route path="/add-tree" element={<AddTreePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
