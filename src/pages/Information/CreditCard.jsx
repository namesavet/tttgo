import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./information.css";
import Visa from "../../img/visa.png";

export class Credit extends React.Component {
  render() {
    return (
      <div className="information-bg">
        <div className="content-bg">
          <div className="credit">
            <div className="head-credit">
              <Row>
                <Col
                  className="mt-4"
                  style={{ textAlign: "left", marginLeft: "5%" }}
                >
                  <p>บัญชีและรหัสผ่าน</p>
                </Col>
                <Col style={{ textAlign: "right", marginRight: "5%" }}>
                  <div className="addcard-btn ">
                    <Button
                      variant="primary"
                      type="submit"
                      className="submit-addcard"
                    >
                      + เพิ่มบัตรเครดิต
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="body-card mt-3 ">
              <Row className="mb-3">
                <Col>
                  <Row style={{ textAlign: "left", marginLeft: "5%" }}>
                    <Col>
                      <div className="reset-card-btn ">
                        <Button
                          variant="outline"
                          type="submit"
                          className="reset-card"
                        >
                          ค่าเริ่มต้น
                        </Button>
                      </div>
                    </Col>
                    <img className="visa-logo" src={Visa} alt="logo"></img>
                    <Col>
                      <div className="mt-3" style={{ textAlign: "left" }}>
                        <p>VISA</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col sm={3}>
                  <div className="mt-3" style={{ textAlign: "center" }}>
                    <p>**** **** **** 0600</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div
                    className="mt-3"
                    style={{ textAlign: "right", marginRight: "40%" }}
                  >
                    <p>ลบข้อมูล</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="body-card mt-3 ">
              <Row className="mb-3">
                <Col>
                  <Row style={{ textAlign: "left", marginLeft: "5%" }}>
                    <Col>
                      <div className="reset-card-btn ">
                        <Button
                          variant="outline"
                          type="submit"
                          className="reset-card"
                        >
                          ค่าเริ่มต้น
                        </Button>
                      </div>
                    </Col>
                    <img className="visa-logo" src={Visa} alt="logo"></img>
                    <Col>
                      <div className="mt-3" style={{ textAlign: "left" }}>
                        <p>VISA</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col sm={3}>
                  <div className="mt-3" style={{ textAlign: "center" }}>
                    <p>**** **** **** 0600</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div
                    className="mt-3"
                    style={{ textAlign: "right", marginRight: "40%" }}
                  >
                    <p>ลบข้อมูล</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
