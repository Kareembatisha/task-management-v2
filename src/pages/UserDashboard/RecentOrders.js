import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { recentOrders } from "../../common/data";

const RecentOrders = ({ name, coloums }) => {
  return (
    <React.Fragment>
      <Col>
        <Card>
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">{name}</h4>
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
                    {coloums.map((i) => {
                      return( 
                      <th key={i} scope="col"> {i}</th>)

                    })}
                  
                  </tr>
                </thead>
                <tbody>
                  {(recentOrders || []).map((item, key) => (
                    <tr key={key}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-2">
                            <img
                              src={item.img}
                              alt=""
                              className="avatar-xs rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1">{item.name}</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1"> {item.product}</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-success">${item.amount}</span>
                      </td>
                      <td>{item.status}</td>
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
