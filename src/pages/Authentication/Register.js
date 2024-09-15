import React, { useEffect } from "react";
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Input,
  Label,
  Form,
  FormFeedback,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, apiError, resetRegisterFlag } from "../../slices/thunks";
import aiLogo from "../../assets/images/ai-logo (3).png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { createSelector } from "reselect";

const Register = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      first_name: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Please Enter Your Email"),
      first_name: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Confirm Password Isn't Match")
        .required("Please Confirm Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  const selectLayoutState = (state) => state.Account;
  const registerData = createSelector(selectLayoutState, (account) => ({
    success: account.success,
    error: account.error,
  }));

  const { success, error } = useSelector(registerData);

  useEffect(() => {
    dispatch(apiError(""));
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setTimeout(() => history("/login"), 3000);
    }
    if (error) {
      setTimeout(() => dispatch(resetRegisterFlag()), 3000);
    }
  }, [dispatch, success, error, history]);

  document.title = "SignUp";

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <img src={aiLogo} alt="" height="170" />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Create New Account</h5>
                      <p className="text-muted">Get your account now</p>
                    </div>
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={validation.handleSubmit}
                        className="needs-validation"
                      >
                        {success && (
                          <Alert color="success">
                            Register User Successfully and Your Redirect To
                            Login Page...
                          </Alert>
                        )}
                        {error && (
                          <Alert color="danger">
                            Email has been registered before, Please use another
                            email address.
                          </Alert>
                        )}

                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email <span className="text-danger">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Enter email address"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email}
                            invalid={
                              validation.touched.email &&
                              validation.errors.email
                                ? true
                                : false
                            }
                          />
                          {validation.touched.email &&
                            validation.errors.email && (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            )}
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="first_name" className="form-label">
                            Username <span className="text-danger">*</span>
                          </Label>
                          <Input
                            id="first_name"
                            name="first_name"
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.first_name}
                            invalid={
                              validation.touched.first_name &&
                              validation.errors.first_name
                                ? true
                                : false
                            }
                          />
                          {validation.touched.first_name &&
                            validation.errors.first_name && (
                              <FormFeedback type="invalid">
                                {validation.errors.first_name}
                              </FormFeedback>
                            )}
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="password" className="form-label">
                            Password <span className="text-danger">*</span>
                          </Label>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.password}
                            invalid={
                              validation.touched.password &&
                              validation.errors.password
                                ? true
                                : false
                            }
                          />
                          {validation.touched.password &&
                            validation.errors.password && (
                              <FormFeedback type="invalid">
                                {validation.errors.password}
                              </FormFeedback>
                            )}
                        </div>

                        <div className="mb-2">
                          <Label
                            htmlFor="confirm_password"
                            className="form-label"
                          >
                            Confirm Password{" "}
                            <span className="text-danger">*</span>
                          </Label>
                          <Input
                            id="confirm_password"
                            name="confirm_password"
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.confirm_password}
                            invalid={
                              validation.touched.confirm_password &&
                              validation.errors.confirm_password
                                ? true
                                : false
                            }
                          />
                          {validation.touched.confirm_password &&
                            validation.errors.confirm_password && (
                              <FormFeedback type="invalid">
                                {validation.errors.confirm_password}
                              </FormFeedback>
                            )}
                        </div>

                        <div className="mt-4">
                          <button
                            className="btn btn-success w-100"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-4 text-center">
                  <p className="mb-0">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="fw-semibold text-primary text-decoration-underline"
                    >
                      Signin
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default Register;
