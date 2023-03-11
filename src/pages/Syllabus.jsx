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
import { getUser,checkBoards } from "../api/functions";
import { addCard } from "../api/cards";
import { getBoard } from "../api/boards";

function syllabus() {

  const initialValues = { name: "", file: [] };
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
 
 
  const { isLoading, error, data } = useQuery("Board",getUser);

  const checkBr = checkBoards(data?.idBoards)

  return (
    <SyllabusContianer>
      <div className="addsyllabus">
        {console.log(checkBr) }
        <h1> Welcome, {data?.username} would add a Syllabus</h1>
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
