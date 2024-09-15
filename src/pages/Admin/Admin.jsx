import { Link, List } from "feather-icons-react/build/IconComponents";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";

function Admin() {
  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
    setmodal_list(!modal_list);
  }

  const [modal_delete, setmodal_delete] = useState(false);
  function tog_delete() {
    setmodal_delete(!modal_delete);
  }

  useEffect(() => {
    const attroptions = {
      valueNames: [
        "name",
        "born",
        {
          data: ["id"],
        },
        {
          attr: "src",
          name: "image",
        },
        {
          attr: "href",
          name: "link",
        },
        {
          attr: "data-timestamp",
          name: "timestamp",
        },
      ],
    };
    //    const attrList = new List("users", attroptions);
    //    attrList.add({
    //      name: "Leia",
    //      born: "1954",
    //     //  image: avatar5,
    //      id: 5,
    //      timestamp: "67893",
    //    });

    // Existing List

    const existOptionsList = {
      valueNames: ["contact-name", "contact-message"],
    };

    new List("contact-existing-list", existOptionsList);

    // Fuzzy Search list
    new List("fuzzysearch-list", {
      valueNames: ["name"],
    });

    // pagination list

    new List("pagination-list", {
      valueNames: ["pagi-list"],
      page: 3,
      pagination: true,
    });
  });
  return (
    <div className="page-content">
      {" "}
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h4 className="card-title mb-0">Add, Edit & Remove</h4>
            </CardHeader>

            <CardBody>
              <div className="listjs-table" id="customerList">
                <Row className="g-4 mb-3">
                  <Col className="col-sm-auto">
                    <div className="d-flex gap-1">
                      <Button
                        color="success"
                        className="add-btn"
                        onClick={() => tog_list()}
                        id="create-btn"
                      >
                        <i className="ri-add-line align-bottom me-1"></i> Add
                      </Button>
                      <Button
                        className="btn btn-soft-danger"
                        // onClick="deleteMultiple()"
                      >
                        <i className="ri-delete-bin-2-line"></i>
                      </Button>
                    </div>
                  </Col>
                  <Col className="col-sm">
                    <div className="d-flex justify-content-sm-end">
                      <div className="search-box ms-2">
                        <input
                          type="text"
                          className="form-control search"
                          placeholder="Search..."
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="table-responsive table-card mt-3 mb-1">
                  <table
                    className="table align-middle table-nowrap"
                    id="customerTable"
                  >
                    <thead className="table-light">
                      <tr>
                        <th scope="col" style={{ width: "50px" }}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkAll"
                              value="option"
                            />
                          </div>
                        </th>
                        <th className="sort" data-sort="customer_name">
                          Customer
                        </th>
                        <th className="sort" data-sort="email">
                          Email
                        </th>
                        <th className="sort" data-sort="phone">
                          Phone
                        </th>
                        <th className="sort" data-sort="date">
                          Joining Date
                        </th>
                        <th className="sort" data-sort="status">
                          Delivery Status
                        </th>
                        <th className="sort" data-sort="action">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="chk_child"
                              value="option1"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2101
                          </Link>
                        </td>
                        <td className="customer_name">Mary Cousar</td>
                        <td className="email">marycousar@velzon.com</td>
                        <td className="phone">580-464-4694</td>
                        <td className="date">06 Apr, 2021</td>
                        <td className="status">
                          <span className="badge bg-success-subtle text-success text-uppercase">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option2"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2102
                          </Link>
                        </td>
                        <td className="customer_name">Jeff Taylor</td>
                        <td className="email">jefftaylor@velzon.com</td>
                        <td className="phone">863-577-5537</td>
                        <td className="date">15 Feb, 2021</td>
                        <td className="status">
                          <span className="badge bg-success-subtle text-success text-uppercase">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option3"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2103
                          </Link>
                        </td>
                        <td className="customer_name">Robert McMahon</td>
                        <td className="email">robertmcmahon@velzon.com</td>
                        <td className="phone">786-253-9927</td>
                        <td className="date">12 Jan, 2021</td>
                        <td className="status">
                          <span className="badge bg-success-subtle text-success text-uppercase">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option4"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2104
                          </Link>
                        </td>
                        <td className="customer_name">Michael Morris</td>
                        <td className="email">michaelmorris@velzon.com</td>
                        <td className="phone">805-447-8398</td>
                        <td className="date">19 May, 2021</td>
                        <td className="status">
                          <span className="badge bg-danger-subtle text-danger text-uppercase">
                            Block
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option5"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2105
                          </Link>
                        </td>
                        <td className="customer_name">Kevin Dawson</td>
                        <td className="email">kevindawson@velzon.com</td>
                        <td className="phone">213-741-4294</td>
                        <td className="date">14 Apr, 2021</td>
                        <td className="status">
                          <span className="badge bg-success-subtle text-success text-uppercase">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option6"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2106
                          </Link>
                        </td>
                        <td className="customer_name">Carolyn Jones</td>
                        <td className="email">carolynjones@velzon.com</td>
                        <td className="phone">414-453-5725</td>
                        <td className="date">07 Jun, 2021</td>
                        <td className="status">
                          <span className="badge bg-success-subtle text-success text-uppercase">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option7"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2107
                          </Link>
                        </td>
                        <td className="customer_name">Glen Matney</td>
                        <td className="email">glenmatney@velzon.com</td>
                        <td className="phone">515-395-1069</td>
                        <td className="date">02 Nov, 2021</td>
                        <td className="status">
                          <span className="badge bg-success-subtle text-success text-uppercase">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option8"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2108
                          </Link>
                        </td>
                        <td className="customer_name">Charles Kubik</td>
                        <td className="email">charleskubik@velzon.com</td>
                        <td className="phone">231-480-8536</td>
                        <td className="date">25 Sep, 2021</td>
                        <td className="status">
                          <span className="badge bg-danger-subtle text-danger text-uppercase">
                            Block
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option9"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2109
                          </Link>
                        </td>
                        <td className="customer_name">Herbert Stokes</td>
                        <td className="email">herbertstokes@velzon.com</td>
                        <td className="phone">312-944-1448</td>
                        <td className="date">20 Jul, 2021</td>
                        <td className="status">
                          <span className="badge bg-danger-subtle text-danger text-uppercase">
                            Block
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option10"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2110
                          </Link>
                        </td>
                        <td className="customer_name">Timothy Smith</td>
                        <td className="email">timothysmith@velzon.com</td>
                        <td className="phone">973-277-6950</td>
                        <td className="date">13 Dec, 2021</td>
                        <td className="status">
                          <span className="badge bg-success-subtle text-success text-uppercase">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option11"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2111
                          </Link>
                        </td>
                        <td className="customer_name">Johnny Evans</td>
                        <td className="email">johnnyevans@velzon.com</td>
                        <td className="phone">407-645-1767</td>
                        <td className="date">01 Oct, 2021</td>
                        <td className="status">
                          <span className="badge bg-danger-subtle text-danger text-uppercase">
                            Block
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkAll"
                              value="option12"
                            />
                          </div>
                        </th>
                        <td className="id" style={{ display: "none" }}>
                          <Link to="#" className="fw-medium link-primary">
                            #VZ2112
                          </Link>
                        </td>
                        <td className="customer_name">Kevin Dawson</td>
                        <td className="email">kevindawson@velzon.com</td>
                        <td className="phone">213-741-4294</td>
                        <td className="date">14 Apr, 2021</td>
                        <td className="status">
                          <span className="badge bg-success-subtle text-success text-uppercase">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <div className="edit">
                              <button
                                className="btn btn-sm btn-success edit-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#showModal"
                              >
                                Edit
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-danger remove-item-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteRecordModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="noresult" style={{ display: "none" }}>
                    <div className="text-center">
                      <lord-icon
                        src="https://cdn.lordicon.com/msoeawqm.json"
                        trigger="loop"
                        colors="primary:#121331,secondary:#08a88a"
                        style={{ width: "75px", height: "75px" }}
                      ></lord-icon>
                      <h5 className="mt-2">Sorry! No Result Found</h5>
                      <p className="text-muted mb-0">
                        We've searched more than 150+ Orders We did not find any
                        orders for you search.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <div className="pagination-wrap hstack gap-2">
                    <Link className="page-item pagination-prev disabled" to="#">
                      Previous
                    </Link>
                    <ul className="pagination listjs-pagination mb-0"></ul>
                    <Link className="page-item pagination-next" to="#">
                      Next
                    </Link>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* Add Modal */}
      <AddModal modal_list={modal_list} tog_list={tog_list} />
      {/* Remove Modal */}
      <DeleteModal modal_delete={modal_delete} />
    </div>
  );
}

export default Admin;
