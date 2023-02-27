import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { BgAnimation, Btn, Navbar } from "./components/styled/style";
import SyllabusDetails from "./pages/SyllabusDetails";
import Syllabus from "./pages/Syllabus";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <BgAnimation>
        <div className="big"></div>
        <div className="meduim"></div>
        <div className="small"></div>
        <div className="meduim"></div>
        <div className="small"></div>
        <div className="small"></div>
      </BgAnimation>
      <Navbar>
        <div className="logo">Logo</div>
        <div className="links"></div>
        <div className="avatar">
          <Btn
            bg="#7b7bff"
            onClick={() => {
              navigate("/syllabus");
            }}
          >
            Connect
          </Btn>
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