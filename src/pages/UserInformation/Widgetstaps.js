import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { userInformation } from "../../common/data/dashboardEcommerce";
import { Typography } from "@mui/material";

const Widgetstaps = () => {
  return (
    <React.Fragment>
      {userInformation.map((item, key) => (
        <Col xl={2} md={6} key={key}>
          <Card className={"card-animate bg-" + item.cardColor}>
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 overflow-hidden">
                  <p className="text-uppercase fw-bold text-white text-truncate mb-0">
                    {item.label}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  {/* <h5 className={"fs-14 mb-0 text-" + item.badgeClass}>
                                        {item.badge ? <i className={"fs-13 align-middle " + item.badge}></i> : null} {item.percentage} %
                                    </h5> */}
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div>
                  <h4 className="fs-22 fw-bold ff-secondary mb-4 text-white">
                    <span className="counter-value" data-target="">
                      <CountUp
                        start={0}
                        prefix={item.prefix}
                        suffix={item.suffix}
                        separator={item.separator}
                        end={item.counter}
                        decimals={item.decimals}
                        duration={4}
                      />
                    </span>
                  </h4>
                </div>
                  <div style={{color:"#fff"}}>
                    <Typography variant="body1">0  Scheduled</Typography>
                    <Typography variant="body1">2  Incedents</Typography>
                  </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default Widgetstaps;
