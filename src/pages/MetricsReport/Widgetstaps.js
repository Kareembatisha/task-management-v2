import React from "react";
import CountUp from "react-countup";
import { Card, CardBody, Col } from "reactstrap";
import { metricsReport } from "../../common/data/dashboardEcommerce";

const Widgetstaps = () => {
  return (
    <React.Fragment>
      {metricsReport.map((item, key) => (
        <Col xl={3} md={6} key={key}>
          <Card className={"card-animate bg-" + item.cardColor}>
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 overflow-hidden">
                  <p className="text-uppercase fw-bold text-white text-truncate mb-0">
                    {item.label}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  {/* Optional badge code */}
                </div>
              </div>
              <div className="d-flex align-items-end justify-content-between mt-4">
                <div>
                  <h4 className="fs-22 fw-bold ff-secondary mb-4 text-white">
                    <span className="counter-value" data-target="">
                      {key === 2 ? (
                        // Third card: Render string value
                        <span>{item.day}</span>
                      ) : (
                        // Other cards: Render CountUp
                        <CountUp
                          start={0}
                          prefix={item.prefix}
                          suffix={item.suffix}
                          separator={item.separator}
                          end={item.counter}
                          decimals={item.decimals}
                          duration={4}
                        />
                      )}
                    </span>
                  </h4>
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
