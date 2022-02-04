import React from "react";
import { Row, Form, Col, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./information.css";

export class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };
  render() {
    return (
      <div className="information-bg">
        <div className="content-bg ">
          <div className="head-point">
            <Container>
              <Row>
                <Col>
                  <Row className="mt-3" style={{ textAlign: "left" }}>
                    <li>
                      <i className="fas fa-store" style={{ color: "gray" }}></i>{" "}
                      <a
                        style={{
                          color: "gold",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >{`2,300`}</a>{" "}
                      <a style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Go Point ที่ใช้ได้
                      </a>
                    </li>
                  </Row>
                </Col>

                <Col className="mt-3">
                  <p
                    style={{
                      textAlign: "right",
                      textDecoration: "underline",
                      color: "#3CB371",
                    }}
                  >
                    ประวัติ Go Point
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="content-bg mt-3">
          <div className="body-info ">
            <div className="head-body-info">
              <Container>
                <Row>
                  <Col className="mt-3" style={{ textAlign: "left" }}>
                    <p>ข้อมูลส่วนตัว</p>
                  </Col>
                  <Col className="mt-3">
                    <p
                      style={{
                        textAlign: "right",
                        textDecoration: "underline",
                        color: "#3CB371",
                      }}
                    >
                      ล้างข้อมูล
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="photo-info"></div>
            <div className="data-info mt-3">
              <Form>
                <Container>
                  <Row>
                    <div className="circle-image">
                      <i className="fas fa-user">
                        <img style={{width:"100%"}} src={this.state.image} />
                      </i>
                    </div>
                    
                    <input
                    
                      type="file"
                      name="myImage"
                      onChange={this.onImageChange}
                    />
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <Form.Group className="mb-3" controlId="fristname">
                          <Form.Label>ชื่อ</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="ชื่อ"
                            style={{ width: "100%" }}
                          />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="phonenumber-personal"
                        >
                          <Form.Label>หมายเลขโทรศัพท์</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="หมายเลขโทรศัพท์"
                            style={{ width: "100%" }}
                          />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-3" controlId="gender">
                          <Form.Label>เพศ</Form.Label>
                          <Form.Select
                            placeholder="เลือกเพศ"
                            name="gender"
                            style={{ width: "100%" }}
                          >
                            <option>ชาย</option>
                            <option>หญิง</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-3" controlId="province">
                          <Form.Label>จังหวัด</Form.Label>
                          <Form.Select
                            placeholder="จังหวัด"
                            name="province"
                            id="province"
                            style={{ width: "100%" }}
                          >
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
                      <Row>
                        <Form.Group className="mb-3" controlId="lastname">
                          <Form.Label>นามสกุล</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="นามสกุล"
                            style={{ width: "100%" }}
                          />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-3" controlId="email-personal">
                          <Form.Label>อีเมล</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="อีเมล"
                            style={{ width: "100%" }}
                          />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group>
                          <Form.Label htmlFor="dob">วันเดือนปีเกิด</Form.Label>
                          <Form.Control
                            type="date"
                            id="dob"
                            name="dob"
                            placeholder="Date of Birth"
                            style={{ width: "100%" }}
                          />
                        </Form.Group>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <div className="info-btn ">
                      <Button
                        variant="primary"
                        type="submit"
                        className="submit-info"
                      >
                        บันทึก
                      </Button>
                    </div>
                  </Row>
                </Container>
              </Form>
            </div>
            <div className="footer-body-info">
              <div className="footer-title">
                <Container>
                  <Row>
                    <Col className="mt-3" style={{ textAlign: "left" }}>
                      <p>บัญชีและรหัสผ่าน</p>
                    </Col>
                    <Col className="mt-2">
                      <p
                        style={{
                          textAlign: "right",
                          textDecoration: "underline",
                          color: "#3CB371",
                        }}
                      >
                        เปลี่ยนรหัสผ่าน
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className="changePass mt-3 mb-3">
                <Form>
                  <Container>
                    <Row>
                      <Col>
                        <Row>
                          <Form.Group className="mb-3" controlId="email">
                            <Form.Label>อีเมล</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="อีเมล"
                              style={{ width: "100%" }}
                              disabled
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
                              style={{ width: "100%" }}
                            />
                          </Form.Group>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
