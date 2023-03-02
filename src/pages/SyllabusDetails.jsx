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
import { Document } from "react-doc-viewer";
import * as Yup from "yup";

function SyllabusDetails() {
  const initialValues = { name: "", ex: "", dis: "", date: "" };
  const SyllabusSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  fetch(
    "https://pdfhost.io/pdf/f91e0215-c479-4811-ab7a-f24b672f80bb/8c4efa9e-a6f6-415c-889f-d11d6a1c59cc.pdf",
    {
      mode: "no-cors",
    }
  )
    .then((response) => {
      console.log(response.body);
    })
    .catch((error) => {
      console.log(error);
    });

  const docs = [
    {
      uri: "https://pdfhost.io/pdf/f91e0215-c479-4811-ab7a-f24b672f80bb/8c4efa9e-a6f6-415c-889f-d11d6a1c59cc.pdf",
    },
  ];

  const headers = {
    "Access-Control-Allow-Origin": "*",
    mode: "no-cors",
  };

  return (
    <SyllabusDetailsContianer>
      <div className="doc">
        {/* <Document file={"https://pdfhost.io/pdf/f91e0215-c479-4811-ab7a-f24b672f80bb/8c4efa9e-a6f6-415c-889f-d11d6a1c59cc.pdf"} /> */}
      </div>
      <div className="homeworks">
        <div className="addsyllabus">
          <div className="blur"></div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={SyllabusSchema}
          >
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
                <Field name="date" type="date" as={inputText} />
                <ErrorMessage name="name" />
              </div>
              <div className="textarea">
                <Field
                  name="dis"
                  type="textarea"
                  as="textarea"
                  rows="10"
                  width="100px"
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
