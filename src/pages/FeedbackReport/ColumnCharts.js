import React from 'react';
import ReactApexChart from "react-apexcharts";

import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";



const StackedColumn = ({ dataColors }) => {
    var chartColumnStackedColors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "Exllent",
            data: [44, 55, 41, 67, 22, 43],
        },
        {
            name: "Good",
            data: [13, 23, 20, 8, 13, 27],
        },
        {
            name: "Needs Improvement",
            data: [11, 17, 15, 15, 21, 14],
        },
        // {
        //     name: "PRODUCT D",
        //     data: [21, 7, 25, 13, 22, 8],
        // },
    ];

    const options = {
        chart: {
            stacked: !0,
            toolbar: {
                show: !1,
            },
            zoom: {
                enabled: !0,
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: "bottom",
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: !1,
                borderRadius: 10,
            },
        },
        xaxis: {
            type: "datetime",
            categories: [
                "01/01/2011 GMT",
                "01/02/2011 GMT",
                "01/03/2011 GMT",
                "01/04/2011 GMT",
                "01/05/2011 GMT",
                "01/06/2011 GMT",
            ],
        },
        legend: {
            position: "right",
            offsetY: 40,
        },
        fill: {
            opacity: 1,
        },
        colors: chartColumnStackedColors,
        title: {
            text: 'This chart displays the distribution of various responses given by customers in the selected time range.',
            align: 'left',
            style: {
                fontWeight: 500,
            },
        },
    };
    return <ReactApexChart dir="ltr" className="apex-charts" series={series} options={options} type="bar" height={350} />;
};



export {
 
    StackedColumn,
    
};