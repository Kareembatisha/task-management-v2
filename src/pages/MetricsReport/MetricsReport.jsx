import React from "react";
import { Button, Col, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Box, Grid, Typography } from "@mui/material";
import Widgetstaps from "./Widgetstaps";
import { SearchTable, SearchTable2 } from "./ReactTable";
import Revenue from "./Revenue";
import HeatMap from "./HeatMap";

function MetricsReport() {
  return (
    <div className="page-content">
      <Row>
        <Row>
          <BreadCrumb
            filter={false}
            title="Usage Metrics Report"
            pageTitle=""
          />
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "-25px",
          }}
        >
          <Col xl={"8"} md={"12"}>
            <Typography variant="subtitle2" color="textDisabled">
              this reporting service generates reports on people usage metrics
            </Typography>
          </Col>
          <Col style={{ textAlign: "center" }} xl={"3"} md={"12"}>
            <Button
              sx={{ padding: "10px 20px" }}
              variant="contained"
              color="primary"
            >
              <Typography variant="button">Download PDF</Typography>
            </Button>
          </Col>
        </Row>
      </Row>

      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            maxWidth="100%"
            gap={1} // Gap between items
            mb={2} // MarginBottom (theme.spacing(2))
            flexDirection={{ xs: "column", sm: "row" }} // Stack vertically on small screens
          >
            <Box
              display="flex"
              justifyContent={"center"}
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
              sx={{ padding: "10px 20px" }}
              variant="contained"
              color="primary"
            >
              <Typography variant="button">KPI Calculation</Typography>
            </Button>
          </Box>
          <Row style={{ width: "100%" }} className="mb-3 mx-auto">
            <Widgetstaps />
          </Row>
        </div>
      </Row>
      <Box
        mt={4} // MarginTop (theme.spacing(4))
        mb={7} // MarginBottom (theme.spacing(7))
        sx={{
          border: "1px solid", // Solid border
          borderColor: "divider", // Border color
          boxShadow: 5, // Shadow depth
          borderRadius: 1, // Optional: Rounded corners
          padding: 3,
        }}
      >
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              minWidth="100%"
            >
              <BreadCrumb
                filter={false}
                title="Total Footfall by zone"
                pageTitle=""
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1} // Gap between elements
            >
              <Button
                sx={{ padding: "10px 20px" }}
                variant="contained"
                color="primary"
              >
                <Typography variant="button">Download XLSX</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>

        <SearchTable />
      </Box>
      <Box
        mt={4} // MarginTop (theme.spacing(4))
        mb={7} // MarginBottom (theme.spacing(7))
        sx={{
          border: "1px solid", // Solid border
          borderColor: "divider", // Border color
          boxShadow: 5, // Shadow depth
          borderRadius: 1, // Optional: Rounded corners
          padding: 3,
        }}
      >
        <Row>
          <Row style={{ marginLeft: "auto" }}>
            <BreadCrumb
              filter={false}
              title="Popular /busiest hour of the building"
              pageTitle=""
            />
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Col style={{ textAlign: "start" }} xl={"7"} md={"12"}>
                <Typography variant="subtitle2" color="textDisabled">
                  this visualization depicts the typical expected visitors by
                  hour of any typical day
                </Typography>
              </Col>
              <Col
                xl={"3"}
                style={{
                  textAlign: "center",
                  padding: "20px",
                  backgroundColor: "orange",
                  borderRadius: "10px",
                  color: "#fff",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "15px",
                }}
              >
                <Typography variant="body2">Usually Busy : 11-12</Typography>
              </Col>
            </Row>
          </Row>
          <Revenue name={""} />
        </Row>
      </Box>
      <Row>
        <HeatMap />
      </Row>
      <Box
        mt={4} // MarginTop (theme.spacing(4))
        mb={2} // MarginBottom (theme.spacing(7))
        sx={{
          border: "1px solid", // Solid border
          borderColor: "divider", // Border color
          boxShadow: 5, // Shadow depth
          borderRadius: 1, // Optional: Rounded corners
          padding: 3,
        }}
      >
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              minWidth="100%"
            >
              <BreadCrumb
                filter={false}
                title="Population density by zone"
                pageTitle=""
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1} // Gap between elements
            >
              <Button
                sx={{ padding: "10px 20px" }}
                variant="contained"
                color="primary"
              >
                <Typography variant="button">Download XLSX</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>

        <SearchTable2 />
      </Box>
    </div>
  );
}

export default MetricsReport;
