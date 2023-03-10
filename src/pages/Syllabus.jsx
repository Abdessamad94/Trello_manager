import React, { useState, useEffect } from "react";
import {
  SyllabusContianer,
  inputText,
  inputFile,
  Btn,
} from "../components/styled/style";
import SyllabusCard from "../components/SyllabusCard";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useQuery } from "react-query";
import { getUser } from "../api/functions";

function syllabus() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState("");

  const initialValues = { name: "", file: [] };
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch(
  //       `https://api.trello.com/1/members/me?token=${token}&key=c6f34b581c35de2ce1660c00e4a2a027`
  //     );
  //     const data = await response.json();
  //     console.log("Date", data);
  //     setUserName(data.fullName);
  //   };

  //   if (token) {
  //     fetchUser();
  //   }
  // }, [token]);

  const { isLoading, error, data } = useQuery("User", getUser);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <SyllabusContianer>
      {console.log(" data :", data.username)}
      <div className="addsyllabus">
        <h1> Welcome, {data.username} would add a Syllabus</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <Field name="name" type="text" as={inputText} />
            <ErrorMessage name="name" />
            <Field name="file" type="file" as={inputFile} />
            <ErrorMessage name="file" />
            <Btn bg="#7bff7b" type="submit">
              Submit
            </Btn>
          </Form>
        </Formik>
      </div>
      <div className="syllabus">
        <SyllabusCard />
        <SyllabusCard />
        <SyllabusCard />
      </div>
    </SyllabusContianer>
  );
}

export default syllabus;
