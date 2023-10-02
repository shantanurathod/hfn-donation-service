"use client";

import InputBox from "@/components/InputBox";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function Page() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        mobileNumber: null,
        address: "",
        city: "",
        state: "",
        postalCode: null,
        country: "",
        citizenship: "",
        memberID: "",
        taxID: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        mobileNumber: Yup.number()
          .max(10, "Invalid mobile number")
          .required("Required"),
        address: Yup.string()
          .min(10, "Must be 10 characters or more")
          .max(100, "Must be 100 characters or less"),
        city: Yup.string()
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        state: Yup.string()
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        postalCode: Yup.number()
          .max(6, "Invalid postal code")
          .required("Required"),
        country: Yup.string()
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        citizenship: Yup.string()
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        memberID: Yup.string(),
        taxID: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log("values-->", values);
        setSubmitting(false);
      }}
    >
      <Form className="bg-white">
        <InputBox
          label="name"
          name="name"
          type="text"
          placeholder="Your name"
        />
        <button className="bg-blue-600 rounded p-4 cursor-pointer"type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
