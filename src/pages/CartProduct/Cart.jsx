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
import bagpack from "../../img/bagpack.jpg";
import product from "../../img/product1.jpg";
import Product from "./Product";

export class Cart extends React.Component {
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
                
                  <Product/>
                

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
