import React from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  Card,
  Nav,
  NavLink,
} from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchTab from "../../components/SearchTab";
import "./Cart.css";
import bin from "../../img/bin.png";
import shop from "../../img/shoplogo.png";
import bagpack from "../../img/bagpack.jpg";
import product from "../../img/product1.jpg";

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
    const promotion = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
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
                  <div className="allProductinCart-bg">
                    <Container>
                      <Row>
                        <Col xs={8} className="itemcart mt-2 mb-2">
                          <Form.Check
                            inline
                            style={{ fontWeight: "bold" }}
                            label={`สินค้าทั้งหมด (3รายการ)`}
                            name="selectAllItem"
                            type="checkbox"
                            id="selectAllItem"
                          />
                        </Col>
                        <Col
                          xs={4}
                          className="mt-2"
                          style={{ textAlign: "right" }}
                        >
                          <i className="fas fa-trash">{" "} 
                          ลบ</i>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div className="productincart">
                    <Row>
                      <Col>
                        <Container className="shopName">
                          <Row className="mt-3">
                            <Col xs={8}>
                              <Row>
                                <Col>
                                  <Form.Check
                                    className="select-item-incart"
                                    inline
                                    style={{ fontWeight: "bold" }}
                                    name="selectAllItem"
                                    label={``}
                                    type="checkbox"
                                    id="selectAllItem"
                                  />
                                  <i
                                    className="fas fa-store"
                                    style={{ color: "gray" }}
                                  ></i>{" "}
                                  ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={4} style={{ textAlign: "end" }}>
                              <Row>
                                <div className="col">
                                  <p style={{ textDecoration: "underline" }}>
                                    ดูร้านค้า
                                  </p>
                                </div>
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                        <Container>
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
                                <Col sm={3} md={4}>
                                  <img
                                    style={{ width: "100%" }}
                                    src={bagpack}
                                    alt="logo"
                                  ></img>
                                </Col>
                                <Col sm={8} md={7}>
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
                            <Col
                              sm={2}
                              className="justify-content-center mt-4"
                              style={{ textAlign: "end" }}
                            >
                              <li>
                                <button
                                  className="decreaseNumber"
                                  onClick={this.DecreaseItem}
                                >
                                  -
                                </button>
                                <input
                                  name="clicks"
                                  value={this.state.clicks}
                                  onChange={this.handleChange.bind(this)}
                                  style={{
                                    textAlign: "center",
                                    border: "none",
                                    height: "25px",
                                    width: "30px",
                                  }}
                                />
                                <button
                                  className="incrementNumber"
                                  onClick={this.IncrementItem}
                                >
                                  +
                                </button>
                              </li>
                            </Col>
                            <Col sm={2}>
                              <div className="fontprice">
                                <p>{`2,599`} บาท</p>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <img
                                  className="deletelogo"
                                  src={bin}
                                  alt="logo"
                                ></img>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                        <Container>
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
                                <Col sm={3} md={4}>
                                  <img
                                    className="photoProduct"
                                    src={bagpack}
                                    alt="logo"
                                  ></img>
                                </Col>
                                <Col sm={8} md={7}>
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
                            <Col
                              sm={2}
                              className="justify-content-center mt-4"
                              style={{ textAlign: "end" }}
                            >
                              <li>
                                <button
                                  className="decreaseNumber"
                                  onClick={this.DecreaseItem}
                                >
                                  -
                                </button>
                                <input
                                  name="clicks"
                                  value={this.state.clicks}
                                  onChange={this.handleChange.bind(this)}
                                  style={{
                                    textAlign: "center",
                                    border: "none",
                                    height: "25px",
                                    width: "30px",
                                  }}
                                />
                                <button
                                  className="incrementNumber"
                                  onClick={this.IncrementItem}
                                >
                                  +
                                </button>
                              </li>
                            </Col>
                            <Col sm={2}>
                              <div className="fontprice">
                                <p>{`2,599`} บาท</p>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <img
                                  className="deletelogo"
                                  src={bin}
                                  alt="logo"
                                ></img>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </div>
                  <div className="productincart">
                    <Row>
                      <Col>
                        <Container className="shopName">
                          <Row className="mt-3">
                            <Col xs={8}>
                              <Row>
                                <Col>
                                  <Form.Check
                                    className="select-item-incart"
                                    inline
                                    style={{ fontWeight: "bold" }}
                                    name="selectAllItem"
                                    label={``}
                                    type="checkbox"
                                    id="selectAllItem"
                                  />
                                  <i
                                    className="fas fa-store"
                                    style={{ color: "gray" }}
                                  ></i>{" "}
                                  ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={4} style={{ textAlign: "end" }}>
                              <Row>
                                <div className="col">
                                  <p style={{ textDecoration: "underline" }}>
                                    ดูร้านค้า
                                  </p>
                                </div>
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                        <Container>
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
                                <Col sm={3} md={4}>
                                  <img
                                    className="photoProduct"
                                    src={bagpack}
                                    alt="logo"
                                  ></img>
                                </Col>
                                <Col sm={8} md={7}>
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
                            <Col
                              sm={2}
                              className="justify-content-center mt-4"
                              style={{ textAlign: "end" }}
                            >
                              <li>
                                <button
                                  className="decreaseNumber"
                                  onClick={this.DecreaseItem}
                                >
                                  -
                                </button>
                                <input
                                  name="clicks"
                                  value={this.state.clicks}
                                  onChange={this.handleChange.bind(this)}
                                  style={{
                                    textAlign: "center",
                                    border: "none",
                                    height: "25px",
                                    width: "30px",
                                  }}
                                />
                                <button
                                  className="incrementNumber"
                                  onClick={this.IncrementItem}
                                >
                                  +
                                </button>
                              </li>
                            </Col>
                            <Col sm={2}>
                              <div className="fontprice">
                                <p>{`2,599`} บาท</p>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <img
                                  className="deletelogo"
                                  src={bin}
                                  alt="logo"
                                ></img>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                        <Container>
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
                                <Col sm={3} md={4}>
                                  <img
                                    className="photoProduct"
                                    src={bagpack}
                                    alt="logo"
                                  ></img>
                                </Col>
                                <Col sm={8} md={7}>
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
                            <Col
                              sm={2}
                              className="justify-content-center mt-4"
                              style={{ textAlign: "end" }}
                            >
                              <li>
                                <button
                                  className="decreaseNumber"
                                  onClick={this.DecreaseItem}
                                >
                                  -
                                </button>
                                <input
                                  name="clicks"
                                  value={this.state.clicks}
                                  onChange={this.handleChange.bind(this)}
                                  style={{
                                    textAlign: "center",
                                    border: "none",
                                    height: "25px",
                                    width: "30px",
                                  }}
                                />
                                <button
                                  className="incrementNumber"
                                  onClick={this.IncrementItem}
                                >
                                  +
                                </button>
                              </li>
                            </Col>
                            <Col sm={2}>
                              <div className="fontprice">
                                <p>{`2,599`} บาท</p>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <img
                                  className="deletelogo"
                                  src={bin}
                                  alt="logo"
                                ></img>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col>
                  <div className="checkbill-bg">
                    <Container>
                      <div className="row checkbill">
                        <p className="mt-2">สรุปการสั่งซื้อ</p>
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
                      <Nav.Link className="row mb-4 bill-btn" href="/Summary">
                        <Button type="submit" className="submit-bill mb-2">
                          ดำเนินการชำระ
                        </Button>
                      </Nav.Link>
                    </Container>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="todaymenu">
              <Row>
                <Col>
                  <h3> สินค้าราคาพิเศษ</h3>
                </Col>
                <Col>
                  <NavLink href="" className="btn-seeall">
                    ดูทั้งหมด
                  </NavLink>
                </Col>
              </Row>
              <Slider {...promotion}>
                <div>
                  <div style={{ padding: "5%" }}>
                    <Card className="flashdetail">
                      <Card.Img variant="top" src={product} />
                      <Card.Body>
                        <div>
                          *CASIO* นาฬิกาสายเลส มีกล่องครบชุด
                          <div className="disprice">ปกติ 2990 บาท</div>
                          <div className="redprice">1560 บาท</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "5%" }}>
                    <Card className="flashdetail">
                      <Card.Img variant="top" src={product} />
                      <Card.Body>
                        <div>
                          *CASIO* นาฬิกาสายเลส มีกล่องครบชุด
                          <div className="disprice">ปกติ 2990 บาท</div>
                          <div className="redprice">1560 บาท</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "5%" }}>
                    <Card className="flashdetail">
                      <Card.Img variant="top" src={product} />
                      <Card.Body>
                        <div>
                          *CASIO* นาฬิกาสายเลส มีกล่องครบชุด
                          <div className="disprice">ปกติ 2990 บาท</div>
                          <div className="redprice">1560 บาท</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "5%" }}>
                    <Card className="flashdetail">
                      <Card.Img variant="top" src={product} />
                      <Card.Body>
                        <div>
                          *CASIO* นาฬิกาสายเลส มีกล่องครบชุด
                          <div className="disprice">ปกติ 2990 บาท</div>
                          <div className="redprice">1560 บาท</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "5%" }}>
                    <Card className="flashdetail">
                      <Card.Img variant="top" src={product} />
                      <Card.Body>
                        <div>
                          *CASIO* นาฬิกาสายเลส มีกล่องครบชุด
                          <div className="disprice">ปกติ 2990 บาท</div>
                          <div className="redprice">1560 บาท</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "5%" }}>
                    <Card className="flashdetail">
                      <Card.Img variant="top" src={product} />
                      <Card.Body>
                        <div>
                          *CASIO* นาฬิกาสายเลส มีกล่องครบชุด
                          <div className="disprice">ปกติ 2990 บาท</div>
                          <div className="redprice">1560 บาท</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div>
                  <div style={{ padding: "5%" }}>
                    <Card className="flashdetail">
                      <Card.Img variant="top" src={product} />
                      <Card.Body>
                        <div>
                          *CASIO* นาฬิกาสายเลส มีกล่องครบชุด
                          <div className="disprice">ปกติ 2990 บาท</div>
                          <div className="redprice">1560 บาท</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Slider>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
