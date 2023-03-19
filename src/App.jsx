import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Btn, Navbar } from "./components/styled/style";
import SyllabusDetails from "./pages/SyllabusDetails";
import Syllabus from "./pages/Syllabus";
import Login from "./components/Login";
import IsLogin from "./components/IsLogin";
import { useQuery } from "react-query";

function App() {
  // const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // const [token, setToken] = useState(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
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
          <div className="avatar">{user ? <IsLogin /> : <Login />}</div>
        </div>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/syllabus"
          element={user ? <Syllabus /> : <Navigate replace to={"/"} />}
        />
        <Route
          path="/syllabus_details"
          element={user ? <SyllabusDetails /> : <Navigate replace to={"/"} />}
        />
      </Routes>
    </>
  );
}

export default App;
