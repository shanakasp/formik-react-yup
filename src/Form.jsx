import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./MyForm.scss";
import ErrorMessageHandler from "./components/ErrorMsgHandler";

const MyForm = () => {
  return (
    <div className="form-container">
      <h1>My Form</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form values:", values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessageHandler
                errors={
                  touched.name && errors.name ? { name: errors.name } : {}
                }
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessageHandler
                errors={
                  touched.email && errors.email ? { email: errors.email } : {}
                }
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
