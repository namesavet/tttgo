import React from "react";
import { Row, Form, Col, Container, Nav, NavLink, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./information.css";

export class Personal extends React.Component {
  render() {
    return (
      <div className="information-bg">
        <div className="content-bg ">
          <div className="head-point">
            <Row>
              <Col style={{ textAlign: "left" }}>
                <Row
                  className="mt-3"
                  style={{ textAlign: "left", marginLeft: "5%" }}
                >
                  <Col>
                    <p>2,300</p>
                  </Col>
                  <Col>
                    <p>2,300</p>
                  </Col>
                  <Col>
                    <p>Go Point ที่ใช้ได้</p>
                  </Col>
                </Row>
              </Col>
              <Col
                className="mt-3"
                style={{ textAlign: "right", marginRight: "5%" }}
              >
                <p>ประวัติ Go Point</p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="content-bg mt-3">
          <div className="body-info ">
            <div className="head-body-info">
              <Row>
                <Col
                  className="mt-3"
                  style={{ textAlign: "left", marginLeft: "5%" }}
                >
                  <p>ข้อมูลส่วนตัว</p>
                </Col>
                <Col
                  className="mt-3"
                  style={{ textAlign: "right", marginRight: "5%" }}
                >
                  <p>ล้างข้อมูล</p>
                </Col>
              </Row>
            </div>
            <div className="photo-info"></div>
            <div className="data-info">
              <Row>
                <Col>
                  <Row>
                    <Form.Group className="mb-3" controlId="fristname-lastname">
                      <Form.Label>ชื่อ</Form.Label>
                      <Form.Control type="text" placeholder="ชื่อ-นามสกุล" />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="phonenumber">
                      <Form.Label>หมายเลขโทรศัพท์</Form.Label>
                      <Form.Control type="text" placeholder="หมายเลขโทรศัพท์" />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="address">
                      <Form.Label>เพศ</Form.Label>
                      <Form.Select placeholder="เลือกเพศ">
                        <option>ชาย</option>
                        <option>หญิง</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="address">
                      <Form.Label>จังหวัด</Form.Label>
                      <Form.Select placeholder="ชื่อ-นามสกุล">
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
                  </Row>
                </Col>
                <Col>
                  <Row></Row>
                  <Row></Row>
                  <Row></Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
