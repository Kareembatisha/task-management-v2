import React from "react";
import {
  Card,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { StoreVisitsCharts } from "./DashboardEcommerceCharts";

const StoreVisits = () => {
  return (
    <React.Fragment>
      <Col >
        <Card className="card-height-100">
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">Attendance Trend</h4>
           
          </CardHeader>

          <div className="card-body">
          <StoreVisitsCharts dataColors={["--vz-primary"]} />

          </div>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default StoreVisits;
