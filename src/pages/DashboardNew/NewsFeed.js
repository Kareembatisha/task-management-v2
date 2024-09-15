import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { newsFeed } from "../../common/data";

const NewsFeed = ({ data,name }) => {
  return (
    <React.Fragment>
      <Col>
        <Card>
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">{name?name:"Recent Activities"}</h4>
            <div>
              <button type="button" className="btn btn-soft-primary btn-sm">
                View all
              </button>
            </div>
          </CardHeader>

          <CardBody>
            {data ? (
              (newsFeed || []).map((item, key) => (
                <div
                  className={
                    item.id === 1 ? "d-flex align-middle" : "d-flex mt-4"
                  }
                  key={key}
                >
                  <div className="flex-shrink-0">.</div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="mb-1 lh-base">
                      <Link to="#" className="text-reset">
                        {item.caption}
                      </Link>
                    </h6>
                    <p className="text-muted fs-13 mb-0">
                      {item.date}{" "}
                      <i className="mdi mdi-circle-medium align-middle mx-1"></i>
                      {item.time}
                    </p>
                  </div>
                </div>
              ))
            ) :(
                <div className="text-center py-4">
                  <i className="mdi mdi-alert-circle-outline text-muted fs-2"></i>
                  <h3 className="mt-3">No Data</h3>
                </div>
              )}

       
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default NewsFeed;
