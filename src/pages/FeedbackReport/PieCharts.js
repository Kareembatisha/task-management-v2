import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";

const SimpleDonut = ({ dataColors }) => {
  var chartDonutBasicColors = getChartColorsArray(dataColors);
  const series = [41, 8, 15];
  var options = {
    chart: {
      height: 300,
      type: "donut",
    },
    labels: ['Exllent', 'Good', 'Needs Improvments'],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      dropShadow: {
        enabled: false,
      },
    },
    colors: chartDonutBasicColors,
    title: {
      text: "This chart displays the distribution of various responses given by customers in the selected time range.",
      align: "left",
      style: {
        fontWeight: 500,
      },
    },
  };
  return (
    <ReactApexChart
      dir="ltr"
      className="apex-charts"
      series={series}
      options={options}
      type="donut"
      height={400}
    />
  );
};

export { SimpleDonut };
