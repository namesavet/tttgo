import React from "react";
import { Row, Tab, Col, Container, Nav, NavLink, TabPane } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./information.css";
import { Favorites } from "./Favorites";
import { Address } from "./Address";
import { Personal } from "./PersonalInfo";

export class Information extends React.Component {
  render() {
    return (
      <div className="information-bg">
        <Container style={{ paddingTop: "30px", paddingBottom: "30px" }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="information">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column tab-infor">
                  <div className="content-bg">
                    <div className="tab-menu">
                      <div className="tab-menu-titel"> บัญชีของฉัน</div>
                      <Nav.Item>
                        <Nav.Link eventKey="PersonalInformation">
                          ข้อมูลส่วนตัว
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="card">บัตรของฉัน</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="history">
                          ประวัติรายการซื้อ
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="address">ตั้งค่าที่อยู่</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="favorites">รายการโปรด</Nav.Link>
                      </Nav.Item>
                    </div>
                  </div>
                  <div className="content-bg" style={{ marginTop: "20px" }}>
                    <div className="tab-menu">
                      <div className="tab-menu-titel"> การจองของฉัน</div>
                      <Nav.Item>
                        <Nav.Link eventKey="bookings">จองทั้งหมด</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="hotel">โรงแรม+ที่พัก</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="voucher">E-Voucher</Nav.Link>
                      </Nav.Item>
                    </div>
                  </div>

                  <div className="content-bg" style={{ marginTop: "20px" }}>
                    <div className="tab-menu">
                      <div className="tab-menu-titel"> ข้อมูล</div>
                      <Nav.Item>
                        <Nav.Link eventKey="about">
                          เกี่ยวกับ Thaiteawthaigo.com
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="requirements">
                          ข้อกำหนดและเงื่อนไข
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                  </div>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content className="content-bg">
                  <Tab.Pane eventKey="first">wda</Tab.Pane>
                  <Tab.Pane eventKey="favorites">
                    <Favorites />
                  </Tab.Pane>
                  <Tab.Pane eventKey="address">
                    <Address />
                  </Tab.Pane>
                  <Tab.Pane eventKey="PersonalInformation">
                    <Personal/>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
