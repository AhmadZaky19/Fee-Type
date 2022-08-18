import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Navigation from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import FeeType from "./pages/FeeType";

function App() {
  return (
    <div className="App">
      <Row>
        <Col md={1} lg={1} className="nav__section--left">
          <Sidebar />
        </Col>
        <Col md={11} lg={11} className="nav__section">
          <Navigation />
          {/* <FeeType /> */}
        </Col>
      </Row>
    </div>
  );
}

export default App;
