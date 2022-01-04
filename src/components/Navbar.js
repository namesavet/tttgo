import React, { Component } from "react"
import { Navbar, Button, Container, Nav, NavDropdown, } from 'react-bootstrap'
import '../css/Navbar.css'
import head from '../img/head.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    render() {
        return (

            <Navbar bg="light" expand="lg">
                <Container>

                    <div className="Navbarpic" >
                        <Navbar.Brand href="#home"><img src={head} alt="logo" className="NavbarpicSize" ></img></Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fontNavbar">

                            <Nav.Link href="#Accommodation">ค้นหาที่พัก</Nav.Link>
                            <Nav.Link href="#EVoucher">E-Voucher</Nav.Link>
                            <Nav.Link href="#Travelgoods">สินค้าท่องเที่ยว</Nav.Link>
                            <Nav.Link href="#Privilege">สิทธิพิเศษ</Nav.Link>
                            <Nav.Link href="#New">ข่าวประชาสัมพันธ์</Nav.Link>


                        </Nav>
                        <div style={{ marginLeft: '50px' }} >
                            <Button variant="outline-success" style={{ marginRight: '18px', width: '90%', fontSize: '13px' }}>สำหรับผู้ประกอบการ</Button>{' '}
                        </div>

                        <a href="_blank" ref="noopender noreferrer" style={{ color: "grey" }}><i class="fas fa-language"></i></a>

                        <Nav className="fontNavbar">
                            <NavDropdown title="TH/EN" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">TH</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <div style={{ marginLeft: '10px' }}>
                            <a href="_blank" ref="noopender noreferrer" style={{ color: "grey" }}><i class="fas fa-user-circle fa-2x"></i></a>
                        </div>

                        <div style={{ marginLeft: '20px' }}>
                            <div className="row" style={{ fontSize: '13px' }}>
                                Nutchapisitd EA.
                            </div>
                            <div className="row" style={{ fontSize: '10px' }}>
                                2300 Point
                            </div>
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        )
    }
}
export default Navbar1;