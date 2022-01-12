import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/footmenu.css";
import { Row, Col, Container } from "react-bootstrap";
import appstore from "../img/app.png";
import lond1 from "../img/lond1.png";

class Footmenu extends Component {
  render() {
    return (
      <div  className="footmenu">
        <Container>
          <div className="row ">
            <article className="col-12">
              <nav>
                <div className="row" style={{ listStyle: "none" }}>
                  <li className="col-sm-3 col-md-3 col-lg-2">
                    <div className="col  menu">
                      <div className="head">ไทยเที่ยวไทยโก</div>
                      <div>ค้นหาที่พัก</div>
                      <div>E-Voucher</div>
                      <div>สินค้าท่องเที่ยว</div>
                      <div>สิทธิพิเศษ</div>
                    </div>
                  </li>
                  <li className="col-sm-3 col-md-3 col-lg-2">
                    <div className="col  menu">
                      <div className="head">เกี่ยวกับเรา</div>
                      <div>งานไทยเที่ยวไทย</div>
                      <div>สถานที่ท่องเที่ยวยอดนิยท</div>
                      <div>ข่าวสารประชาสัมพันธ์</div>
                      <div>วิดีโอ</div>
                    </div>
                  </li>
                  <li className="col-sm-3 col-md-3 col-lg-2">
                    <div className="col  menu">
                      <div className="head">ร้านค้าเที่ยวไทย</div>
                      <div>สมัครสมาชิดฟรี</div>
                      <div>สมาชิกแนะนำ</div>
                      <div>บทความ</div>
                      <div>สำหรับผู้ประกอบการ</div>
                    </div>
                  </li>
                  <li className="col-sm-3 col-md-3 col-lg-2">
                    <div className="col menu">
                      <div className="head">ช่วยเหลือ</div>
                      <div>คำถามที่พบบ่อย</div>
                      <div>คู่มือการใช้งาน</div>
                      <div>นโยบายความเป้นส่วนตัว</div>
                      <div>ข้อตกลงการใช้งาน</div>
                    </div>
                  </li>
                  <li className="col-sm-6 col-md-4 col-lg-3">
                    <div className="head  menu">Download Now!</div>
                    <div>
                      <img src={lond1} alt="" style={{ width: "100%" }} />
                    </div>
                    <div className="head">Partnership</div>
                  </li>
                </div>
              </nav>
            </article>
          </div>
        </Container>
      </div>
    );
  }
}
export default Footmenu;
