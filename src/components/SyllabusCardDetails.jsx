import React from "react";
import { SyllabusCardStyled } from "./styled/style";
import { BiPencil, BiX, BiGlasses } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SyllabusCardDetails() {
  const navigate = useNavigate();

  const delet = () => {
    console.log("deleted");
  };

  return (
    <SyllabusCardStyled width="90%">
      <div className="cradfront">
        <div className="name">
          <h1>Syllabus Name</h1>
          <small> (Type)</small>
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
      </div>
    </SyllabusCardStyled>
  );
}

export default SyllabusCardDetails;
