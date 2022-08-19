import React, { useEffect, useRef } from "react";
import $ from "jquery";
import { Container, Row, Col, Breadcrumb, Button, Form, Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { FiDownload, FiPrinter } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import "./index.css";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <div type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

function FeeType() {
  $.DataTable = require("datatables.net");
  const tableRef = useRef();
  const tableName = "table1";
  const dataSet = [
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"]
  ];

  useEffect(() => {
    const table = $(`#${tableName}`).DataTable({
      data: dataSet,
      columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
        { title: "Start data" },
        { title: "Salary" }
      ],
      destroy: true,
      searching: false
    });
    return function () {
      table.destroy();
    };
  }, []);
  return (
    <div className="mx-4 my-4">
      <Breadcrumb>
        <Breadcrumb.Item className="bc">Master Data Management</Breadcrumb.Item>
        <Breadcrumb.Item active className="bc__Active">
          Fee Type
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>Fee Type</h2>
      <Accordion defaultActiveKey="1" className="accordion">
        <Card className="my-5 filter">
          <Card.Header className="card__header">
            <Row>
              <Col md={4} className="d-flex">
                <div className="input__form">
                  <Form.Control placeholder="Search..." />
                </div>
                <CustomToggle eventKey="0">
                  Advance Options <HiOutlineChevronDoubleDown />
                </CustomToggle>
              </Col>
              <Col md={{ span: 3, offset: 5 }} className="right__Section">
                <span className="logo__right">
                  <FiDownload />
                </span>
                <span className="logo__right">
                  <FiPrinter />
                </span>
                <Button className="button__create">
                  <AiOutlineFileAdd />
                  Create New
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Accordion.Collapse eventKey="0" className="accor__body">
            <Card.Body>
              <Form.Group className="accor__content">
                <Form.Label>Status</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Active</option>
                  <option>Inactive</option>
                </Form.Select>
              </Form.Group>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div className="table__section">
        <table className="display" width="100%" id={tableName} ref={tableRef}></table>
      </div>
    </div>
  );
}

export default FeeType;
