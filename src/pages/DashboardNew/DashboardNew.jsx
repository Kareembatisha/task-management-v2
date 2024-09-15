import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download"; // Download icon from MUI
import Widgets from "./Widgets";
import Widgets2 from "./Widgets2";
import { Col, Row } from "reactstrap";
import Revenue from "./Revenue";
import RecentOrders from "./RecentOrders";
import StoreVisits from "./StoreVisits";
import NewsFeed from "./NewsFeed";

function DashboardNew() {
  return (
    <div className="page-content">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <BreadCrumb title="DashBoard" pageTitle="" />
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
        >
          Export
        </Button>
      </div>
      <Row style={{ marginBottom: "20px" }}>
        <Typography variant="body1" fontWeight={"bold"} mb={"10px"}>
          People Counter Analytics
        </Typography>
        <Widgets />
      </Row>
      <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Col xl={"6"}>
          <Revenue name={"Hourly Trend (Today)"} />
        </Col>
        <Col xl={"6"}>
          <RecentOrders />
        </Col>
      </Row>
      <Row>
        <Revenue name={"Total People Count across locations (Today)"} />
      </Row>
      <Row style={{ marginBottom: "20px" }}>
        <Typography variant="body1" fontWeight={"bold"} mb={"10px"}>
          Feedback Analytics
        </Typography>
        <Widgets2 />
      </Row>
      <Row>
        <Col xl={"6"} md={"12"}>
          <StoreVisits />
        </Col>
        <Col xl={"6"} md={"12"}>
          <Revenue name={"Hourly feedbacks Rating Trend"} />
        </Col>
        <Col xl={"6"} md={"12"}>
          <Revenue name={"Feedback Rating Across all Locations"} />
        </Col>
      </Row>
      <Row>
        <Col xl={"6"} md={"12"}>
          <NewsFeed name={"Reasons Distribution (Today)"} />
        </Col>
        <Col xl={"6"} md={"12"}>
          <NewsFeed name={"Reasons Count Distribution Across Zones (Today)"} />
        </Col>
        <Col xl={"6"} md={"12"}>
          <NewsFeed name={"Hourly Trend of Reasons Reported (Today)"} />
        </Col>
      </Row>
    </div>
  );
}

export default DashboardNew;
