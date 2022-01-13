import { Form, Container } from "react-bootstrap";
import "./Register.css";
import React from "react";
import FooterLogin from "../../footer/FooterLogin";
import Navbar1 from "../../components/Navbar";
import { NavLink } from "react-router-dom";
import ButtonSignUp from "../SelectOTP/SelectOtp";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telephone: "",
      password: "",
      confirmpassword: "",
      email: "",
      gender: "",
      dob: "",
      city: "",
      agree: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    console.log("Current State is" + JSON.stringify(this.state));
    alert("Current State is" + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div className="Register">
        <Navbar1 />
        <Container>
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

            <Form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label htmlFor="firstname" style={{ marginLeft: "20%" }}>
                        ชื่อ
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="กรอกชื่อผู้ใช้งาน"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        style={{ marginLeft: "20%", width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label
                        htmlFor="telephone"
                        style={{
                          marginLeft: "20%",
                        }}
                      >
                        หมายเลขโทรศัพท์
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        id="telephone"
                        name="telephone"
                        placeholder="กรอกหมายเลขโทรศัพท์ผู้ใช้งาน"
                        value={this.state.telephone}
                        onChange={this.handleInputChange}
                        style={{ marginLeft: "20%", width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label
                        htmlFor="password"
                        style={{ marginLeft: "20%" }}
                      >
                        รหัสผ่าน
                      </Form.Label>
                      <Form.Control
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        style={{ marginLeft: "20%", width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label htmlFor="lastname">นามสกุล</Form.Label>
                      <Form.Control
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="กรอกนามสกุล"
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                        style={{ width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label htmlFor="email">อีเมล</Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="กรอกอีเมลผู้ใช้งาน"
                        style={{ width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label htmlFor="confirmpassword">
                        ยืนยันรหัสผ่าน
                      </Form.Label>
                      <Form.Control
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        value={this.state.confirmpassword}
                        onChange={this.handleInputChange}
                        style={{ width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>

              <div
                className="row"
                style={{
                  textAlign: "left",
                  marginLeft: "10%",
                  fontSize: "12px",
                }}
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
                  <div className="row" style={{ textAlign: "left" }}>
                    <Form.Group>
                      <Form.Label
                        htmlFor="gender"
                        style={{ marginLeft: "20%" }}
                      >
                        เพศ
                      </Form.Label>
                      <Form.Select
                        className="form-select"
                        value={this.state.gender}
                        id="gender"
                        name="gender"
                        onChange={this.handleInputChange}
                        style={{ marginLeft: "20%", width: "80%" }}
                      >
                        <option selected disabled value="">
                          เลือกเพศ
                        </option>
                        <option>ชาย</option>
                        <option>หญิง</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="row" style={{ textAlign: "left" }}>
                    <Form.Group>
                      <Form.Label
                        htmlFor="city"
                        style={{ marginLeft: "20%" }}
                      >
                        จังหวัด
                      </Form.Label>
                      <Form.Select
                        className="form-select"
                        value={this.state.city}
                        id="city"
                        name="city"
                        onChange={this.handleInputChange}
                        style={{ marginLeft: "20%", width: "80%" }}
                      >
                        <option selected disabled value="">
                          เลือกจังหวัด
                        </option>
                        <option>กรุงเทพมหานคร</option>
                        <option>กระบี่</option>
                        <option>กาญจนบุรี</option>
                        <option>กาฬสินธุ์</option>
                        <option>กำแพงเพรช</option>
                        <option>ขอนแก่น</option>
                        <option>จันทบุรี</option>
                        <option>ฉะเชิงเทรา</option>
                        <option>ชลบุรี</option>
                        <option>ชัยนาท</option>
                        <option>ชัยภูมิ</option>
                        <option>ชุมพร</option>
                        <option>เชียงราย</option>
                        <option>เชียงใหม่</option>
                        <option>ตรัง</option>
                        <option>ตราด</option>
                        <option>ตาก</option>
                        <option>นครนายก</option>
                        <option>นครปฐม</option>
                        <option>นครพนม</option>
                        <option>นครราชสีมา</option>
                        <option>นครศรีธรรมราช</option>
                        <option>นครสวรรค์</option>
                        <option>นนทบุรี</option>
                        <option>นราธิวาส</option>
                        <option>น่าน</option>
                        <option>บึงกาฬ</option>
                        <option>บุรีรัมย์</option>
                        <option>ปทุมธานี</option>
                        <option>ประจวบคีรีขันธ์</option>
                        <option>ปราจีนบุรี</option>
                        <option>ปัตตานี</option>
                        <option>พระนครศรีอยุธยา</option>
                        <option>พังงา</option>
                        <option>พัทลุง</option>
                        <option>พิจิตร</option>
                        <option>พิษณุโลก</option>
                        <option>เพชรบุรี</option>
                        <option>เพชรบูรณ์</option>
                        <option>แพร่</option>
                        <option>พะเยา</option>
                        <option>ภูเก็ต</option>
                        <option>มหาสารคาม</option>
                        <option>มุกดาหาร</option>
                        <option>แม่ฮ่องสอน</option>
                        <option>ยะลา</option>
                        <option>ยโสธร</option>
                        <option>ร้อยเอ็ด</option>
                        <option>ระนอง</option>
                        <option>ระยอง</option>
                        <option>ราชบุรี</option>
                        <option>ลพบุรี</option>
                        <option>ลำปาง</option>
                        <option>ลำพูน</option>
                        <option>เลย</option>
                        <option>ศรีสะเกษ</option>
                        <option>สกลนคร</option>
                        <option>สงขลา</option>
                        <option>สตูล</option>
                        <option>สมุทรปราการ</option>
                        <option>สมุทรสงคราม</option>
                        <option>สมุทรสาคร</option>
                        <option>สระแก้ว</option>
                        <option>สระบุรี</option>
                        <option>สิงห์บุรี</option>
                        <option>สุโขทัย</option>
                        <option>สุพรรณบุรี</option>
                        <option>สุราษฎร์ธานี</option>
                        <option>สุรินทร์</option>
                        <option>หนองคาย</option>
                        <option>หนองบัวลำภู</option>
                        <option>อ่างทอง</option>
                        <option>อุดรธานี</option>
                        <option>อุทัยธานี</option>
                        <option>อุตรดิตถ์</option>
                        <option>อุบลราชธานี</option>
                        <option>อำนาจเจริญ</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-6">
                  <div className="row" style={{ textAlign: "left" }}>
                    <Form.Group>
                      <Form.Label htmlFor="dob">
                        วันเดือนปีเกิด
                      </Form.Label>
                      <Form.Control
                        type="date"
                        id="dob"
                        name="dob"
                        placeholder="Date of Birth"
                        style={{ width: "80%" }}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <Form.Group
                    className="mt-2"
                    style={{
                      textAlign: "left",
                      marginLeft: "15%",
                      fontSize: "14px",
                    }}
                  >
                    <Form.Check
                      type="checkbox"
                      name="agree"
                      className="form-check-inline"
                      checked={this.state.agree}
                      onChange={this.handleInputChange}
                    />
                    <Form.Label
                      className="form-check-label"
                      for="exampleCheck1"
                    >
                      คุณเข้าใจและยอมรับ ข้อตกลงการใช้งาน แล้ว
                    </Form.Label>
                  </Form.Group>
                </div>
                <div
                  className="col-3"
                  style={{ marginRight: "10%", textAlign: "right" }}
                >
                  <ButtonSignUp />
                </div>
              </div>
            </Form>

            <div
              className="row mt-2 "
              style={{
                backgroundColor: "#D3D3D3",
                height: "50px",
                padding: "10px",
                width: "100%",
                margin: "auto",
              }}
            >
              <div
                className="col"
                style={{
                  textAlign: "left",
                  marginLeft: "5%",
                  whiteSpace: "nowrap",
                }}
              >
                <i>มีบัญชี ThaiteawthaiGo แล้ว?</i>
              </div>
              <NavLink to="/" className="col">
                <div
                  style={{
                    marginRight: "20%",
                    textAlign: "right",
                    color: "#20B2AA",
                    textDecoration: "underline",
                  }}
                >
                  <i>เข้าสู่ระบบ</i>
                </div>
              </NavLink>
            </div>
          </div>
        </Container>
        <FooterLogin />
      </div>
    );
  }
}
