import React from "react";
import { SyllabusCardStyled } from "./styled/style";
import { BiPencil, BiX, BiGlasses } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SyllabusCard() {
  const navigate = useNavigate();

  const delet = () => {
    console.log("deleted");
  };

  return (
    <SyllabusCardStyled width="40%">
      <div className="cradfront">
        <div className="name">
          <h1>Syllabus Name</h1>
        </div>
        <div className="filename">
          <p>filename</p>
        </div>
        <div className="date">
          <p>1/1/2023</p>
        </div>
      </div>
      <div className="cradend">
        <div className="opretions">
          <div title="Update" className="icon updateIcon">
            <BiPencil />
          </div>
          <div title="Delete" className="icon deleteIcon" onClick={delet}>
            <BiX />
          </div>
        </div>
        <div
          className="info"
          title="See"
          onClick={() => navigate(`/syllabus_details`)}
        >
          <BiGlasses />
        </div>
      </div>
    </SyllabusCardStyled>
  );
}

export default SyllabusCard;
