import React from "react";
import {
  Row,
  Tab,
  Tabs,
  Col,
  Container,
  Nav,
  NavLink,
  Button,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import hotel1 from "../../img/hotel1.jpg";
import flash2 from "../../img/flash2.jpg";
import product from "../../img/product/product1.png";
import "./information.css";

export class Reservation extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-titel-booking">
          <div className="titel-booking">
            การจองที่ทำผ่านของ Thaiteawthaigo.com สามารถดูได้ที่นี่
            และสามารถดูรายละเอียดการจองได้บนแอป Thaiteawthai
          </div>
        </div>

        <div className="content-booking">
          <Tabs
            defaultActiveKey="booking-recent"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 booking-tab"
          >
            <Tab eventKey="booking-recent" title="การจองล่าสุด">
              <Bookingrecent />
            </Tab>
            <Tab eventKey="booking-successful" title="รายการจองสำเร็จ">
              <Bookingsuccessful/>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
export class Bookingrecent extends React.Component {
  render() {
    return (
      <div>
        <Form className="booking-recent-form">
          <Row className="align-items-center">
            <Col sm={3} className="my-1">
              <Form.Select className="booking-recent-input" size="sm">
                <option>หมายเลขการจอง</option>
              </Form.Select>
            </Col>
            <Col sm={4} className="my-1">
              <Form.Control
                className="booking-recent-input"
                size="sm"
                id="inlineFormInputName"
                placeholder="โปรดระบุหมายเลขการจอง"
              />
            </Col>
            <Col xs="auto" className="my-1">
              <Button type="submit" className="search-booking">
                ค้นหา
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="reservation-recent">
          <div className="row">
            <li className="reservation-number">
              หมายเลขการจอง: <b>1471865384940</b>
            </li>
          </div>
          <div>
            <div className="reservation-recent-detail">
              <Row style={{ marginBottom: "15px" }}>
                <Col sm={8}>
                  <div className="reservation-recent-title">
                    Family Studio at Twin Oaks Place
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    {""} กรุงเทพมหานคร,สุขุมวิท
                  </div>
                  <div style={{ fontSize: "small" }}>
                    <b>Superior,Guest room,2 Double,Resot view</b>
                  </div>
                </Col>
                <Col sm={4} className="reservation-recent-booking">
                  <div>
                    ราคารวม (ต่อเดือน){" "}
                    <b className="reservation-recent-price">1,800 บาท</b>
                  </div>

                  <div>
                    ผู้เข้าพัก:{" "}
                    <b style={{ color: "gray" }}>ผู้ใหญ่ 2 ท่าน เด็ก 1 ท่าน</b>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className="checkin-out">
              <Col sm={4}>
                <div>เช็คอิน:</div>
                <div className="day-checkin-out">13/05/2021 เวลา 11.30 น.</div>
              </Col>
              <Col sm={4}>
                <div>เช็คเอาท์:</div>
                <div className="day-checkin-out">14/05/2021 เวลา 12.30 น.</div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="reservation-recent">
          <div className="row">
            <li className="reservation-number">
              หมายเลขการจอง: <b>1471865384940</b>
            </li>
          </div>
          <div>
            <div className="reservation-recent-detail">
              <Row style={{ marginBottom: "15px" }}>
                <Col sm={8}>
                  <div className="reservation-recent-title">
                    Family Studio at Twin Oaks Place
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    {""} กรุงเทพมหานคร,สุขุมวิท
                  </div>
                  <div style={{ fontSize: "small" }}>
                    <b>Superior,Guest room,2 Double,Resot view</b>
                  </div>
                </Col>
                <Col sm={4} className="reservation-recent-booking">
                  <div>
                    ราคารวม (ต่อเดือน){" "}
                    <b className="reservation-recent-price">1,800 บาท</b>
                  </div>

                  <div>
                    ผู้เข้าพัก:{" "}
                    <b style={{ color: "gray" }}>ผู้ใหญ่ 2 ท่าน เด็ก 1 ท่าน</b>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className="checkin-out">
              <Col sm={4}>
                <div>เช็คอิน:</div>
                <div className="day-checkin-out">13/05/2021 เวลา 11.30 น.</div>
              </Col>
              <Col sm={4}>
                <div>เช็คเอาท์:</div>
                <div className="day-checkin-out">14/05/2021 เวลา 12.30 น.</div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="reservation-recent">
          <div className="row">
            <li className="reservation-number">
              หมายเลขการจอง: <b>1471865384940</b>
            </li>
          </div>
          <div>
            <div className="reservation-recent-detail">
              <Row style={{ marginBottom: "15px" }}>
                <Col sm={8}>
                  <div className="reservation-recent-title">
                    Family Studio at Twin Oaks Place
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    {""} กรุงเทพมหานคร,สุขุมวิท
                  </div>
                  <div style={{ fontSize: "small" }}>
                    <b>Superior,Guest room,2 Double,Resot view</b>
                  </div>
                </Col>
                <Col sm={4} className="reservation-recent-booking">
                  <div>
                    ราคารวม (ต่อเดือน){" "}
                    <b className="reservation-recent-price">1,800 บาท</b>
                  </div>

                  <div>
                    ผู้เข้าพัก:{" "}
                    <b style={{ color: "gray" }}>ผู้ใหญ่ 2 ท่าน เด็ก 1 ท่าน</b>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className="checkin-out">
              <Col sm={4}>
                <div>เช็คอิน:</div>
                <div className="day-checkin-out">13/05/2021 เวลา 11.30 น.</div>
              </Col>
              <Col sm={4}>
                <div>เช็คเอาท์:</div>
                <div className="day-checkin-out">14/05/2021 เวลา 12.30 น.</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export class Bookingsuccessful extends React.Component {
  render() {
    return (
      <div>
        <Form className="booking-recent-form">
          <Row className="align-items-center">
            <Col sm={3} className="my-1">
              <Form.Select className="booking-recent-input" size="sm">
                <option>หมายเลขการจอง</option>
              </Form.Select>
            </Col>
            <Col sm={4} className="my-1">
              <Form.Control
                className="booking-recent-input"
                size="sm"
                id="inlineFormInputName"
                placeholder="โปรดระบุหมายเลขการจอง"
              />
            </Col>
            <Col xs="auto" className="my-1">
              <Button type="submit" className="search-booking">
                ค้นหา
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="reservation-recent">
          <div className="row">
            <li className="reservation-number">
              หมายเลขการจอง: <b>1471865384940</b>
            </li>
          </div>
          <div>
            <div className="reservation-recent-detail">
              <Row style={{ marginBottom: "15px" }}>
                <Col sm={8}>
                  <div className="reservation-recent-title">
                    Family Studio at Twin Oaks Place
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    {""} กรุงเทพมหานคร,สุขุมวิท
                  </div>
                  <div style={{ fontSize: "small" }}>
                    <b>Superior,Guest room,2 Double,Resot view</b>
                  </div>
                </Col>
                <Col sm={4} className="reservation-recent-booking">
                  <div>
                    ราคารวม (ต่อเดือน){" "}
                    <b className="reservation-recent-price">1,800 บาท</b>
                  </div>

                  <div>
                    ผู้เข้าพัก:{" "}
                    <b style={{ color: "gray" }}>ผู้ใหญ่ 2 ท่าน เด็ก 1 ท่าน</b>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className="checkin-out">
              <Col sm={4}>
                <div>เช็คอิน:</div>
                <div className="day-checkin-out">13/05/2021 เวลา 11.30 น.</div>
              </Col>
              <Col sm={4}>
                <div>เช็คเอาท์:</div>
                <div className="day-checkin-out">14/05/2021 เวลา 12.30 น.</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
