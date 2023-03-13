import React from "react";
import { Btn } from "./styled/style";
import { useQuery } from "react-query";
import { getUser } from "../api/functions";

const Login = ({ setToken }) => {
  const handleLogin = () => {
    const authUrl = `https://trello.com/1/authorize?response_type=token&key=${
      import.meta.env.VITE_API_KEY
    }&return_url=http://localhost:5173/syllabus&scope=read,write,account&expiration=never`;
    window.open(authUrl);
  };

  const handleAuthCallback = () => {
    const hashParams = window.location.hash
      .substring(1)
      .split("&")
      .reduce((acc, cur) => {
        const [key, value] = cur.split("=");
        acc[key] = value;
        return acc;
      }, {});
    if (hashParams) {
      // setToken(hashParams.token);
      localStorage.setItem("token", hashParams.token);
        getUser(hashParams.token)
    } else {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <Btn bg="#7b7bff" onClick={handleLogin}>
        Login with Trello
      </Btn>
      {window.location.hash && handleAuthCallback()}
    </div>
  );
};

export default Login;
