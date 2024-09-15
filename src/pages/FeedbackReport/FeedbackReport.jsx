import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import { Card, CardBody, Col, Container, Progress, Row } from "reactstrap";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import Widgetstaps from "./Widgetstaps";
import { BasicLineCharts } from "./LineCharts";
import { StackedColumn } from "./ColumnCharts";
import { SimpleDonut } from "./PieCharts";
import { SearchTable } from "./ReactTable";
import ChartTable from "./ChartComponent";
import DownloadIcon from "@mui/icons-material/Download";

function FeedbackReport() {
  return (
    <div style={{ overflow: "hidden" }} className="page-content">
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mb={8} // MarginBottom (theme.spacing(8))
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent="center"
          width={{ xs: "100%", md: "50%" }}
          textAlign={{ xs: "center", md: "left" }}
          mb={{ xs: 2, md: 0 }} // MarginBottom (theme.spacing(2)) for smaller screens
        >
          <BreadCrumb
            filter={false}
            title="Feedbacks Summary Report"
            pageTitle=""
          />
          <Container>
            <Typography
              variant="subtitle2"
              color="#818991"
              mt={{ xs: -1, md: -2 }} // MarginTop (theme.spacing(-1)) for smaller screens
            >
              this reporting service generates reports on feedback metrics.
            </Typography>
          </Container>
        </Box>
        <Box display="flex" justifyContent={"flex-end"} gap={1.5}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PictureAsPdfOutlinedIcon />}
          >
            <Typography variant="button">Download PDF</Typography>
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PictureAsPdfOutlinedIcon />}
          >
            <Typography variant="button">Download XLSX</Typography>
          </Button>
        </Box>
      </Box>
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
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Paper sx={{ pt: 4, width: "99%" }}>
          <BreadCrumb
            filter={false}
            title="Avg. Customer Feedback"
            pageTitle=""
          />
          <BasicLineCharts />
        </Paper>
      </Row>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Paper sx={{ pt: 4, width: "99%" }}>
          <BreadCrumb filter={false} title="Ratings Breakdown" pageTitle="" />
          <StackedColumn dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger"]' />
        </Paper>
      </Row>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Paper sx={{ pt: 4, width: "99%" }}>
          <BreadCrumb filter={false} title="Ratings Breakdown" pageTitle="" />
          <SimpleDonut dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
        </Paper>
      </Row>
      <Row style={{ paddingTop: "30px", marginBottom: "30px" }}>
        <BreadCrumb filter={false} title="Top performing Zones" pageTitle="" />

        <Paper sx={{ pt: 4, width: "99%" }}>
          <Card
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row style={{ width: "100%" }}>
              <Col xl="4">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <h5>Female Public Washroom</h5>
                  <Typography variant="subtitle2">
                    Avg. Rating: 2.7/3
                  </Typography>
                  <Typography variant="subtitle2">
                    No. of Positive Feedback: 191/200
                  </Typography>
                </div>
              </Col>
              <Col xl="8">
                <Progress
                  value={30}
                  color="info"
                  className="bg-info-subtle rounded-0"
                />
              </Col>
            </Row>
          </Card>

          <Card
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row style={{ width: "100%" }}>
              <Col xl="4">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <h5>Male Public Washroom</h5>
                  <Typography variant="subtitle2">
                    Avg. Rating: 2.7/3
                  </Typography>
                  <Typography variant="subtitle2">
                    No. of Positive Feedback: 191/200
                  </Typography>
                </div>
              </Col>
              <Col xl="8">
                <Progress
                  value={80}
                  color="success"
                  className="bg-info-subtle rounded-0"
                />
              </Col>
            </Row>
          </Card>
        </Paper>
      </Row>
      <Box
        mt={4} // MarginTop (theme.spacing(4))
        mb={7} // MarginBottom (theme.spacing(4))
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
                title="Lowest Performing Zones"
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
              <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                <InputLabel id="negative-reason-label">
                  Negative Reason
                </InputLabel>
                <Select labelId="negative-reason-label" label="Negative Reason">
                  <MenuItem value="No Toilet paper/paper Towel">
                    No Toilet paper/paper Towel
                  </MenuItem>
                  <MenuItem value="Dirty Washroom">Dirty Washroom</MenuItem>
                  <MenuItem value="Broken Fixtures">Broken Fixtures</MenuItem>
                </Select>
              </FormControl>
              <IconButton color="primary">
                <DownloadIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <SearchTable />
      </Box>
      <Box
        mt={4} // MarginTop (theme.spacing(4))
        mb={4} // MarginBottom (theme.spacing(4))
      >
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} md={8}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              maxWidth="100%"
            >
              <BreadCrumb
                filter={false}
                title="Feedback Reasons"
                pageTitle=""
              />
              <Typography
                variant="subtitle2"
                color="#818991"
                sx={{ mt: -2, textAlign: "start", px: 1.5 }}
              >
                This chart displays the distribution of feedback reasons
                reported in the selected time range.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box display="flex">
              <Select
                value="All Reasons"
                sx={{ mb: 2, mt: 2, ml: "auto", minWidth: 120 }}
              >
                <MenuItem value="All Reasons">All Reasons</MenuItem>
                {/* Add more options if needed */}
              </Select>
            </Box>
          </Grid>
        </Grid>

        <ChartTable />
      </Box>
    </div>
  );
}

export default FeedbackReport;
