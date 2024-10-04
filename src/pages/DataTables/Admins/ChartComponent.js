// ChartComponent.js
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const ChartComponent = ({ type, data }) => {
  if (!data || data.length === 0) {
    return <div>No data available for chart</div>;
  }

  // Prepare chart data
  const chartData = {
    labels: data.map((item) => item.name), // Use 'name' as labels
    datasets: [
      {
        label: "Total Area",
        data: data.map((item) => item.location), // Use 'location' as values
        backgroundColor:
          type === "pie" ? "rgba(54, 162, 235, .8)" : "rgba(54, 162, 235, 0.8)",
        borderColor:
          type === "pie" ? "rgba(54, 162, 235, .8)" : "rgba(54, 162, 235, .8)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Building Data",
      },
    },
  };

  // Render chart based on type
  switch (type) {
    case "bar":
      return <Bar data={chartData} options={options} />;
    case "line":
      return <Line data={chartData} options={options} />;
    case "pie":
      return <Pie data={chartData} options={options} />;
    default:
      return <div>Unsupported chart type</div>;
  }
};

export default ChartComponent;
