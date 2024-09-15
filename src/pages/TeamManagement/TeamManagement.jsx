import React from "react";
import { Button, Col, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Widgetstaps from "./Widgetstaps";
import { SearchTable } from "./ReactTable";

function TeamManagement() {
  return (
    <div
      style={{ overflow: "hidden" }}
      className="page-content"
    >
      <Row style={{ marginBottom: "15px" }}>
        <BreadCrumb filter={false} title="Teams Management" />
      </Row>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <Col xl={"8"}>
          <Row>
            <Widgetstaps />
          </Row>
        </Col>
        <Col style={{ textAlign: "center" }} xl={"3"} md={"12"}>
          <Button>Invite Member</Button>
        </Col>
      </Row>
      <Row>
        <SearchTable />
      </Row>
    </div>
  );
}

export default TeamManagement;
