import React from "react";
import Slider from "react-slick";
import { Row, Tab, Col, Container, Nav, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import thai from "../../img/thai.jpg";
import north from "../../img/north.jpg";
import "./information.css";

export class Information extends React.Component {
  render() {
    return (
      <div className="information-bg">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3} className="content-bg">
                <Nav variant="pills" className="flex-column">
                  บัญชีของฉัน
                  <Nav.Item>
                    <Nav.Link eventKey="first">ข้อมูลส่วนตัว</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">บัตรของฉัน</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second1">ประวัติรายการซื้อ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second2">ตั้งค่าที่อยู่</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="favorites">รายการโปรด</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content className="content-bg">
                  <Tab.Pane eventKey="first">wda</Tab.Pane>
                  <Tab.Pane eventKey="favorites">awda</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
