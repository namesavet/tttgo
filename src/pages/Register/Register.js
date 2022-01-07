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
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label
                        htmlFor="inputPassword5"
                        style={{ marginLeft: "20%" }}
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
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label
                        htmlFor="inputPassword5"
                        style={{
                          marginLeft: "20%",
                        }}
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
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label
                        htmlFor="inputPassword5"
                        style={{ marginLeft: "20%" }}
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
                  <div
                    className="row"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Form.Group>
                      <Form.Label htmlFor="inputPassword5">นามสกุล</Form.Label>
                      <Form.Control
                        type="text"
                        id="lastName"
                        placeholder="กรอกนามสกุล"
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
                      <Form.Label htmlFor="inputPassword5">อีเมล</Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
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
                      <Form.Label htmlFor="inputPassword5">
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
              style={{ textAlign: "left", marginLeft: "10%", fontSize: "12px" }}
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
                      htmlFor="inputPassword5"
                      style={{ marginLeft: "20%" }}
                    >
                      เพศ
                    </Form.Label>
                    <Form.Select
                      className="form-select"
                      id="gender"
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
                      htmlFor="inputPassword5"
                      style={{ marginLeft: "20%" }}
                    >
                      จังหวัด
                    </Form.Label>
                    <Form.Select
                      className="form-select"
                      id="city"
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
                    <Form.Label htmlFor="inputPassword5">
                      วันเดือนปีเกิด
                    </Form.Label>
                       <Form.Control
                      type="date"
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
                  style={{ textAlign: "left", marginLeft: "20%" }}
                >
                  <Form.Check type="checkbox" className="form-check-inline" />
                  <Form.Label className="form-check-label" for="exampleCheck1">
                    คุณเข้าใจและยอมรับ ข้อตกลงการใช้งาน แล้ว
                  </Form.Label>
                </Form.Group>
              </div>
              <div className="col">
                <Button
                  variant="outline"
                  style={{ backgroundColor: "#8be973", color: "white" }}
                  type="submit"
                  className="btnLogin"
                >
                  เข้าสู่ระบบ
                </Button>
              </div>
            </div>

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
              <div className="col">
                <i>มีบัญชี ThaiteawthaiGo แล้ว?</i>
              </div>
              <div className="col">
                <i>เข้าสู่ระบบ</i>
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
