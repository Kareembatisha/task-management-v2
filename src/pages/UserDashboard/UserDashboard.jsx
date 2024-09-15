import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Widgetstaps from "./Widgetstaps";
import Revenue from "./Revenue";
import NewsFeed from "./NewsFeed";
import RecentOrders from "./RecentOrders";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Box, Typography } from "@mui/material";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";
import StoreVisits from "./StoreVisits";

const linkStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "white",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0,0,0,0.3)",
  },
};

const UserDashboard = () => {
  return (
    <div style={{ overflow: "hidden" }} className="page-content">
      <BreadCrumb filter={true} title="User Dashboard" pageTitle="Dashboards" />
      <Row className="mb-3 mx-auto">
        <Widgetstaps />
      </Row>
      <Row>
        <Col xl={6} xs={12}>
          <Revenue name="Logged Hours Distribution" />
        </Col>
        <Col xl={6} xs={12}>
          <NewsFeed />
        </Col>
      </Row>
      <Row>
        <Col xl={6} xs={12}>
          <RecentOrders
            name="Daily Attendance Summary"
            coloums={["Name", "Check In", "Check Out", "Status"]}
          />
        </Col>
        <Col xl={6} xs={12}>
          <Card>
            <CardHeader className="d-flex align-items-center">
              <h4 className="card-title mb-0 flex-grow-1">Quick Links</h4>
            </CardHeader>
            <CardBody>
              <Box
                sx={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                    gap: 2,
                  }}
                >
                  <Link to="/add-buildings" style={linkStyle}>
                    <AccountBalanceSharpIcon
                      sx={{ color: "red", fontSize: 24 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", mt: 1 }}
                    >
                      View Team
                    </Typography>
                  </Link>
                  <Link to="/manage-users" style={linkStyle}>
                    <PersonAddIcon sx={{ color: "blue", fontSize: 24 }} />
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", mt: 1 }}
                    >
                      Invite New Members
                    </Typography>
                  </Link>
                  <Link to="/view-reports" style={linkStyle}>
                    <BarChartIcon sx={{ color: "green", fontSize: 24 }} />
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", mt: 1 }}
                    >
                      View Timesheets
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={6} xs={12}>
          <StoreVisits />
        </Col>
        <Col xl={6} xs={12}>
          <Card>
            <CardHeader className="d-flex align-items-center">
              <h4 className="card-title mb-0 flex-grow-1">Need Approval</h4>
            </CardHeader>
            <CardBody>
              <Box
                sx={{
                  background: "white",
                  borderRadius: "10px",
                  width: "120px",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
                    gap: 2,
                  }}
                >
                  <Link to="/add-buildings" style={linkStyle}>
                    <Typography
                      sx={{
                        color: "red",
                        fontSize: 24,
                        backgroundColor: "#ff000080",
                        padding: "15px",
                        borderRadius: "10px",
                      }}
                    >
                      322{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", mt: 1 }}
                    >
                      Timesheet Request
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={6} xs={12}>
          <Revenue name="Logged Hours Distribution" />
        </Col>
        <Col xl={6} xs={12}>
          <RecentOrders
            name="Time Tracking Summary"
            coloums={["Name", "Schedules Hrs", "Logged Hrs", "Status"]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserDashboard;
