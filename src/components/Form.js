import React from "react";
import { Formik } from "formik";
import "./Form.css";
const Form = () => {
  return (
    <>
      <div className="d-flex justify-content-center m-4">
        <div className="FormCardMain px-5 py-4">
          <div className="d-flex justify-content-center flex-column">
            <div className="d-flex justify-content-center">
              <h2 className="" id={"formH2"}>
                Contact
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <p>Leave us a message</p>
            </div>
          </div>
          <div className="mt-4">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="conainer row">
                    <div className="col-6">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="First Name"
                        />
                      </div>{" "}
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}{" "}
                    </div>
                    <div className="col-6">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Last Name"
                        />
                      </div>
                      {errors.lastName && touched.lastName && errors.lastName}
                    </div>
                    <div className="col-12">
                      <div class="mb-3">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                        />
                      </div>
                      {errors.email && touched.email && errors.email}
                    </div>
                    <div className="col-12">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="business"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.business}
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Describe your business"
                        />
                      </div>
                      {errors.business && touched.business && errors.business}
                    </div>
                  </div>
                  {/* {" "} */}
                  <div className="col-12">
                    <div class="mb-3">
                      <label class="form-label form-check-label-color" for="">
                        Which service are you interested in
                      </label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label form-check-label-color"
                          for="flexCheckDefault">
                          Book keeping/Accounting
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label form-check-label-color"
                          for="flexCheckDefault">
                          Clean Up/Catch Up
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label form-check-label-color"
                          for="flexCheckDefault">
                          CFO & Business Advisory
                        </label>
                      </div>
                    </div>
                    {errors.business && touched.business && errors.business}
                  </div>
                  <div className="col-12">
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Your example"
                        rows="4"></textarea>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button
                      className="btn btn-primary formSubmitBtn"
                      type="submit"
                      disabled={isSubmitting}>
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
