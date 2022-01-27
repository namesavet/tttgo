import React, { Component } from "react";
import { Navbar, Button, Container, Nav, NavDropdown } from "react-bootstrap";
import "../css/Navbar.css";
import head from "../img/head.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  render() {
    return (
      <Navbar bg="white" expand="lg" className="nav-shadow">
        <Container>
          <div className="Navbarpic">
            <Navbar.Brand href="/">
              <img src={head} alt="logo" className="NavbarpicSize"></img>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fontNavbar">
              <Nav.Link href="#Accommodation">ค้นหาที่พัก</Nav.Link>
              <Nav.Link href="#EVoucher">E-Voucher</Nav.Link>
              <Nav.Link href="Travelproduct">สินค้าท่องเที่ยว</Nav.Link>
              <Nav.Link href="#Privilege">สิทธิพิเศษ</Nav.Link>
              <Nav.Link href="#New">ข่าวประชาสัมพันธ์</Nav.Link>
            </Nav>
            <div style={{ marginLeft: "50px" }}>
              <Button
                variant="outline-success"
                style={{ marginRight: "18px", width: "90%", fontSize: "13px" }}
              >
                สำหรับผู้ประกอบการ
              </Button>{" "}
            </div>

            <Nav className="fontNavbar">
              <div className="row">
                <div className="col-1">
                  <i
                    style={{
                      color: "gray",
                      marginTop: "11px",
                      marginLeft: "10px",
                    }}
                    className="fas fa-language"
                  ></i>
                </div>
                <div className="col">
                  <NavDropdown title="TH/EN" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">TH</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </Nav>

            <Nav.Link className="infor-link" href="/information">
              <div className="row">
                <div className="col-1">
                  
                    <i className="fas fa-user-circle fa-2x" style={{ color: "grey" }}></i>
                
                </div>
                <div className="col">
                  <div style={{ fontSize: "13px", marginLeft: "20px" }}>
                    Nutchapisitd EA.
                  </div>
                  <div style={{ fontSize: "10px", marginLeft: "20px" }}>
                    2300 Point
                  </div>
                </div>
              </div>
              
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Navbar1;
