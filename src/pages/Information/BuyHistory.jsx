import React from "react";
import { Row, Tab, Tabs, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./information.css";
import bagpackproduct from "../../img/bagpack.jpg";

export class AllBuy extends React.Component {
  render() {
    return (
      <div className="information-bg">
        <div className="content-bg"></div>
        <div className="content-bg mt-3">
          <div className="book-history">
            <div className="head-book-history">
              <Container>
                <Row>
                  <Col className="mt-3" style={{ textAlign: "left" }}>
                    <p>หมายเลการจอง : 564403517</p>
                  </Col>
                  <Col className="mt-3" style={{ textAlign: "right" }}>
                    <p>สั่งซื้อเมื่อวันที่ : {`27/05/2021`}</p>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="shop-history">
              <div className="head-shop-history">
                <Container>
                  <Row>
                    <Col xs={8} md={9} className="mt-3">
                      <i className="fas fa-store" style={{ color: "gray" }}></i>{" "}
                      ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา
                    </Col>

                    <Col
                      xs={4}
                      md={3}
                      className="mt-3"
                      style={{ textAlign: "end" }}
                    >
                      <p>2 รายการ</p>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className="body-book-history mb-3">
                <Container>
                  <Row className="mt-4">
                    <Col sm={2} style={{ textAlign: "center" }}>
                      <img
                        className="product-image"
                        src={bagpackproduct}
                        alt="logo"
                      ></img>
                    </Col>
                    <Col sm={5}>
                      <div className="name-product">
                        กระเป๋าเดินทาง LOJEL LUGGAGE ขนาดพิเศษ LJCF1638 สีขาว
                        ไซส์ 28
                      </div>
                      <div className="about-product mt-3">
                        ตัวเลือกสินค้า: HM50GL+footrest
                      </div>
                    </Col>

                    <Col>
                      <div
                        className="circle-quantity"
                        style={{ textAlign: "center" }}
                      >
                        x1
                      </div>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                      <div className="disprice">4490 บาท</div>
                      <div className="redprice">2,599 บาท</div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="body-book-history mb-3">
                <Container>
                  <Row className="mt-4">
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

                    <Col style={{ textAlign: "center" }}>
                      <div className="circle-quantity">x1</div>
                    </Col>
                    <Col style={{ textAlign: "end" }}>
                      <div className="greenprice">720 บาท</div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="shop-history">
              <div className="head-shop-history">
                <Container>
                  <Row>
                    
                        <Col xs={8} md={9} className="mt-3">
                          <i
                            className="fas fa-store"
                            style={{ color: "gray" }}
                          ></i>{" "}
                          QIAOYUE Sports City
                        </Col>
                     

                    <Col
                      xs={4}
                      md={3}
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
                    <Col sm={2} style={{ textAlign: "center" }}>
                      <img
                        className="product-image"
                        src={bagpackproduct}
                        alt="logo"
                      ></img>
                    </Col>
                    <Col sm={5}>
                      <div className="name-product">
                        AliExpress เก้าอี้พับเก้าอี้พนักพิงแบบพกพาตกปลา
                        Retractable สตูลพลาสติกสำหรับผู้ใหญ่
                      </div>
                      <div className="about-product mt-3">
                        ตัวเลือกสินค้า:Joom 1pc
                      </div>
                    </Col>

                    <Col style={{ textAlign: "center" }}>
                      <div className="circle-quantity">x1</div>
                    </Col>
                    <Col style={{ textAlign: "end" }}>
                      <div className="disprice">2080 บาท</div>
                      <div className="redprice">1,400 บาท</div>
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
              <Container>
                <Row>
                  <Col className="mt-3" style={{ textAlign: "left" }}>
                    <p>หมายเลการจอง : 564403517</p>
                  </Col>
                  <Col className="mt-3" style={{ textAlign: "right" }}>
                    <p>สั่งซื้อเมื่อวันที่ : {`27/05/2021`}</p>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="shop-history">
              <div className="head-shop-history">
                <Container>
                  <Row>
                        <Col xs={8} md={9} className="mt-3">
                          <i
                            className="fas fa-store"
                            style={{ color: "gray" }}
                          ></i>{" "}
                          ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา
                        </Col>
                    <Col
                      xs={4}
                      md={3}
                      className="mt-3"
                      style={{ textAlign: "end" }}
                    >
                      <p>2 รายการ</p>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className="body-book-history mb-3">
                <Container>
                  <Row className="mt-4">
                    <Col sm={2} style={{ textAlign: "center" }}>
                      <img
                        className="product-image"
                        src={bagpackproduct}
                        alt="logo"
                      ></img>
                    </Col>
                    <Col sm={5}>
                      <div className="name-product">
                        AliExpress เก้าอี้พับเก้าอี้พนักพิงแบบพกพาตกปลา
                        Retractable สตูลพลาสติกสำหรับผู้ใหญ่
                      </div>
                      <div className="about-product mt-3">
                        ตัวเลือกสินค้า:Joom 1pc
                      </div>
                    </Col>

                    <Col>
                      <div
                        className="circle-quantity"
                        style={{ textAlign: "center" }}
                      >
                        x1
                      </div>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                      <div className="disprice">2080 บาท</div>
                      <div className="redprice">1,400 บาท</div>
                    </Col>
                  </Row>
                </Container>
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
