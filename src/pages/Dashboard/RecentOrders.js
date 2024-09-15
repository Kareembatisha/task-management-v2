import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { recentOrders } from "../../common/data";

const RecentOrders = () => {
  return (
    <React.Fragment>
      <Col xl={8}>
        <Card>
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">Tasks</h4>
            {/* <div className="flex-shrink-0">
                            <button type="button" className="btn btn-soft-info btn-sm">
                                <i className="ri-file-list-3-line align-bottom"></i> Generate Report
                            </button>
                        </div> */}
          </CardHeader>

          <CardBody>
            <div className="table-responsive table-card">
              <table
                style={{ textAlign: "center" }}
                className="table table-borderless table-centered align-middle table-nowrap mb-0"
              >
                <thead className="text-muted table-light">
                  <tr>
                    <th scope="col"> ID</th>
                    <th scope="col">Task Name</th>
                    <th scope="col">Assign to</th>
                    <th scope="col">Date</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Zone</th>
                    <th scope="col">Attachment</th>
                    <th scope="col">Status</th>
                    <th scope="col">time</th>
                  </tr>
                </thead>
                <tbody>
                  {(recentOrders || []).map((item, key) => (
                    <tr key={key}>
                      <td>
                        <Link
                          to="/apps-ecommerce-order-details"
                          className="fw-medium link-primary"
                        >
                          {item.orderId}
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">{item.name}</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1"> {item.product}</div>
                        </div>
                      </td>

                      <td>{item.vendor}</td>
                      <td>
                        <span
                          className={`badge bg-${item.statusClass}-subtle text-${item.statusClass}`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <h5 className="fs-14 fw-medium mb-0">{item.rating}</h5>
                      </td>
                      <td>--</td>
                      <td>{item.status}</td>
                      <td>
                        <h5 className="fs-14 fw-medium mb-0">
                          <span className="text-muted fs-13 ms-1">
                            {item.time}
                          </span>
                        </h5>
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
