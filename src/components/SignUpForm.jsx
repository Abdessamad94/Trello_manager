import React from "react";
import * as Yup from "yup";
import { FormikStepper, FormikStep, InputField } from "formik-stepper";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("The First Name field is required"),
  lastName: Yup.string().required("The Last Name field is required"),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),
  password: Yup.string().required("The Password field is required"),
  privacy: Yup.boolean()
    .isTrue()
    .oneOf([true], "The terms and conditions must be accepted."),
});

function SignUpForm() {
  const onSubmit = (values) => {
    console.log("here", values);
  };
  return (
    <FormikStepper
      /// Accept all Formik props
      onSubmit={onSubmit} /// onSubmit Function
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        privacy: false,
      }}
      validationSchema={validationSchema}
      labelsColor="secondary" /// The text label color can be root variables or css => #fff
      withStepperLine /// false as default and If it is false, it hides stepper line
      nextBtnLabel="step" /// Next as default
      prevBtnLabel="return" /// Prev as default
      submitBtnLabel="Done" /// Submit as default
      nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
      prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
      submitBtnColor="success" /// as default and The color can be root variables or css => #fff
    >
      {/*  First Step */}
      <FormikStep
        label="Profile" /// The text label of Step
        withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
        withNumbers /// If true, it hides the icon and shows the step number
        iconColor="white" /// The color can be root variables or css => #fff
        circleColor="danger" /// The color can be root variables or css => #fff
      >
        <InputField name="firstName" />
        <InputField name="lastName" />
        <InputField name="email" type="email" />
        <InputField name="password" type="password" />
      </FormikStep>
      {/* Second Step */}
      <FormikStep
        label="Trello"
        withIcons="fa fa-lock"
        iconColor="white"
        circleColor="danger"
      >
        <InputField name="email" type="text" />
      </FormikStep>
    </FormikStepper>
  );
}

export default SignUpForm;
