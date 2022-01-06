import { Button, Form } from "react-bootstrap";
import "./Register.css";
import React from "react";
import FooterLogin from "../../footer/FooterLogin";
import Navbar1 from "../../components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
class Register extends React.Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <div className="Register">
          <div className="inputRegister">
            <div className="row mt-5">
              <h1
                style={{
                  color: "black",
                  textAlign: "left",
                  marginLeft: "9%",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                ลงทะเบียนสมัครสมาชิก
              </h1>
            </div>

            <form>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <Form.Group>
                      <Form.Label
                        htmlFor="inputPassword5"
                        style={{ marginRight: "55%" }}
                      >
                        ชื่อ
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="firstname"
                        placeholder="กรอกชื่อผู้ใช้งาน"
                        style={{ marginLeft: "20%", width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group>
                      <Form.Label
                        htmlFor="inputPassword5"
                        style={{ textAlign: "left", whiteSpace: "nowrap",marginRight: "30%" }}
                      >
                        หมายเลขโทรศัพท์
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="telephone"
                        placeholder="กรอกหมายเลขโทรศัพท์ผู้ใช้งาน"
                        style={{ marginLeft: "20%", width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group>
                      <Form.Label
                        htmlFor="inputPassword5"
                        style={{ marginRight: "50%" }}
                      >
                        รหัสผ่าน
                      </Form.Label>
                      <Form.Control
                        type="password"
                        id="password"
                        style={{ marginLeft: "20%", width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <Form.Group>
                      <Form.Label
                        htmlFor="inputPassword5"
                        style={{ marginRight: "70%" }}
                      >
                        นามสกุล
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="lastName"
                        placeholder="กรอกนามสกุล"
                        style={{  width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group>
                      <Form.Label
                        htmlFor="inputPassword5"
                        style={{ marginRight: "75%" }}
                      >
                        อีเมล
                      </Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        placeholder="กรอกอีเมลผู้ใช้งาน"
                        style={{  width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group>
                      <Form.Label
                        htmlFor="inputPassword5"
                        style={{ marginRight: "65%", whiteSpace: "nowrap" }}
                      >
                        ยืนยันรหัสผ่าน
                      </Form.Label>
                      <Form.Control
                        type="password"
                        id="confirmpassword"
                        style={{ width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </form>

            <div
              className="row"
              style={{ textAlign: "left", marginLeft: "8%" }}
            >
              <li>รหัสผ่านต้องมีตัวเลข(0-9)</li>
              <li>รหัสผ่านต้องมีตัวอักษรอย่างน้อย 1 ตัวอักษร</li>
              <li>รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร</li>
            </div>
            <div className="row mt-4">
              <h1
                style={{
                  color: "black",
                  textAlign: "left",
                  marginLeft: "9%",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                ข้อมูลเพิ่มเติม
              </h1>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <Form.Group>
                    <Form.Label
                      htmlFor="inputPassword5"
                      style={{ marginRight: "50%" }}
                    >
                      เพศ
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="gender"
                      style={{ marginLeft: "20%", width: "80%" }}
                    />
                  </Form.Group>
                </div>
                <div className="row">
                  <Form.Group>
                    <Form.Label
                      htmlFor="inputPassword5"
                      style={{ marginRight: "50%" }}
                    >
                      จังหวัด
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="city"
                      style={{ marginLeft: "20%", width: "80%" }}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="col-6">
                <div className="row">
                  <Form.Group>
                    <Form.Label
                      htmlFor="inputPassword5"
                      style={{ marginRight: "50%" }}
                    >
                      วันเดือนปีเกิด
                    </Form.Label>
                    <Form.Control
                      type="HBD"
                      id="password"
                      style={{ width: "80%" }}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterLogin />
      </div>
    );
  }
}
export default Register;
