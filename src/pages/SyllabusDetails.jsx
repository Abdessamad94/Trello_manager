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
      uri: "https://pdfhost.io/pdf/8a741f32-c7e6-46a4-a509-c702c96d1f5f/8a4af7d0-0725-4489-8e4e-eefc0aa06922.pdf",
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
                <ErrorMessage name="ex" />
                <Field
                  placeholder="Name"
                  name="name"
                  type="date"
                  as={inputText}
                />
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
