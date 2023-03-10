import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Btn, Navbar } from "./components/styled/style";
import SyllabusDetails from "./pages/SyllabusDetails";
import Syllabus from "./pages/Syllabus";
import { useNavigate } from "react-router-dom";
import Login from "./components/login";


function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState("");

  return (
    <>
      <Navbar>
        <div className="in-nav">
          <div className="logo">
            <img
              src="https://download.logo.wine/logo/Trello/Trello-Logo.wine.png"
              alt="Logo"
            />
          </div>
          <div className="links"></div>
          <div className="avatar">
            <Login setToken={setToken} />
          </div>
        </div>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/syllabus_details" element={<SyllabusDetails />} />
        <Route path="/syllabus" element={<Syllabus />} />
      </Routes>
    </>
  );
}

export default App;
