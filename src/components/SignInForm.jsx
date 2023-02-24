import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInForm = () => {
  const initialValues = { username: "", pass: "" };
  const validationSchema = Yup.object({
    username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    pass: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
  });
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="username">User Name</label>
        <Field name="username" type="text" />
        <ErrorMessage name="username" />

        <label htmlFor="pass">Password</label>
        <Field name="pass" type="password" />
        <ErrorMessage name="pass" />

        <button type="submit">Submit</button>
        <p>
          or you can signup <a href="#">Here</a>
        </p>
      </Form>
    </Formik>
  );
};

export default SignInForm;
