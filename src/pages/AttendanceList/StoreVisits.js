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

const StoreVisits = ({ name }) => {
  return (
    <React.Fragment>
      <Col>
        <Card className="card-height-100">
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">
              {name ? name : "Total Number of Feedbacks by Rating"}
            </h4>
            <div className="flex-shrink-0">
              <UncontrolledDropdown
                className="card-header-dropdown"
                direction="start"
              >
                <DropdownToggle
                  tag="a"
                  className="text-reset dropdown-btn"
                  role="button"
                >
                  <span className="text-muted">
                    Report<i className="mdi mdi-chevron-down ms-1"></i>
                  </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem>Download Report</DropdownItem>
                  <DropdownItem>Export</DropdownItem>
                  <DropdownItem>Import</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>

          <div className="card-body">
            <StoreVisitsCharts dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
          </div>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default StoreVisits;
