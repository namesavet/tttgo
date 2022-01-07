import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/footmenu.css";
import { Row, Col, Container } from "react-bootstrap";
import appstore from "../img/app.png";
import lond1 from "../img/lond1.png";

class Footmenu extends Component {
  render() {
    return (
      <div className="row footmenu">
        <article className="col-12">
                    <nav>
                        <ul className="row">
                            <li className="col-md-0 col-lg-2">

                            </li>


                            <li className="col-sm-0 col-md-9 col-lg-7">
                                <div className="row">

                                    <div className="col">
                                        <div>
                                            ไทยเที่ยวไทยโก
                                        </div>
                                        <div>
                                            ค้นหาที่พัก
                                        </div>
                                        <div>
                                            E-Voucher
                                        </div>
                                        <div>
                                            สินค้าท่องเที่ยว
                                        </div>
                                        <div>
                                            สิทธิพิเศษ
                                        </div>
                                    </div>
                                    <div className="col">

                                        <div>
                                            เกี่ยวกับเรา
                                        </div>
                                        <div>
                                            งานไทยเที่ยวไทย
                                        </div>
                                        <div>
                                            สถานที่ท่องเที่ยวยอดนิยท
                                        </div>
                                        <div>
                                            ข่าวสารประชาสัมพันธ์
                                        </div>
                                        <div>
                                            วิดีโอ
                                        </div>

                                    </div>
                                    <div className="col">

                                        <div>
                                            ร้านค้าเที่ยวไทย
                                        </div>
                                        <div>
                                            สมัครสมาชิดฟรี
                                        </div>
                                        <div>
                                            สมาชิกแนะนำ
                                        </div>
                                        <div>
                                            บทความ
                                        </div>
                                        <div>
                                            สำหรับผู้ประกอบการ
                                        </div>
                                    </div>
                                    <div className="col">

                                        <div>
                                            ช่วยเหลือ
                                        </div>
                                        <div>
                                            คำถามที่พบบ่อย
                                        </div>
                                        <div>
                                            คู่มือการใช้งาน
                                        </div>
                                        <div>
                                            นโยบายความเป้นส่วนตัว
                                        </div>
                                        <div>
                                            ข้อตกลงการใช้งาน
                                        </div>
                                    </div>
                                </div>

                            </li>







                            <li className="col-sm-6 col-md-3 col-lg-3">
                                <div>
                                    Download Now!
                                </div>
                                <div>
                                    <img src={lond1} alt="" style={{ width: '70%' }} />
                                </div>
                                <div>
                                    Partnership
                                </div>



                            </li>

                        </ul>
                    </nav>
                </article>
        
      </div>
    );
  }
}
export default Footmenu;
