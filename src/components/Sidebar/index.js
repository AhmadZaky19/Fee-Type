import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { MdOutlineHome } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import "./index.css";

function Sidebar() {
  return (
    <Nav className="flex-column my-4 mx-0 sidebar">
      <Nav.Item>
        <MdOutlineHome size={30} className="side__icon" />
      </Nav.Item>
      <Nav.Item>
        <FaBriefcase size={24} className="side__icon" />
      </Nav.Item>
    </Nav>
  );
}

export default Sidebar;
