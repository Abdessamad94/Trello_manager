import React from "react";
import {
  SyllabusDetailsContianer,
  Btn,
  inputText,
  inputFile,
} from "../components/styled/style";
import SyllabusCardDetails from "../components/SyllabusCardDetails";
import { BsPlusCircle } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function SyllabusDetails() {
  const initialValues = { name: "", ex: "", dis: "" };
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const docs = [
    {
      uri: "https://drive.google.com/file/d/1-tJ8YIuYnNfB_b8nyoMSmBZn9Cyc3pFF/view?usp=sharing",
    }, // Remote file
  ];
  return (
    <SyllabusDetailsContianer>
      <div className="doc">
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
      </div>
      <div className="homeworks">
        <div className="addsyllabus">
          <div className="blur"></div>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <div className="inputstext">
                <Field
                  placeholder="Name"
                  name="name"
                  type="text"
                  as={inputText}
                />
                <ErrorMessage name="name" />
                <Field as="select" name="ex">
                  <option value="Home Work">Home Work</option>
                  <option value="Exercise">Exercise</option>
                </Field>
                <ErrorMessage name="name" />
              </div>
              <div className="textarea">
                <Field
                  name="dis"
                  type="textarea"
                  as="textarea"
                  placeholder="Discription"
                />
                <ErrorMessage name="name" />
              </div>
              <Btn bg="#7b7bff" type="submit">
                <BsPlusCircle /> Add
              </Btn>
            </Form>
          </Formik>
        </div>
        <div className="syllabus">
          <SyllabusCardDetails />
          <SyllabusCardDetails />
          <SyllabusCardDetails />
          <SyllabusCardDetails />
        </div>
      </div>
    </SyllabusDetailsContianer>
  );
}

export default SyllabusDetails;
