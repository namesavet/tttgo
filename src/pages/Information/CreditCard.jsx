import React from "react";
import { Row, Form, Col, Button, Nav, NavLink, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./information.css";

export class Credit extends React.Component {
  render() {
    return (
      <div className="information-bg">
        <div className="content-bg">
          <div className="body-info ">
            <div className="footer-body-info">
              <div className="footer-title">
                <Row>
                  <Col
                    className="mt-3"
                    style={{ textAlign: "left", marginLeft: "5%" }}
                  >
                    <p>บัญชีและรหัสผ่าน</p>
                  </Col>
                  <Col
                    className="mt-3"
                    style={{ textAlign: "right", marginRight: "5%" }}
                  >
                   <div className="card-btn ">
                    <Button
                      variant="primary"
                      type="submit"
                      className="submit-card"
                    >
                      + เพิ่มบัตรเครดิต
                    </Button>
                  </div>
                  </Col>
                </Row>
              </div>

              <div className="changePass mt-3 mb-3">
                <Form>
                  <Row>
                    <Col>
                      <Row style={{ marginLeft: "5%" }}>
                        <Form.Group className="mb-3" controlId="email">
                          <Form.Label>อีเมล</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="อีเมล"
                            style={{ width: "80%" }}
                          />
                        </Form.Group>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>รหัสผ่าน</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="รหัสผ่าน"
                            style={{ width: "80%" }}
                          />
                        </Form.Group>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
