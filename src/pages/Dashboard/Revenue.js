import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { RevenueCharts } from "./DashboardEcommerceCharts";
import { useSelector, useDispatch } from "react-redux";
import { getRevenueChartsData } from "../../slices/thunks";
import { createSelector } from "reselect";

const Revenue = () => {
  const dispatch = useDispatch();

  const [chartData, setchartData] = useState([]);

  const selectDashboardData = createSelector(
    (state) => state.DashboardEcommerce,
    (revenueData) => revenueData.revenueData
  );
  // Inside your component
  const revenueData = useSelector(selectDashboardData);

  useEffect(() => {
    setchartData(revenueData);
  }, [revenueData]);



  useEffect(() => {
    dispatch(getRevenueChartsData("all"));
  }, [dispatch]);

  return (
    <React.Fragment>
      <Card>
      

        <CardHeader className="p-0 border-0 bg-light-subtle">
          <h3>Zones</h3>
      
        </CardHeader>

        <CardBody className="p-0 pb-2">
          <div className="w-100">
            <div dir="ltr">
              <RevenueCharts
                series={chartData}
                dataColors='[ "--vz-primary"]'
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Revenue;
