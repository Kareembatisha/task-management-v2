import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./styles.css"; // Import the custom CSS
import { Box, Grid, Paper, Typography } from "@mui/material";
import NewsFeed from "./NewsFeed";
import Widgetstaps from "./Widgetstaps";
import UserTasks from "./UserTasks";
import Revenue from "./Revenue";
import StoreVisits from "./StoreVisits";
import BestSellingProducts from "./BestSellingProducts";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import testImage from "./Test.PNG"; // Import image if it's in the `src` folder

function UserInformation() {
  // Example data
  const dataColors = ["#FF4560", "#00E396"]; // Colors for bars
  const series = [
    {
      name: "Bar 1",
      data: [30, 40], // Values for the first series
    },
    {
      name: "Bar 2",
      data: [50, 60], // Values for the second series
    },
  ];
  return (
    <div className="page-content">
      <BreadCrumb filter={true} title="Good Afternoon Kareem !" pageTitle="" />
      <Row className="justify-content-start" >
        <Col xl="4" md="12" xs="12">
          <Box
            sx={{
              maxWidth: 350,
              maxHeight: 200,
              backgroundColor: "white",
              boxShadow: 5, // You can change the shadow level here
              margin: "20px 10px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            className=" mt-4"
          >
            <CardTitle className="atm-card" style={{ color: "#fff" }} tag="h5">
              <div style={{ marginBottom: "3px" }}>
                <AcUnitOutlinedIcon color="warning" />
                Weather
              </div>
              <CardText>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "8px",
                  }}
                >
                  <div class="sun"></div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "space-between",
                      lineHeight: "1px",
                    }}
                  >
                    <h5
                      style={{
                        color: "#fff",
                        fontWeight: "bolder",
                        marginBottom: "3px",
                      }}
                    >
                      44.94 c
                    </h5>
                    <Typography color={"#fff"} variant="subtitle2">
                      Humidity: 9%
                    </Typography>
                    <Typography color={"#fff"} variant="subtitle2">
                      wind Speed: 4,66mph
                    </Typography>
                  </div>
                </div>
              </CardText>
            </CardTitle>
            <CardBody
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2">Reyadh</Typography>
                <Typography variant="body2">Clear Sky</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2">Sunday,Augest 25</Typography>
                <Typography variant="body2">3:17 Pm</Typography>
              </div>
            </CardBody>
          </Box>
        </Col>
        <Col xl="4" md="12" xs="12">
          <Box
            sx={{
              maxWidth: 350,
              maxHeight: 200,
              backgroundColor: "white",
              boxShadow: 5, // You can change the shadow level here
              margin: "20px 10px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            className="mt-4"
          >
            <div className="atm-card-basic" style={{ padding: "10px" }}>
              <h5>
                <AccountBalanceOutlinedIcon
                  color="info"
                  sx={{ marginRight: "2px" }}
                />
                Building: 1
              </h5>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <Typography variant="caption">
                    Total Area in SQFT: 225
                  </Typography>
                  <Typography variant="caption">No. of Zones: 6</Typography>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: "auto" }}>
              <img
                src={testImage}
                alt=""
                style={{
                  width: "90%",
                  height: "auto",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom:"12px"
                }}
              />
            </div>
          </Box>
        </Col>
      </Row>
      <Row
        className="justify-content-start"
        style={{  marginTop: "20px" }}
      >
        <Grid container spacing={2} style={{  marginTop: "20px" }}>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ textAlign: "start", mt: 1 }}>
          Recent Activities
        </Typography>
        <Typography
          variant="subtitle2"
          color={"GrayText"}
          sx={{ textAlign: "start", mt: 1 }}
        >
          This section is about to show Recent Activities
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <NewsFeed data={true} />
            </Grid>
            <Grid item xs={12} md={6}>
              <NewsFeed data={false} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
      </Row>
      <Row
        className="justify-content-start"
        style={{  marginTop: "20px" }}
      >
        <Typography variant="body1" sx={{ textAlign: "start", mt: 1 }}>
          Task Board
        </Typography>
        <Typography
          variant="subtitle2"
          color={"GrayText"}
          sx={{ textAlign: "start", mt: 1, mb: 1 }}
        >
          This section is about to show Task Board
        </Typography>
        <Paper>
          <Col xl="12">
            <Row>
              <Widgetstaps />
            </Row>
          </Col>
          <Col md="12">
            <UserTasks />
          </Col>
        </Paper>
      </Row>
      <Row>
        <Typography variant="body1" sx={{ textAlign: "start", mt: 1, mb: 2 }}>
          Attendance
        </Typography>

        <Col xl="8">
          <Revenue name={"Attendance Trends"} />
        </Col>
        <Col xl="3">
          <StoreVisits />
        </Col>
      </Row>
      <Row>
        <Col xl="12">
          <BestSellingProducts name="Attendance List" />
        </Col>
      </Row>
      <Row>
        <Typography variant="body1" sx={{ textAlign: "start", mt: 1 }}>
          Usage Summerize
        </Typography>
        <Typography
          variant="subtitle2"
          color={"GrayText"}
          sx={{ textAlign: "start", mt: 1, mb: 2 }}
        >
          This section is about to show Usage Summerize
        </Typography>
        <Col xl="6">
          <BestSellingProducts name="Top 10 Companies" />
        </Col>
        <Col xl="6">
          <Revenue name={"Hourly Trend"} />
        </Col>
      </Row>
      <Row>
        <Typography variant="body1" sx={{ textAlign: "start", mt: 1 }}>
          Audits
        </Typography>
        <Typography
          variant="subtitle2"
          color={"GrayText"}
          sx={{ textAlign: "start", mt: 1, mb: 2 }}
        >
          This section is about to show Audits
        </Typography>
        <Col xl="6">
          <NewsFeed data={false} />
        </Col>
        <Col xl="6">
          <NewsFeed data={false} />
        </Col>
      </Row>
    </div>
  );
}

export default UserInformation;
