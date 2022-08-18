import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, NavDropdown, Image, Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import {
  BsFillQuestionCircleFill,
  BsBell,
  BsFillPersonFill,
  BsUnlockFill,
  BsBoxArrowRight
} from "react-icons/bs";
import user from "../../assets/users.jpg";
import "./index.css";

function Navigation() {
  const UserMenu = <Image src={user} roundedCircle className="user__image" />;
  return (
    <Navbar className="nav">
      <Navbar.Brand>
        <img src={logo} width="160" height="50" className="d-inline-block align-top" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <BsFillQuestionCircleFill style={{ width: "50", height: "20" }} />
        <BsBell style={{ width: "50", height: "20" }} />
        <NavDropdown align={"end"} title={UserMenu} className="dropdown-toggle">
          <NavDropdown.Item>
            <Row>
              <Col md={4}>
                <Image src={user} roundedCircle className="user__image--dropdown" />
              </Col>
              <Col md={8}>
                <h6 className="user__name">Ahmad Zaky</h6>
                <p className="user__role">Administrator</p>
              </Col>
            </Row>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <BsFillPersonFill size={22} style={{ marginRight: "10" }} />
            My Profile
          </NavDropdown.Item>
          <NavDropdown.Item>
            <BsUnlockFill size={22} style={{ marginRight: "10" }} />
            Change Password
          </NavDropdown.Item>
          <NavDropdown.Item>
            <BsBoxArrowRight size={22} style={{ marginRight: "10" }} />
            Sign Out
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
