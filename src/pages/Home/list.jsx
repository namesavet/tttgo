import React from "react";
import {
  Tabs,
  Tab,
  Row,
  Col,
  Button,
  Container,
  NavLink,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Specialdeal } from "./Specialdeal";
import { Attractions } from "./Attractions";
import { Specialprice } from "./Specialprice";
import { Hotel } from "./hotel";
import { Category } from "./Category";
import ads1 from "../../img/ads1.png";
import ads380 from "../../img/ads380.jpg";

import first from "../../img/first.jpg";
import second from "../../img/second.jpg";
import "./home.css";

export class Home extends React.Component {
  state = {
    display: true,
    width: 600,
  };
  render() {
    return (
      <div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={first} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={second} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="layoutmenubtn">
          <Container>
            <div className="row tabbtnmenu " style={{ listStyle: "none" }}>
              <div
                className="col-sm-12 col-md-4 col-lg-4"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                <Button
                  type="button"
                  className="row menubtn"
                  style={{ width: "200px" }}
                >
                  <div className="row">
                    <div className="col-3" style={{ paddingTop: "4px" }}>
                      <i
                        className="fas fa-hotel"
                        style={{
                          color: "rgba(8, 214, 8, 0.836)",
                          fontSize: "20px",
                        }}
                      ></i>
                    </div>
                    <div className="col-9" style={{ paddingTop: "2px" }}>
                      โรงแรม+ที่พัก
                    </div>
                  </div>
                </Button>
              </div>
              <div
                className="col-sm-12 col-md-4 col-lg-4"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                <Button
                  type="button"
                  className="row menubtn"
                  style={{ width: "200px" }}
                >
                  <div className="row">
                    <div className="col-3" style={{ paddingTop: "4px" }}>
                      <i
                        className="far fa-credit-card"
                        style={{
                          color: "rgba(8, 214, 8, 0.836)",
                          fontSize: "20px",
                        }}
                      ></i>
                    </div>
                    <div className="col-9" style={{ paddingTop: "2px" }}>
                      E-Voucher
                    </div>
                  </div>
                </Button>
              </div>
              <div
                className="col-sm-12 col-md-4 col-lg-4"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                <Button
                  type="button"
                  className="row menubtn"
                  style={{ width: "200px" }}
                >
                  <div className="row">
                    <div className="col-3" style={{ paddingTop: "4px" }}>
                      <i
                        className="fas fa-shopping-bag"
                        style={{
                          color: "rgba(8, 214, 8, 0.836)",
                          fontSize: "20px",
                        }}
                      ></i>
                    </div>
                    <div className="col-9" style={{ paddingTop: "2px" }}>
                      สินค้า
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="categorymenu">
            <h2>หมวดหมู่สินค้า</h2>
            <Category />
          </div>

          <div className="todaymenu">
            <Row>
              <Col>
                <h3> ดีลพิเศษประจำวัน</h3>
              </Col>
              <Col>
                <NavLink href="Flashsale" className="btn-seeall">
                  ดูทั้งหมด
                </NavLink>
              </Col>
            </Row>
            <Specialdeal />
          </div>

          <div className="ads">
            <Container>
              <Row>
                <Col>
                  {" "}
                  <img className="ads175" src={ads1} alt="" />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="todaymenu">
            <Row>
              <Col>
                <h3> สินค้าราคาพิเศษ</h3>
              </Col>
              <Col>
                <NavLink href="" className="btn-seeall">
                  ดูทั้งหมด
                </NavLink>
              </Col>
            </Row>
            <Specialprice />
          </div>

          <div className="hotelmenu">
            <Row>
              <Col>
                <h3> โรงแรม+ที่พัก สำหรับคุณ</h3>
              </Col>
              <Col>
                <NavLink href="" className="btn-seeall">
                  ดูทั้งหมด
                </NavLink>
              </Col>
            </Row>
            <Hotel />
          </div>

          <div className="ads">
            <Container>
              <Row>
                <Col>
                  {" "}
                  <img className="ads380" src={ads380} alt="" />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="today">
            <Row>
              <Col>
                <h3>E-voucher</h3>
              </Col>
              <Col>
                <NavLink href="" className="btn-seeall">
                  ดูทั้งหมด
                </NavLink>
              </Col>
            </Row>
            <Specialdeal />
          </div>

          <div className="thailandmenu">
            <Row>
              <Col>
                <h3>สถานที่ท่องเที่ยวยอด</h3>
              </Col>
              <Col>
                <NavLink href="Province" className="btn-seeall">
                  ดูทั้งหมด
                </NavLink>
              </Col>
            </Row>

            <Tabs
              defaultActiveKey="central"
              id="uncontrolled-tab-example"
              className="mb-4 tab-procinve"
            >
              <Tab eventKey="central" title="ภาคกลาง">
                <Attractions region={`central`} />
              </Tab>

              <Tab eventKey="north" title="ภาคเหนือ">
                <Attractions region={`north`} />
              </Tab>
              <Tab eventKey="northeast" title="ภาคตะวันออกเฉียง">
                <Attractions region={`northeast`} />
              </Tab>
              <Tab eventKey="west" title="ภาคตะวันตก">
                <Attractions region={`western`} />
              </Tab>
              <Tab eventKey="east" title="ภาคตะวันออก">
                <Attractions region={`eastern`} />
              </Tab>
              <Tab eventKey="south" title="ภาคใต้">
                <Attractions region={`south`} />
              </Tab>
            </Tabs>
          </div>

          <Container>
            <Row>
              <Col className="textregister">
                <h1>ลงทะเบียนร้านค้าออนไลน์ของคุณได้เลยฟรี</h1>
                <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                  เรามีร้านค้าท่องเที่ยวไทย มากกว่า 30 ร้านค้า สินค้าและบริการ
                  มากกว่า 300 รายการ ที่ส่งตรงจากทั่ว ประเทศไทย
                  ธุรกิจการจัดงานแสดงสินค้าด้านการท่องเที่ยวภายในประเทศไทย
                  ที่มีประสบการณ์ ยาวนานกว่า 20 ปี
                  สนใจเปิดร้านค้าของคุณได้ที่นี่ สมัครเลยวันนี้ฟรี
                </p>
                <Button variant="success" className="lg btn-start">
                  เริ่มต้นสมัคร
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}
