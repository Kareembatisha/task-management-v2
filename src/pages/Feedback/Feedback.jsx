import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Container } from "reactstrap";
import List from "./List";

const Feedback = () => {
  document.title = "Project List ";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Project List" pageTitle="Projects" />
          <List />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Feedback;
