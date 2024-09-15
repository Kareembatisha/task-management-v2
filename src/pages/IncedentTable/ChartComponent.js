// ChartComponent.js
import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Registering chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartComponent = ({ data }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Summarize data for charts
  const incidentsPerStatus = data.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  const totalIncidents = data.length;
  const averageDuration =
    data.reduce((sum, item) => sum + parseInt(item.duration), 0) /
    totalIncidents;

  const pieChartData = {
    labels: Object.keys(incidentsPerStatus),
    datasets: [
      {
        label: "Incidents by Status",
        data: Object.values(incidentsPerStatus),
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Incident Duration",
        data: data.map((item) => parseInt(item.duration)),
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Report Overview
      </Typography>

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="chart-tabs"
        sx={{ mb: 4 }}
      >
        <Tab label="Overview" />
        <Tab label="Incidents by Status" />
        <Tab label="Incident Duration" />
      </Tabs>

      {tabIndex === 0 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Overview
          </Typography>
          <Typography variant="body1">
            <strong>Total Incidents:</strong> {totalIncidents}
          </Typography>
          <Typography variant="body1">
            <strong>Average Duration:</strong> {averageDuration.toFixed(2)}{" "}
            hours
          </Typography>
          <Typography variant="body1">
            <strong>Incidents by Status:</strong>
          </Typography>
          <ul>
            {Object.keys(incidentsPerStatus).map((status) => (
              <li key={status}>
                {status}: {incidentsPerStatus[status]} incidents
              </li>
            ))}
          </ul>
        </Box>
      )}

      {tabIndex === 1 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Incidents by Status
          </Typography>
          <Pie data={pieChartData} />
        </Box>
      )}

      {tabIndex === 2 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Incident Duration
          </Typography>
          <Line data={lineChartData} />
        </Box>
      )}
    </Box>
  );
};

export default ChartComponent;
