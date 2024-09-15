import React, { useState } from 'react';
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faLayerGroup, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { faBuilding, faSquareCheck } from '@fortawesome/free-regular-svg-icons'; // Import regular icons



const WebAppsDropdown = () => {
    const [isWebAppDropdown, setIsWebAppDropdown] = useState(false);
    const toggleWebAppDropdown = () => {
        setIsWebAppDropdown(!isWebAppDropdown);
    };

    return (
        <React.Fragment>
            <Dropdown isOpen={isWebAppDropdown} toggle={toggleWebAppDropdown} className="topbar-head-dropdown ms-1 header-item">
                <DropdownToggle tag="button" type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                    <i className='bx bx-category-alt fs-22'></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg p-0 dropdown-menu-end">
                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                        <Row className="align-items-center">
                            <Col>
                                <h6 className="m-0 fw-semibold fs-15"> Main Headlines </h6>
                            </Col>
                        </Row>
                    </div>

                    <div className="p-2">
                        <div className="row g-0">
                            <Col>
                                <Link className="dropdown-icon-item" to="/usertasks">
                                    <FontAwesomeIcon icon={faListCheck} />
                                    <span>Taskboard</span>
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="/buildingTable">
                                    <FontAwesomeIcon icon={faBuilding} />
                                    <span>Buildings</span>
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="/floorTable">
                                    <FontAwesomeIcon icon={faLayerGroup} />
                                    <span>Floor</span>
                                </Link>
                            </Col>
                        </div>

                        <div className="row g-0">
                            <Col>
                                <Link className="dropdown-icon-item" to="/zoneTable">
                                    <FontAwesomeIcon icon={faSquarePollHorizontal} />
                                    <span>Zones</span>
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="/incidentTable">
                                    <FontAwesomeIcon icon={faSquareCheck} />
                                    <span>Incidents</span>
                                </Link>
                            </Col>
                        </div>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default WebAppsDropdown;
