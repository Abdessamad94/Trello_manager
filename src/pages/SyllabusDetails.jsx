import React, { useEffect, useState } from "react";
import {
  SyllabusDetailsContianer,
  Btn,
  inputText,
  Error,
} from "../components/styled/style";
import SyllabusCardDetails from "../components/SyllabusCardDetails";
import { BsPlusCircle } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FileViewer from "react-file-viewer";
import * as Yup from "yup";

function SyllabusDetails() {
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType, setFileType] = useState(null);
  const initialValues = { name: "", ex: "", dis: "", date: "" };
  const SyllabusSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is Required !"),
    dis: Yup.string().required("Descrpition is Required !"),
  });
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  useEffect(() => {
    async function fetchDocument() {
      const response = await fetch(
        "https://trello.com/1/cards/63fe11ae07f02f85775d310b/attachments/63fe11ba64d49449b94e1ec8/download/%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86_%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A_%D9%84%D9%84%D8%AC%D9%85%D8%B9%D9%8A%D8%A9.docx",
        { mode: "no-cors" }
      );
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setFileUrl(url);
      setFileType("docx");
    }
    fetchDocument();
  }, []);

  // fetch(
  //   "https://pdfhost.io/pdf/f91e0215-c479-4811-ab7a-f24b672f80bb/8c4efa9e-a6f6-415c-889f-d11d6a1c59cc.pdf",
  //   {
  //     mode: "no-cors",
  //   }
  // )
  //   .then((response) => {
  //     console.log(response.body);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <SyllabusDetailsContianer>
      <div className="doc">
        {/* <FileViewer fileType={fileType} filePath={fileUrl} /> */}
      </div>
      <div className="homeworks">
        <div className="addsyllabus">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={SyllabusSchema}
          >
            <Form>
              <div className="inputstext">
                <span className="name">
                  <Field
                    placeholder="Name"
                    name="name"
                    type="text"
                    as={inputText}
                  />
                  <ErrorMessage name="name" component={Error} />
                </span>
                <div className="selectors">
                  <div className="select">
                    <Field as="select" name="ex">
                      <option value="Home Work">Home Work</option>
                      <option value="Exercise">Exercise</option>
                    </Field>
                    <ErrorMessage name="ex" />
                  </div>
                  <div className="date">
                    <Field name="date" type="date" as={inputText} />
                    <ErrorMessage name="date" component={Error} />
                  </div>
                </div>
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
                <ErrorMessage name="dis" component={Error} />
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
