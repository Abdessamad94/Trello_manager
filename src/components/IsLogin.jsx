import React from "react";
import { Btn } from "./styled/style";
import { useNavigate } from "react-router-dom";
function IsLogin() {
  const navigate = useNavigate();
  return (
    <div>
      <Btn bg="#7b7bff" onClick={() => navigate(`/syllabus`)}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="avatar"
          width="30"
          height="30"
        />
        Add Syllabus
      </Btn>
    </div>
  );
}

export default IsLogin;
