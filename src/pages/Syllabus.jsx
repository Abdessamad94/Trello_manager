import React from "react";
import {
  SyllabusContianer,
  inputText,
  inputFile,
  Btn,
} from "../components/styled/style";
import SyllabusCard from "../components/SyllabusCard";
import { Formik, Field, Form, ErrorMessage } from "formik";


function syllabus() {
  

  const initialValues = { name: "", file: [] };
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <SyllabusContianer>
      <div className="addsyllabus">
        <h1>Add a Syllabus</h1>
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
