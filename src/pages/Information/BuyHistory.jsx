import React from "react";
import { Row, Tab, Tabs, Col, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./information.css";
import shoplogo from "../../img/shoplogo.png";
import bagpackproduct from "../../img/bagpack.jpg";

export class AllBuy extends React.Component {
  render() {
    return (
      <div className="information-bg">
        <div className="content-bg"></div>
        <div className="content-bg mt-3">
          <div className="book-history">
            <div className="head-book-history">
              <Row>
                <Col
                  className="mt-3"
                  style={{ textAlign: "left", marginLeft: "5%" }}
                >
                  <p>หมายเลการจอง : 564403517</p>
                </Col>
                <Col
                  className="mt-3"
                  style={{ textAlign: "right", marginRight: "5%" }}
                >
                  <p>สั่งซื้อเมื่อวันที่ : 27/05/2021</p>
                </Col>
              </Row>
            </div>
            <div className="shop-history">
              <div className="head-shop-history">
                <Row>
                  <Col>
                    <Row>
                      <Col
                        sm={1}
                        className="mt-3"
                        style={{ marginLeft: "10%" }}
                      >
                        <img
                          className="shop-logo"
                          src={shoplogo}
                          alt="logo"
                        ></img>
                      </Col>
                      <Col
                        sm={9}
                        className="mt-3"
                        style={{ textAlign: "left" }}
                      >
                        <p>ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา</p>
                      </Col>
                    </Row>
                  </Col>

                  <Col
                    className="mt-3"
                    style={{ textAlign: "right", marginRight: "5%" }}
                  >
                    <p>2 รายการ</p>
                  </Col>
                </Row>
              </div>

              <div className="body-book-history mb-3">
                <Row>
                  <Col sm={2} className="mt-3" style={{textAlign:"center"}}>
                    <img
                      className="product-image"
                      src={bagpackproduct}
                      alt="logo"
                    ></img>
                  </Col>
                  <Col sm={5} className="mt-3">
                    <div className="name-product">
                      กระเป๋าเดินทาง LOJEL LUGGAGE ขนาดพิเศษ LJCF1638 สีขาว ไซส์
                      28
                    </div>
                    <div className="about-product mt-3">
                      ตัวเลือกสินค้า: HM50GL+footrest
                    </div>
                  </Col>

                  <Col>
                    <div className="circle-quantity">
                      <div className="quantity">x1</div>
                    </div>
                  </Col>
                  <Col
                    className="mt-3"
                    style={{ textAlign: "right", marginRight: "5%" }}
                  >
                    <div className="price">2,500 บาท</div>
                  </Col>
                </Row>
              </div>
              <div className="body-book-history mb-3">
                <Container>
                  <Row className="mt-4">
                    <Col sm={2} style={{textAlign:"center"}}>
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
                      <div className="circle-quantity">x1</div>
                    </Col>
                    <Col style={{ textAlign: "end" }}>
                      <div className="price">720 บาท</div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="shop-history">
              <div className="head-shop-history">
                <Container>
                  <Row>
                    <Col>
                      <Row>
                        <Col xs={8} md={10} className="mt-3">
                          <i
                            className="fas fa-store"
                            style={{ color: "gray" }}
                          ></i>{" "}
                          QIAOYUE Sports City
                        </Col>
                      </Row>
                    </Col>

                    <Col
                      xs={4}
                      md={2}
                      className="mt-3"
                      style={{ textAlign: "end" }}
                    >
                      <p>1 รายการ</p>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className="body-book-history mb-3">
                <Container>
                  <Row className="mt-4">
                    <Col sm={2} style={{textAlign:"center"}}>
                      <img
                        className="product-image"
                        src={bagpackproduct}
                        alt="logo"
                      ></img>
                    </Col>
                    <Col sm={5} className="">
                      <div className="name-product">
                        AliExpress เก้าอี้พับเก้าอี้พนักพิงแบบพกพาตกปลา
                        Retractable สตูลพลาสติกสำหรับผู้ใหญ่
                      </div>
                      <div className="about-product ">
                        ตัวเลือกสินค้า:Joom 1pc
                      </div>
                    </Col>

                    <Col style={{ textAlign: "center" }}>
                      <div className="circle-quantity">x1</div>
                    </Col>
                    <Col style={{ textAlign: "end" }}>
                      <div className="price">1,400 บาท</div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>

        <div className="content-bg mt-3">
          <div className="book-history">
            <div className="head-book-history">
              <Row>
                <Col
                  className="mt-3"
                  style={{ textAlign: "left", marginLeft: "5%" }}
                >
                  <p>หมายเลการจอง : 564403517</p>
                </Col>
                <Col
                  className="mt-3"
                  style={{ textAlign: "right", marginRight: "5%" }}
                >
                  <p>สั่งซื้อเมื่อวันที่ : 06/05/2021</p>
                </Col>
              </Row>
            </div>
            <div className="shop-history">
              <div className="head-shop-history">
                <Row>
                  <Col>
                    <Row>
                      <Col
                        sm={1}
                        className="mt-3"
                        style={{ marginLeft: "10%" }}
                      >
                        <img
                          className="shop-logo"
                          src={shoplogo}
                          alt="logo"
                        ></img>
                      </Col>
                      <Col
                        sm={9}
                        className="mt-3"
                        style={{ textAlign: "left" }}
                      >
                        <p>QIAOYUE Sports City</p>
                      </Col>
                    </Row>
                  </Col>

                  <Col
                    className="mt-3"
                    style={{ textAlign: "right", marginRight: "5%" }}
                  >
                    <p>1 รายการ</p>
                  </Col>
                </Row>
              </div>

              <div className="body-book-history mb-3">
                <Row>
                  <Col sm={2} className="mt-3" style={{ marginLeft: "5%" }}>
                    <img
                      className="product-image"
                      src={bagpackproduct}
                      alt="logo"
                    ></img>
                  </Col>
                  <Col sm={5} className="mt-3">
                    <div className="name-product">
                      AliExpress เก้าอี้พับเก้าอี้พนักพิงแบบพกพาตกปลา
                      Retractable สตูลพลาสติกสำหรับผู้ใหญ่
                    </div>
                    <div className="about-product mt-3">
                      ตัวเลือกสินค้า:Joom 1pc
                    </div>
                  </Col>

                  <Col>
                    <div className="circle-quantity">
                      <div className="quantity">x1</div>
                    </div>
                  </Col>
                  <Col
                    className="mt-3"
                    style={{ textAlign: "right", marginRight: "5%" }}
                  >
                    <div className="price">1,400 บาท</div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export class GetBuy extends React.Component {
  render() {
    return <Container></Container>;
  }
}
export class BuySuccess extends React.Component {
  render() {
    return <Container></Container>;
  }
}

export class History extends React.Component {
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="all-buy"
          transition={false}
          id="noanim-tab-example"
          className=" history-tab"
        >
          <Tab eventKey="all-buy" title="ทั้งหมด">
            <AllBuy />
          </Tab>
          <Tab eventKey="get-buy" title="ที่ต้องชำระ">
            <GetBuy />
          </Tab>
          <Tab eventKey="buy-success" title="สั่งซื้อสำเร็จ">
            <BuySuccess />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
