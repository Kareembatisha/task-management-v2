import React from "react";

import { Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import UserTasks from "./UserTasks";
import Widgets from "./Widgets";
import Widgetstaps from "./Widgetstaps";

function MainUserTask() {
  document.title = "User Tasks ";

  return (
    <React.Fragment>
      <div style={{overflow:"hidden"}} className="page-content">
        <Container fluid>
          <BreadCrumb title="Tasks List" pageTitle="Tasks" />
          <Row style={{marginBottom:"10px", marginLeft:"auto", marginRight:"auto"}}>
            <Widgetstaps />
          </Row>
          <Row>
            <Widgets />
          </Row>
        </Container>

        <BreadCrumb title="User Tasks" pageTitle="Tasks" />
        <UserTasks />
      </div>
    </React.Fragment>
  );
}

export default MainUserTask;
