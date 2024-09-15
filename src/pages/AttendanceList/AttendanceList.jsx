import React from "react";
import BestSellingProducts from "./BestSellingProducts";
import { Button, Col, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import StoreVisits from "./StoreVisits";
import Revenue from "./Revenue";
import { Box, Typography } from "@mui/material";
import { AttendanceArrival, AttendanceSummary } from "./ReactTable";
import Calendar from "./Calendar";

function AttendanceList() {
  return (
    <div className="page-content">
      <Row style={{ marginBottom: "50px" }}>
        <BreadCrumb filter={true} title="Attendance" pageTitle="" />
      </Row>
      <Row style={{ marginBottom: "60px" }}>
        <Col xl={"6"} md={"12"}>
          <Revenue name={"Attendance Trends"} />
        </Col>
        <Col xl={"6"} md={"12"}>
          <StoreVisits name={"Attendance status"} />
        </Col>
      </Row>
      <Row>
        <BestSellingProducts />
      </Row>
      <Row style={{ width: "100%", padding: "0 20px" }}>
        <Col xs={12}>
          <BreadCrumb
            filter={false}
            title="Attendance Arrival (Lateness) Report"
            pageTitle=""
          />
        </Col>
        <Col
          xs={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "-25px",
            flexWrap: "wrap", // Ensures responsiveness
          }}
        >
          <Col xl={8} md={12}>
            <Typography variant="subtitle2" color="textDisabled">
              this reporting service generates reports on people usage metrics
            </Typography>
          </Col>
          <Col
            xl={3}
            md={12}
            style={{
              textAlign: "center",
              marginTop: "10px", // For better spacing on small screens
            }}
          >
            <Button
              sx={{ padding: "10px 20px", width: "100%" }}
              variant="contained"
              color="primary"
            >
              <Typography variant="button">Download PDF</Typography>
            </Button>
          </Col>
        </Col>

        <Col xs={12} style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap" // Ensures responsiveness
            gap={1}
            mb={2}
            flexDirection={{ xs: "column", sm: "row" }} // Stack vertically on small screens
          >
            <Box
              display="flex"
              justifyContent="center"
              gap={2}
              flexWrap="wrap"
              mb={{ xs: 2, sm: 0 }}
            >
              <Typography>
                Building:{" "}
                <span style={{ color: "#4444ff" }}>King ABDULLAH</span>
              </Typography>
              <Typography>
                Created by: <span style={{ color: "#4444ff" }}>Kareem</span>
              </Typography>
              <Typography>
                Created on:{" "}
                <span style={{ color: "#4444ff" }}>26/8/2024 13:22:54</span>
              </Typography>
              <Typography>
                Date Range:{" "}
                <span style={{ color: "#4444ff" }}>01 Aug 24-26 Aug 24</span>
              </Typography>
            </Box>
            <Button
              sx={{ padding: "10px 20px", width: { xs: "100%", sm: "auto" } }} // Responsive width
              variant="contained"
              color="primary"
            >
              <Typography variant="button">KPI Calculation</Typography>
            </Button>
          </Box>

          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Col xs={12}>
              <AttendanceArrival style={{ width: "100%" }} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ width: "100%", padding: "0 20px" }}>
        <Col xs={12}>
          <BreadCrumb
            filter={false}
            title="Attendance Summary Report"
            pageTitle=""
          />
        </Col>
        <Col
          xs={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "-25px",
            flexWrap: "wrap", // Ensures responsiveness
          }}
        >
          <Col xl={8} md={12}>
            <Typography variant="subtitle2" color="textDisabled">
              this reporting service generates reports on people usage metrics
            </Typography>
          </Col>
          <Col
            xl={3}
            md={12}
            style={{
              textAlign: "center",
              marginTop: "10px", // For better spacing on small screens
            }}
          >
            <Button
              sx={{ padding: "10px 20px", width: "100%" }}
              variant="contained"
              color="primary"
            >
              <Typography variant="button">Download PDF</Typography>
            </Button>
          </Col>
        </Col>

        <Col xs={12} style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap" // Ensures responsiveness
            gap={1}
            mb={2}
            flexDirection={{ xs: "column", sm: "row" }} // Stack vertically on small screens
          >
            <Box
              display="flex"
              justifyContent="center"
              gap={2}
              flexWrap="wrap"
              mb={{ xs: 2, sm: 0 }}
            >
              <Typography>
                Building:{" "}
                <span style={{ color: "#4444ff" }}>King ABDULLAH</span>
              </Typography>
              <Typography>
                Created by: <span style={{ color: "#4444ff" }}>Kareem</span>
              </Typography>
              <Typography>
                Created on:{" "}
                <span style={{ color: "#4444ff" }}>26/8/2024 13:22:54</span>
              </Typography>
              <Typography>
                Date Range:{" "}
                <span style={{ color: "#4444ff" }}>01 Aug 24-26 Aug 24</span>
              </Typography>
            </Box>
            <Button
              sx={{ padding: "10px 20px", width: { xs: "100%", sm: "auto" } }} // Responsive width
              variant="contained"
              color="primary"
            >
              <Typography variant="button">KPI Calculation</Typography>
            </Button>
          </Box>

          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Col xs={12}>
              <AttendanceSummary style={{ width: "100%" }} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Calendar />
      </Row>
    </div>
  );
}

export default AttendanceList;
