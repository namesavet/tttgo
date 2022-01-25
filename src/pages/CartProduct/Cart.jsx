import React from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchTab from "../../components/SearchTab";
import "./Cart.css";
import bin from "../../img/bin.png";
import shop from "../../img/shoplogo.png";
import bagpack from "../../img/bagpack.jpg";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  DecreaseItem = () => {
    if (this.state.clicks < 1) {
      this.setState({
        clicks: 0,
      });
    } else {
      this.setState({
        clicks: this.state.clicks - 1,
      });
    }
  };
  handleChange(event) {
    this.setState({ clicks: event.target.value });
  }
  render() {
    return (
      <div className="cart-bg">
        <div className="head-cart-tab mt-3 mb-4">
          <SearchTab />
        </div>
        <div className="cart-body mt-2">
          <Container>
            <div className="pathName mb-3">
              <p>
                หน้าแรก/ดีลพิเศษประจำวัน/กระเป๋าเดินทาง LOJEL LUGGAGE LJCF1638
                สีขาว ไซส์ 28/รถเข็น
              </p>
            </div>
            <div className="detail-cart">
              <Row>
                <Col sm={8}>
                  <Row className="allProductinCart-bg">
                    <Col className="itemcart mt-2">
                      <Form.Check
                        inline
                        style={{ fontWeight: "bold" }}
                        label={`สินค้าทั้งหมด (3รายการ)`}
                        name="selectAllItem"
                        type="checkbox"
                        id="selectAllItem"
                      />
                    </Col>
                    <Col className="mt-2" style={{ textAlign: "right" }}>
                      <Row>
                        <div className="col-9">
                          <img
                            className="deletelogo"
                            src={bin}
                            alt="logo"
                          ></img>
                        </div>
                        <div className="col">
                          <p>ลบ</p>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="productincart">
                    <Col>
                      <Row className="shopName mt-2">
                        <Col sm={8}>
                          <Row>
                            <Col sm={1}>
                              <Form.Check
                                inline
                                style={{ fontWeight: "bold" }}
                                name="selectAllItem"
                                type="checkbox"
                                id="selectAllItem"
                              />
                            </Col>
                            <Col sm={1}>
                              <img
                                className="shoplogo"
                                src={shop}
                                alt="logo"
                              ></img>
                            </Col>
                            <Col sm={8}>
                              <p>{`ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา`}</p>
                            </Col>
                          </Row>
                        </Col>
                        <Col style={{ textAlign: "right" }}>
                          <Row>
                            <div className="col">
                              <p style={{ textDecoration: "underline" }}>
                                ดูร้านค้า
                              </p>
                            </div>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="productInshop mt-3 mb-3">
                        <Col sm={8}>
                          <Row>
                            <Col sm={1}>
                              <Form.Check
                                inline
                                style={{ marginTop: "40px" }}
                                name="selectAllItem"
                                type="checkbox"
                                id="selectAllItem"
                              />
                            </Col>
                            <Col sm={3}>
                              <img
                                className="photoProduct"
                                src={bagpack}
                                alt="logo"
                              ></img>
                            </Col>
                            <Col sm={8}>
                              <div className="productName">
                                <p>{`กระเป๋าเดินทางLOJEL LUGGAGE ขนาดพิเศษ LJCF1638 สีขาว ไซส์ 28`}</p>
                              </div>
                              <div className="productDetail">
                                <p>
                                  ตัวเลือกสินค้า:
                                  <select
                                    className="select-detailPrduct"
                                    name="detailProduct"
                                    id="detailProduct"
                                  >
                                    <option>{`HM50GL+footrest`}</option>
                                  </select>
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <Row>
                            <Col>
                              <Row>
                                <button
                                  className="decreaseNumber"
                                  onClick={this.DecreaseItem}
                                >
                                  -
                                </button>
                              </Row>
                            </Col>
                            <Col>
                              <Row>
                                <input
                                  name="clicks"
                                  value={this.state.clicks}
                                  onChange={this.handleChange.bind(this)}
                                  style={{
                                    width: "50px",
                                    borderColor: "#DCDCDC",
                                  }}
                                />
                              </Row>
                            </Col>
                            <Col>
                              <Row>
                                <button
                                  className="incrementNumber"
                                  onClick={this.IncrementItem}
                                >
                                  +
                                </button>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <div className="fontprice">
                            <p>{`2,599`} บาท</p>
                          </div>
                          <div style={{textAlign:"end"}}>
                          <img
                            className="deletelogo"
                            src={bin}
                            alt="logo"
                          ></img>
                        </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col className="checkbill-bg">
                  <Container>
                    <div className="row checkbill mt-2">
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
                    <Row className="mb-4 bill-btn">
                      <Button type="submit" className="submit-bill">
                        ดำเนินการชำระ
                      </Button>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
