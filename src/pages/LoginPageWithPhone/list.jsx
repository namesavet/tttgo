import { Button, Container } from "react-bootstrap";
import "./LoginWithPhone.css";
import google from "../../img/google.png";
import facebook from "../../img/facebook.png";
import line from "../../img/line.png";
import React from "react";
import FooterLogin from "../../footer/FooterLogin";
import Navbar1 from "../../components/Navbar";
import { NavLink } from "react-router-dom";
import ButtonSignin from "../SelectOTP/OTP/OtpSignIn";

export class LoginWithPhone extends React.Component {
  render() {
    return (
      <>
        <div className="LoginWithPhone">
          <Navbar1 />
          <Container>
            <div className="inputLogin">
              <div className="row mt-3">
                <div
                  className="col"
                  style={{
                    color: "black",
                    fontSize: "24px",
                    marginLeft: "10%",
                    textAlign: "left",
                  }}
                >
                  เข้าสู่ระบบ
                </div>
                <NavLink to="/loginWithEmail" className="col mt-2 ">
                  <div
                    style={{
                      fontSize: "16px",
                      color: "aqua",
                      marginRight: "15%",
                      textAlign: "right",
                      textDecoration: "underline",
                    }}
                  >
                    เข้าสู่ระบบด้วยรหัสผ่าน
                  </div>
                </NavLink>
              </div>

              <ButtonSignin />

              <div style={{ color: "black", fontSize: "20px" }}>
                <div>หรือจะลงทะเบียนด้วย</div>
              </div>
              <div>
                <Button
                  className="btn-Phone-Google"
                  variant="outline"
                  style={{
                    backgroundColor: "#eb7070",
                    color: "white",
                    width: "80%",
                  }}
                  type="submit"
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
                  style={{
                    backgroundColor: "#6280e2",
                    color: "white",
                    width: "80%",
                  }}
                  type="submit"
                  className="btn-Phone-Facebook"
                >
                  <div className="row">
                    <div className="col-4" style={{ margin: "left" }}>
                      <img
                        src={facebook}
                        alt="logo"
                        style={{ width: "16px" }}
                      />
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
                  style={{
                    backgroundColor: "#7af062",
                    color: "white",
                    width: "80%",
                  }}
                  type="submit"
                  className="btn-Phone-Line"
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
              <div
                className="row mt-8"
                style={{
                  textAlign: "center",
                  marginLeft: "10%",
                  marginRight: "10%",
                }}
              >
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
                <NavLink to="/register" className="col">
                  <div
                    style={{
                      textAlign: "right",
                      color: "#20B2AA",
                      textDecoration: "underline",
                    }}
                  >
                    <i>ลงทะเบียน</i>
                  </div>
                </NavLink>
              </div>
            </div>
          </Container>
        </div>
        <FooterLogin />
      </>
    );
  }
}
