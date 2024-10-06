import React from "react";

//import Components
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Card, Col, Input, Label } from "reactstrap";
import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader";
import { Link } from "react-router-dom";

//Import Flatepicker
// import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr";

function TasksForm() {
  return (
    <div className="page-content">
      <BreadCrumb title="Task Form" pageTitle="Forms" />
      <Col xxl={12}>
        <Card>
          <div className="card-body">
            <p className="text-muted">
              By adding{" "}
              <Link to="" className="text-decoration-underline">
                gutter modifier classes
              </Link>
              , you can have control over the gutter width in as well the inline
              as block direction.{" "}
              <span className="fw-medium">
                Also requires the <code>$enable-grid-classes</code> Sass
                variable to be enabled
              </span>{" "}
              (on by default).
            </p>
            <div className="live-preview">
              <form action="#" className="row g-3">
                <Col md={12}>
                  <Label htmlFor="fullnameInput" className="form-label">
                    Name
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="fullnameInput"
                    placeholder="Enter your name"
                  />
                </Col>
                <Col md={6}>
                  <Label htmlFor="inputEmail4" className="form-label">
                    Email
                  </Label>
                  <Input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </Col>
                <Col md={6}>
                  <Label htmlFor="inputPassword4" className="form-label">
                    Password
                  </Label>
                  <Input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </Col>
                <Col xs={12}>
                  <Label htmlFor="inputAddress" className="form-label">
                    Address
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </Col>
                <Col xs={12}>
                  <Label htmlFor="inputAddress2" className="form-label">
                    Address 2
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </Col>
                <Col md={6}>
                  <Label htmlFor="inputCity" className="form-label">
                    City
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    placeholder="Enter your city"
                  />
                </Col>
                <Col md={4}>
                  <Label htmlFor="inputState" className="form-label">
                    State
                  </Label>
                  <select
                    id="inputState"
                    className="form-select"
                    data-choices
                    data-choices-sorting="true"
                  >
                    <option>Choose...</option>
                    <option>...</option>
                  </select>
                </Col>
                <Col md={2}>
                  <Label htmlFor="inputZip" className="form-label">
                    Zip
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    placeholder="Zin code"
                  />
                </Col>
                <Col xs={12}>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <Label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </Label>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </Col>
              </form>
            </div>
            <div className="d-none code-view">
              <pre className="language-markup" style={{ height: "375px" }}>
                <code></code>
              </pre>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
}

export default TasksForm;
