import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { topLocations } from "../../common/data/dashboardEcommerce";

const RecentOrders = () => {
  return (
    <React.Fragment>
      <Col>
        <Card>
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">
              Top 10 Locations By Usage
            </h4>
            {/* <div className="flex-shrink-0">
                            <button type="button" className="btn btn-soft-info btn-sm">
                                <i className="ri-file-list-3-line align-bottom"></i> Generate Report
                            </button>
                        </div> */}
          </CardHeader>

          <CardBody>
            <div className="table-responsive table-card">
              <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                <thead className="text-muted table-light">
                  <tr>
                    <th scope="col"> Name</th>
                    <th scope="col">Total People Count</th>
                  </tr>
                </thead>
                <tbody>
                  {(topLocations || []).map((item, key) => (
                    <tr key={key}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">{item.name}</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-2">
                            <div className="flex-grow-1">
                              {" "}
                              {item.TotalCount}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RecentOrders;
