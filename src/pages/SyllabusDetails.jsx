import React from "react";
import { SyllabusContianer, Btn } from "../components/styled/style";
import SyllabusCardDetails from "../components/SyllabusCardDetails";

function SyllabusDetails() {
  return (
    <SyllabusContianer>
      <div className="addsyllabus">
        <h1>Syllabus: Name</h1>
        <div>
          <Btn bg="#7b7bff">+ ADD</Btn>
        </div>
      </div>
      <div className="syllabus">
        <SyllabusCardDetails />
        <SyllabusCardDetails />
        <SyllabusCardDetails />
        <SyllabusCardDetails />
      </div>
    </SyllabusContianer>
  );
}

export default SyllabusDetails;
