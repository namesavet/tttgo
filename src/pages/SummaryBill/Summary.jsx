import React from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  Card,
  NavLink,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchTab from "../../components/SearchTab";
import "./Summary.css";
import visa from "../../img/visa.png";
import shoplogo from "../../img/shoplogo.png";
import bagpackproduct from "../../img/bagpack.jpg";
import EditAddress from "./ChangeAddress";

export class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_checked: true,
    };
  }

  toggleCheckbox(event) {
    let newValue =
      this.state.is_checked === "on" || this.state.is_checked === true
        ? false
        : true;
    this.setState({
      is_checked: newValue,
    });
  }
  render() {
    return (
      <div className="summary-bg">
        <div className="head-summary-tab mt-3 mb-4">
          <SearchTab />
        </div>
        <div className="summary-body mt-2">
          <Container>
            <div className="pathName mb-3">
              <p>
                หน้าแรก/ดีลพิเศษประจำวัน/กระเป๋าเดินทาง LOJEL LUGGAGE LJCF1638
                สีขาว ไซส์ 28/รถเข็น/สรุปการสั่งซื้อ
              </p>
            </div>
            <div className="detail-summary">
              <Row>
                <Col sm={8}>
                  <div className="address-bg">
                    <Container className="address">
                      <Row>
                        <Col sm={10} className="mt-3 mb-3">
                          <Row>
                            <div className="col-1">
                              <i
                                className="fas fa-map-marker-alt"
                                style={{ color: "#98FB98" }}
                              ></i>
                            </div>
                            <div className="col-10">
                              <div
                                className="row"
                                style={{ fontWeight: "bold" }}
                              >
                                ที่อยู่ในการจัดส่ง
                              </div>
                              <div
                                className="row"
                                style={{ fontSize: "12px", fontWeight: "bold" }}
                              >
                                {`กาญจนาพรรณ`} {`ธาตุตกุลมาร`} {`090-001-2001`}
                              </div>
                              <div className="row" style={{ fontSize: "12px" }}>
                                {`110`} {`คอนโดใหม่`} {`ซอยโรหิตสุข`}{" "}
                                {`ถ.ประชาราฎบำเพ็ญ`} {`ซ.5`} {`เขตห้วยขวาง`}{" "}
                                {`จังหวัดกรุงเทพมหานคร`} {`10310`}
                              </div>
                            </div>
                          </Row>
                        </Col>
                        <Col className="mt-3 mb-3">
                          <Row>
                            <EditAddress />
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div className="sendchoice-bg">
                    <Container>
                      <Row>
                        <Col sm={8} className="mt-3 mb-3">
                          <div className="row" style={{ fontWeight: "bold" }}>
                            <p>ตัวเลือกการจัดส่ง</p>
                          </div>
                          <div
                            className="row"
                            style={{ fontWeight: "bold", fontSize: "12px" }}
                          >
                            <p>
                              {`Standard Delivery`}-{`ส่งธรรมดาในประเทศไทย`}
                            </p>
                          </div>
                        </Col>
                        <Col className="mt-3 mb-3">
                          <div
                            className="row"
                            style={{
                              color: "#98fb98",
                              textAlign: "end",
                            }}
                          >
                            <p>เปลี่ยน</p>
                          </div>
                          <div
                            className="row"
                            style={{ fontSize: "12px", textAlign: "end" }}
                          >
                            <p>
                              จะได้รับในวันที่ {`18พ.ค.`}-{`19 พ.ค.`}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>

                  <div className="product-summary">
                    <div className="head-shop">
                      <Container className="shopName-insummary">
                        <Row>
                          <Col className="mt-3">
                            <i
                              className="fas fa-store"
                              style={{ color: "gray" }}
                            ></i>{" "}
                            ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา
                          </Col>

                          <Col className="mt-3" style={{ textAlign: "end" }}>
                            <p>แชทร้านค้า</p>
                          </Col>
                        </Row>
                      </Container>
                    </div>

                    <div className="body-product-insummary mb-3">
                      <Container>
                        <Row className="mt-3">
                          <Col sm={2} style={{ textAlign: "center" }}>
                            <img
                              className="product-image"
                              src={bagpackproduct}
                              alt="logo"
                            ></img>
                          </Col>
                          <Col sm={5}>
                            <div className="name-product">
                              กระเป๋าเดินทาง LOJEL LUGGAGE ขนาดพิเศษ LJCF1638
                              สีขาว ไซส์ 28
                            </div>
                            <div className="about-product mt-3">
                              ตัวเลือกสินค้า: HM50GL+footrest
                            </div>
                          </Col>

                          <Col>
                            <div className="circle-quantity-summary">x1</div>
                          </Col>

                          <Col style={{ textAlign: "end" }}>
                            <div className="disprice">4490 บาท</div>
                            <div className="redprice">2,599 บาท</div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <div className="body-product-insummary mb-3">
                      <Container>
                        <Row className="mt-3">
                          <Col sm={2} style={{ textAlign: "center" }}>
                            <img
                              className="product-image"
                              src={bagpackproduct}
                              alt="logo"
                            ></img>
                          </Col>
                          <Col sm={5}>
                            <div className="name-product">
                              เครื่องสำอางท่องเที่ยวกระเป๋าหูรูดเชือกกันฝุ่น
                            </div>
                            <div className="about-product mt-3">
                              ตัวเลือกสินค้า: size 65x85 cm.
                            </div>
                          </Col>

                          <Col>
                            <div className="circle-quantity-summary">x1</div>
                          </Col>
                          <Col style={{ textAlign: "end" }}>
                            <div className="greenprice">720 บาท</div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>

                  <div className="footer-product-insummary">
                    <Container>
                      <Row>
                        <Col xs={2}>
                          <div className="font16px mt-3">
                            <p>หมายเหตุ:</p>
                          </div>
                        </Col>
                        <Col sm={10}>
                          <div className="comment-customer">
                            <Form.Control
                              type="text"
                              placeholder="ฝากข้อความถึงผู้ขาย"
                              className="font16px mt-2"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>

                <Col>
                  <div className="summarybill-bg">
                    <Container>
                      <div className="row select-summarycheckbill">
                        <p className="mt-2 mb-2">เลือกการชำระเงิน</p>
                      </div>
                      <Form.Label className="input-credit">
                        เลือกวิธีการชำระเงิน
                      </Form.Label>
                      <Form.Select className="select-card">
                        <option>บัตรเครดิต/บัตรเดบิต</option>
                        <option value="credit">บัตรเครดิต</option>
                        <option value="debit">บัตรเดบิต</option>
                      </Form.Select>
                      <Form.Label className="select-account mt-2">
                        เลือกบัญชีชำระเงิน
                      </Form.Label>
                      <div className="account">
                        <Container className="mb-3">
                          <Row>
                            <div className="col-1">
                              <Form.Check
                                inline
                                name="accountbank"
                                type="radio"
                                id="accountbank"
                                className="checkboxAccount"
                                checked={this.state.is_checked}
                                onChange={this.toggleCheckbox.bind(this)}
                              />
                            </div>
                            <li className="col-2">
                              <img
                                className="visalogo"
                                src={visa}
                                alt="logo"
                              ></img>
                            </li>
                            <li className="col-8">
                              <div className="accountNumber">
                                {`ธนาคารกสิกร`} {`**** **** **** 9888`}
                              </div>
                            </li>
                          </Row>
                          <div className="input-newAccountbank">
                            <Form.Control
                              type="text"
                              placeholder="+ เพิ่มบัตรใหม่"
                              name="newAcoountbank"
                              id="newAcoountbank"
                              style={{
                                marginLeft: "30px",
                                width: "80%",
                                fontSize: "14px",
                              }}
                            />
                          </div>
                        </Container>
                      </div>

                      <div className="go-point mt-3">
                        <div className="title-goPoint">
                          <p>Go Point ของคุณ [ {`110`} Point ]</p>
                        </div>
                        <Row>
                          <div className="col-1">
                            <Form.Check
                              inline
                              name="usePoint"
                              type="checkbox"
                              id="usePoint"
                              className="checkboxUsePoint"
                            />
                          </div>
                          <div className=" col-7 font14px">
                            ต้องการใช้ Go Point
                          </div>
                          <div className="col">
                            <Form.Control
                              type="text"
                              placeholder="00      Point"
                              name="newAcoountbank"
                              id="newAcoountbank"
                              style={{
                                fontSize: "14px",
                              }}
                            />
                          </div>
                        </Row>
                      </div>

                      <div className="row checkbillsummary mt-3">
                        <p>สรุปการสั่งซื้อ</p>
                      </div>
                      <Row className="mb-3 allCheckBill">
                        <div className="col fontBill">
                          <p>{`รายการสั่งซื้อ (จำนวน x2)`}</p>
                        </div>
                        <div className="col fontpriceBill">
                          <p>{`3,319 บาท`}</p>
                        </div>
                      </Row>
                      <Row>
                        <div className="col fontBill">
                          <p>{`ยอดทั้งหมด`}</p>
                        </div>
                        <div className="col fontpriceBill">
                          <p>{`3,319 บาท`}</p>
                        </div>
                      </Row>
                      <Row className="mb-1">
                        <div className="col fontBill">
                          <p>{`Go point ที่ได้รับ`}</p>
                        </div>
                        <div className="col fontpriceBill">
                          <p>{`20 Point`}</p>
                        </div>
                      </Row>
                      <Nav.Link className="row mb-4 bill-btn">
                        <Button type="submit" className="submit-bill mb-2">
                          ดำเนินการชำระ
                        </Button>
                      </Nav.Link>
                    </Container>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
