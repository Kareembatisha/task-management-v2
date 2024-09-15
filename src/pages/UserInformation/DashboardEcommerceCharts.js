import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";

const RevenueCharts = ({ dataColors, series }) => {
  const linechartcustomerColors = getChartColorsArray(dataColors);

  // Function to calculate percentages
  const calculatePercentages = (data) => {
    if (!Array.isArray(data)) return [];
    const total = data.reduce((acc, value) => acc + value, 0);
    return data.map((value) =>
      total > 0 ? ((value / total) * 100).toFixed(2) : 0
    );
  };

  // Ensure series is an array of arrays
  const isArrayOfArrays = Array.isArray(series) && series.every(Array.isArray);
  const seriesPercentages = isArrayOfArrays
    ? series.map(calculatePercentages)
    : ["5000"];

  const options = {
    chart: {
      height: 370,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      dashArray: [0, 0, 8],
      width: [2, 0, 2.2],
    },
    fill: {
      opacity: [0.1, 0.9, 1],
    },
    markers: {
      size: [0, 0, 0],
      strokeWidth: 2,
      hover: {
        size: 4,
      },
    },
    xaxis: {
      categories: ["Present Awaiting clockOut"],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}%`, // Format y-axis labels as percentages
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: -2,
        bottom: 15,
        left: 10,
      },
    },
    legend: {
      show: true,
      horizontalAlign: "center",
      offsetX: 0,
      offsetY: -5,
      markers: {
        width: 9,
        height: 9,
        radius: 6,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },
    colors: linechartcustomerColors,
    tooltip: {
      shared: true,
      y: series.map((_, seriesIndex) => ({
        formatter: function (value) {
          if (typeof value !== "undefined") {
            const percentage = seriesPercentages[seriesIndex]?.[0] ?? 50; // Adjust as needed
            return percentage + "%";
          }
          return value;
        },
      })),
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        options={options}
        series={series}
        type="line"
        height="370"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

const StoreVisitsCharts = ({ dataColors }) => {
  var chartDonutBasicColors = getChartColorsArray(dataColors);

  const series = [44];
  var options = {
    labels: ["Present"],
    chart: {
      height: 333,
      type: "donut",
    },
    legend: {
      position: "bottom",
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      dropShadow: {
        enabled: false,
      },
    },
    colors: chartDonutBasicColors,
  };
  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        options={options}
        series={series}
        type="donut"
        height="333"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export { RevenueCharts, StoreVisitsCharts };
