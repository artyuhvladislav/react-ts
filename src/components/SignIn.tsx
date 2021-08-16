import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

interface ISignIn {
    setUserData(userData: object): void,
}

const SignIn: React.FC<ISignIn> = ( { setUserData } ) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match")
      .required("Password is required"),
    email: yup.string().email("Incorrect email").required("Email is required"),
    confirmEmail: yup
      .string()
      .email("Incorrect email")
      .oneOf([yup.ref("email")], "Email does not match")
      .required("Email is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        confirmEmail: "",
      }}
      validateOnBlur
      onSubmit={( { name,  email} ) => setUserData({ name, email, isFormShow: false, isSign: true })}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        isValid,
        handleChange,
        handleSubmit,
        dirty,
      }) => (
        <div className="row w50">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  placeholder="Name"
                  type="text"
                  className={
                    touched.name && errors.name ? "input-wrong" : "validate"
                  }
                />
                <label htmlFor="name"></label>
                {touched.name && errors.name && (
                  <span
                    className="wrong"
                    data-error="wrong"
                    data-success="right"
                  >
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  type="password"
                  className={
                    touched.password && errors.password ? "input-wrong" : "validate"
                  }
                  placeholder="Password"
                />
                <label htmlFor="password"></label>
                {touched.password && errors.password && (
                  <span
                    className="wrong"
                    data-error="wrong"
                    data-success="right"
                  >
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  className="validate"
                  placeholder="confirmPassword"
                />
                <label htmlFor="confirmPassword"></label>
                {touched.confirmPassword && errors.confirmPassword && (
                  <span
                    className="wrong"
                    data-error="wrong"
                    data-success="right"
                  >
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  type="email"
                  className="validate"
                  placeholder="Email"
                />
                <label htmlFor="email"></label>
                {touched.email && errors.email && (
                  <span
                    className="wrong"
                    data-error="wrong"
                    data-success="right"
                  >
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmEmail}
                  name="confirmEmail"
                  type="email"
                  className="validate"
                  placeholder="confirmEmail"
                />
                <label htmlFor="confirmEmail"></label>
                {touched.confirmEmail && errors.confirmEmail && (
                  <span
                    className="wrong"
                    data-error="wrong"
                    data-success="right"
                  >
                    {errors.confirmEmail}
                  </span>
                )}
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              disabled={!(isValid && dirty)}
            >
              Sign in
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default SignIn;
