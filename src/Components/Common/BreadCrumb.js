import React, { useState } from "react";
import { Col, Row, Button, Container } from "reactstrap";
import { useMediaQuery } from "@mui/material";

const BreadCrumb = ({ title, pageTitle, filter }) => {
  const [activeFilter, setActiveFilter] = useState("today");

  // Use media query to determine if the screen is small
  const isMobileOrTablet = useMediaQuery("(max-width: 768px)");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // Add logic to handle filter change here
    console.log(`Filter selected: ${filter}`);
  };

  return (
    <Container fluid>
      <Row className="align-items-center" style={{ marginBottom: "20px" }}>
        <Col xs={12} md={12} xl={6}>
          <h4>{title}</h4>
        </Col>
        {filter && (
          <Col xs={12} md={12} xl={6}>
            {isMobileOrTablet ? (
              <div style={{ width: "100%" }}>
                <Button
                  color="secondary"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    fontSize: "11px",
                    marginBottom: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={(e) => {
                    const menu = e.currentTarget.nextElementSibling;
                    menu.style.display =
                      menu.style.display === "block" ? "none" : "block";
                  }}
                >
                  Filter Options
                  <i className="fa fa-caret-down"></i>
                </Button>
                <div
                  style={{
                    display: "none",
                    width: "100%",
                    backgroundColor: "#fff",
                    boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                    zIndex: 1,
                  }}
                >
                  {[
                    "today",
                    "current-week",
                    "previous-week",
                    "current-month",
                    "previous-month",
                    "custom",
                  ].map((filterOption) => (
                    <Button
                      key={filterOption}
                      color={
                        activeFilter === filterOption ? "primary" : "secondary"
                      }
                      onClick={() => handleFilterClick(filterOption)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        fontSize: "11px",
                        marginBottom: "1px",
                      }}
                    >
                      {filterOption.replace(/-/g, " ").toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                {[
                  "today",
                  "current-week",
                  "previous-week",
                  "current-month",
                  "previous-month",
                  "custom",
                ].map((filterOption) => (
                  <Button
                    key={filterOption}
                    color={
                      activeFilter === filterOption ? "primary" : "secondary"
                    }
                    onClick={() => handleFilterClick(filterOption)}
                    style={{
                      flex: "1 1 auto",
                      fontSize: "11px",
                      minWidth: "0",
                    }}
                  >
                    {filterOption.replace(/-/g, " ").toUpperCase()}
                  </Button>
                ))}
              </div>
            )}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default BreadCrumb;
