import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./Admin.jsx";
import App from "./App.jsx";
import Posts from "./Posts.jsx";

function Mainapp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainapp;
