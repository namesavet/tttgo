import { Form, Container, Tabs, Tab } from "react-bootstrap";
import "./ForgotPassword.css";
import React from "react";
import FooterLogin from "../../footer/FooterLogin";
import Navbar1 from "../../components/Navbar";
import { NavLink } from "react-router-dom";
import VerifyPhone from "../SelectOTP/ForgotPasswordOTP/ForgotbyPhone";
import VerifyEmail from "../SelectOTP/ForgotPasswordOTP/ForgotbyEmail";

export class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="ForgotPassword">
        <Navbar1 />
        <Container>
          <div className="inputForgotPassword">
            <div className="title-verify mt-4">
              <h>ยืนยันตัวตน</h>
            </div>
            <div className="select-verify mt-2">
              <h>เลือกวิธีการยืนยันตัวตน เพื่อทำรายการขอรหัสใหม่</h>
            </div>

            <div className="row mt-5 mb-2">
              <Tabs
                defaultActiveKey="telephoneNumberVerifyInput"
                id="uncontrolled-tab-example"
                className="tabSelect mb-3"
              >
                <Tab
                  className="phone-verify"
                  eventKey="telephoneNumberVerifyInput"
                  title="หมายเลขโทรศัพท์"
                >
                  <div className="row">
                    <Form>
                      <Form.Group
                        className="mb-3 mt-2"
                        style={{ textAlign: "left" }}
                      >
                        <Form.Label style={{ marginLeft: "10%" }}>
                          เบอร์มือถือ(10 หลัก)
                        </Form.Label>
                        <Form.Control
                          style={{ width: "80%", marginLeft: "10%" }}
                          type="text"
                          placeholder="088xxxxxxx"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="row mt-5">
                    <div className="col mt-5 mb-5">
                      <div className="row">
                        <NavLink to="/loginWithEmail">
                          <div
                            style={{
                              marginLeft: "20%",
                              textAlign: "left",
                              color: "#20B2AA",
                              textDecoration: "underline",
                            }}
                          >
                            <i>เข้าสู่ระบบ</i>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                    <div className="col mt-4 mb-4">
                      <div className="row" style={{ marginLeft: "10%" }}>
                        <VerifyPhone/>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab
                  className="email-verify"
                  eventKey="emailVerifyInput"
                  title="อีเมล"
                >
                  <div className="row">
                    <Form>
                      <Form.Group
                        className="mb-3 mt-2"
                        style={{ textAlign: "left" }}
                      >
                        <Form.Label
                          style={{
                            marginLeft: "10%",
                          }}
                        >
                          อีเมล
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="info@nilecon.co"
                          style={{ width: "80%", marginLeft: "10%" }}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="row mt-5">
                    <div className="col mt-5 mb-5">
                      <div className="row">
                        <NavLink to="/loginWithEmail">
                          <div
                            style={{
                              marginLeft: "20%",
                              textAlign: "left",
                              color: "#20B2AA",
                              textDecoration: "underline",
                            }}
                          >
                            <i>เข้าสู่ระบบ</i>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                    <div className="col mt-4 mb-4">
                      <div className="row" style={{ marginLeft: "10%" }}>
                        <VerifyEmail/>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>

            </div>
          </div>
        </Container>
        <FooterLogin />
      </div>
    );
  }
}
