import { Button, Form } from "react-bootstrap";
import "./LoginWithEmail.css";
import google from "../../img/google.png";
import facebook from "../../img/facebook.png";
import line from "../../img/line.png";
import React from "react";
import FooterLogin from "../../footer/FooterLogin";
import Navbar1 from "../../components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
class LoginWithEmail extends React.Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <div className="LoginWithEmail">
          <div className="inputLogin">
            <div className="row mt-5" style={{ width: "100%" }}>
              <div
                className="col"
                style={{
                  color: "black",
                  fontSize: "24px",
                  marginLeft: "30%",
                  textAlign: "left",
                }}
              >
                เข้าสู่ระบบ
              </div>
              <div
                className="col mt-2 "
                style={{
                  fontSize: "16px",
                  color: "aqua",
                  marginRight: "25%",
                  textAlign: "right",
                }}
              >
                เข้าสู่ระบบด้วยเบอร์มือถือ
              </div>
            </div>

            <form>
              <Form.Group className="mb-3 mt-4">
                <Form.Label
                  style={{
                    width: "40%",
                    marginleft: "30%",
                    textAlign: "left",
                  }}
                >
                  อีเมล
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="info@nilecon.co"
                  style={{ width: "40%", marginLeft: "30%" }}
                />
                <Form.Label
                  style={{
                    width: "40%",
                    marginleft: "30%",
                    textAlign: "left",
                  }}
                >
                  รหัสผ่าน
                </Form.Label>
                <Form.Control
                  type="password"
                  style={{ width: "40%", marginLeft: "30%" }}
                />
              </Form.Group>

              <div className="row">
                <div
                  className="col mt-2 "
                  style={{
                    fontSize: "16px",
                    color: "aqua",
                    marginRight: "30%",
                    textAlign: "right",
                  }}
                >
                  ลืมรหัสผ่าน?
                </div>
              </div>

              <div>
                <Button
                  variant="outline"
                  style={{ backgroundColor: "#8be973", color: "white" }}
                  type="submit"
                  className="btnLogin"
                >
                  เข้าสู่ระบบ
                </Button>
              </div>
            </form>
            <div style={{ color: "black", fontSize: "20px" }}>
              <div>หรือจะลงทะเบียนด้วย</div>
            </div>
            <div>
              <Button
                variant="outline"
                style={{ backgroundColor: "#eb7070", color: "white" }}
                type="submit"
                className="btnGoogle"
              >
                <div className="row">
                  <div className="col-4" style={{ margin: "left" }}>
                    <img src={google} alt="logo" style={{ width: "16px" }} />
                  </div>
                  <div
                    className="col-7"
                    style={{ fontSize: "16px", textAlign: "left" }}
                  >
                    เข้าสู่ระบบผ่าน GOOGLE
                  </div>
                </div>
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                style={{ backgroundColor: "#6280e2", color: "white" }}
                type="submit"
                className="btnFacebook"
              >
                <div className="row">
                  <div className="col-4" style={{ margin: "left" }}>
                    <img src={facebook} alt="logo" style={{ width: "16px" }} />
                  </div>
                  <div
                    className="col-7"
                    style={{ fontSize: "16px", textAlign: "left" }}
                  >
                    เข้าสู่ระบบผ่าน FACEBOOK
                  </div>
                </div>
              </Button>
            </div>

            <div>
              <Button
                variant="outline"
                style={{ backgroundColor: "#7af062", color: "white" }}
                type="submit"
                className="btnLine"
              >
                <div className="row">
                  <div className="col-4" style={{ margin: "left" }}>
                    <img src={line} alt="logo" style={{ width: "16px" }} />
                  </div>
                  <div
                    className="col-7"
                    style={{ fontSize: "16px", textAlign: "left" }}
                  >
                    เข้าสู่ระบบผ่าน LINE
                  </div>
                </div>
              </Button>
            </div>
            <div className="row mt-8" style={{ display: "inline" }}>
              <ul>
                ท่านยอมรับ <p1>ข้อกำหนดในการใช้งาน</p1> และ
                <p1> นโยบายความเป็นส่วนตัว</p1> ของ Thaiteawthai.com
                เมื่อดำเนินการต่อ
              </ul>
            </div>
            <div
              className="row mt-2 "
              style={{
                backgroundColor: "#D3D3D3",
                height: "50px",
                padding: "10px",
                width: "100%",
                marginLeft: "0",
              }}
            >
              <div className="col">
                <i>ยังไม่เป็นสมาชิก ThiteawthaiGo ใช่หรือไม่ ?</i>
              </div>
              <div className="col">
                <i>ลงทะเบียน</i>
              </div>
            </div>
          </div>
        </div>
        <FooterLogin />
      </div>
    );
  }
}
export default LoginWithEmail;
