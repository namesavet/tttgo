import React from "react";
import Slider from "react-slick";
import {
  Card,
  Tabs,
  Tab,
  Row,
  Col,
  Button,
  Container,
  NavLink,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import ads1 from "../../img/ads1.png";
import ads380 from "../../img/ads380.jpg";
import hotelpic from "../../img/hotel.jpg";
import first from "../../img/first.jpg";
import flash from "../../img/flash.jpg";
import flash1 from "../../img/flash1.jpg";
import flash2 from "../../img/flash2.jpg";
import flash3 from "../../img/flash3.jpg";
import second from "../../img/second.jpg";
import shirt from "../../img/category/shirt.png";
import product from "../../img/product/product.png";
import thai from "../../img/thai.jpg";
import "./home.css";

export class Thailand extends React.Component {
  render() {
    const toptravel = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
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
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="">
          <Slider {...toptravel}>
          <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={thai} alt="" />
                  <div className="provinec-name">กรุงเทพ</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={thai} alt="" />
                  <div className="provinec-name">กรุงเทพ</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={thai} alt="" />
                  <div className="provinec-name">กรุงเทพ</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={thai} alt="" />
                  <div className="provinec-name">กรุงเทพ</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={thai} alt="" />
                  <div className="provinec-name">กรุงเทพ</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={thai} alt="" />
                  <div className="provinec-name">กรุงเทพ</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={thai} alt="" />
                  <div className="provinec-name">กรุงเทพ</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={thai} alt="" />
                  <div className="provinec-name">กรุงเทพ</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export class Home extends React.Component {
  state = {
    display: true,
    width: 600,
  };

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
    const category = {
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
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
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
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
    const hotel = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
      <div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={first} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={second} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <Container>
          <div className="layoutmenubtn">
            <article className="col-12  ">
              <nav>
                <div className="row tabbtnmenu " style={{ listStyle: "none" }}>
                  <li className="col-sm-2 col-md-2 col-lg-2 tabbtnmenu"></li>
                  <li className="col-sm-8 col-md-8 col-lg-8 tabbtnmenu"></li>
                  <li className="col-sm-2 col-md-8 col-lg-2 "></li>

                  {/* <div className=" col-lg-3 testmenu">
                    <button type="button" className="row menubtn">
                      <div className="col-3">
                        <i className="fas fa-user-circle fa-2x"></i>
                      </div>
                      <div className="col fontmenubtn">โรงแรม+ที่พัก</div>
                    </button>
                  </div>
                  <div className=" col-lg-3">
                    <button type="button" className="row menubtn">
                      <div className="col-3">
                        <i className="fas fa-user-circle fa-2x"></i>
                      </div>
                      <div className="col fontmenubtn">โรงแรม+ที่พัก</div>
                    </button>
                  </div>
                  <div className=" col-lg-3">
                    <button type="button" className="row menubtn">
                      <div className="col-3">
                        <i className="fas fa-user-circle fa-2x"></i>
                      </div>
                      <div className="col fontmenubtn">โรงแรม+ที่พัก</div>
                    </button>
                  </div> */}
                </div>
              </nav>
            </article>
          </div>
        </Container>

        <Container>
          <div className="categorymenu">
            <h2>หมวดหมู่สินค้า</h2>
            <Slider {...category}>
              <div>
                <div style={{ padding: "5%" }}>
                  <div>
                    <img className="categorypic" src={shirt} alt="" />
                  </div>
                  <div className="categorytext">เสื้อผ้า</div>
                </div>
              </div>

              <div>
                <div style={{ padding: "5%" }}>
                  <div>
                    <img className="categorypic" src={shirt} alt="" />
                  </div>
                  <div className="categorytext">เสื้อผ้า</div>
                </div>
              </div>

              <div>
                <div style={{ padding: "5%" }}>
                  <div>
                    <img className="categorypic" src={shirt} alt="" />
                  </div>
                  <div className="categorytext">เสื้อผ้า</div>
                </div>
              </div>

              <div>
                <div style={{ padding: "5%" }}>
                  <div>
                    <img className="categorypic" src={shirt} alt="" />
                  </div>
                  <div className="categorytext">เสื้อผ้า</div>
                </div>
              </div>

              <div>
                <div style={{ padding: "5%" }}>
                  <div>
                    <img className="categorypic" src={shirt} alt="" />
                  </div>
                  <div className="categorytext">เสื้อผ้า</div>
                </div>
              </div>

              <div>
                <div style={{ padding: "5%" }}>
                  <div>
                    <img className="categorypic" src={shirt} alt="" />
                  </div>
                  <div className="categorytext">เสื้อผ้า</div>
                </div>
              </div>

              <div>
                <div style={{ padding: "5%" }}>
                  <div>
                    <img className="categorypic" src={shirt} alt="" />
                  </div>
                  <div className="categorytext">เสื้อผ้า</div>
                </div>
              </div>

              <div>
                <div style={{ padding: "5%" }}>
                  <div>
                    <img className="categorypic" src={shirt} alt="" />
                  </div>
                  <div className="categorytext">เสื้อผ้า</div>
                </div>
              </div>
            </Slider>
          </div>

          <div className="todaymenu">
            <Row>
              <Col>
              <h3> ดีลพิเศษประจำวัน</h3>
              </Col>
              <Col>
                <NavLink href="Flashsale" className="btn-seeall">
                  ดูทั้งหมด
                </NavLink>
              </Col>
            </Row>
            <Slider {...settings}>
              <div>
                <div style={{ padding: "5%", width: "100%" }}>
                  <Card>
                    <Card.Img variant="top" src={flash} />
                    <Card.Body>
                      <div>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                        <div className="disprice">ปกติ 5300 บาท</div>
                        <div className="redprice">3,200 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div>
                <div style={{ padding: "5%", width: "100%" }}>
                  <Card>
                    <Card.Img variant="top" src={flash1} />
                    <Card.Body>
                      <div>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                        <div className="disprice">ปกติ 5300 บาท</div>
                        <div className="redprice">3,200 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%", width: "100%" }}>
                  <Card>
                    <Card.Img variant="top" src={flash2} />
                    <Card.Body>
                      <div>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                        <div className="disprice">ปกติ 5300 บาท</div>
                        <div className="redprice">3,200 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%", width: "100%" }}>
                  <Card>
                    <Card.Img variant="top" src={flash3} />
                    <Card.Body>
                      <div>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                        <div className="disprice">ปกติ 5300 บาท</div>
                        <div className="redprice">3,200 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%", width: "100%" }}>
                  <Card>
                    <Card.Img variant="top" src={flash2} />
                    <Card.Body>
                      <div>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                        <div className="disprice">ปกติ 5300 บาท</div>
                        <div className="redprice">3,200 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Slider>
          </div>

          <div className="ads">
            <Container>
              <Row>
                <Col>
                  {" "}
                  <img className="ads175" src={ads1} alt="" />
                </Col>
              </Row>
            </Container>
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
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                      <div>
                        *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง
                        ขนาดหน้าปัด 30 mm
                        <div className="disprice">ปกติ 2990 บาท</div>
                        <div className="redprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                      <div>
                        *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง
                        ขนาดหน้าปัด 30 mm
                        <div className="disprice">
                          <br />
                        </div>
                        <div className="greenprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                      <div>
                        *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง
                        ขนาดหน้าปัด 30 mm
                        <div className="disprice">ปกติ 2990 บาท</div>
                        <div className="redprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                      <div>
                        *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง
                        ขนาดหน้าปัด 30 mm
                        <div className="disprice">ปกติ 2990 บาท</div>
                        <div className="redprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                      <div>
                        *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง
                        ขนาดหน้าปัด 30 mm
                        <div className="disprice">ปกติ 2990 บาท</div>
                        <div className="redprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                      <div>
                        *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง
                        ขนาดหน้าปัด 30 mm
                        <div className="disprice">ปกติ 2990 บาท</div>
                        <div className="redprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                      <div>
                        *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง
                        ขนาดหน้าปัด 30 mm
                        <div className="disprice">ปกติ 2990 บาท</div>
                        <div className="redprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Slider>
          </div>

          <div className="hotelmenu">
            <Row>
              <Col>
              <h3> โรงแรม+ที่พัก สำหรับคุณ</h3>
              </Col>
              <Col>
                <NavLink href="" className="btn-seeall">
                  ดูทั้งหมด
                </NavLink>
              </Col>
            </Row>
            <Slider {...hotel}>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={hotelpic} />
                    <Card.Body>
                      <div>
                        เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)
                        <div className="location">
                          <i className="fas fa-map-marker-alt"></i>
                          {""} กรุงเทพมหานคร,สุขุมวิท
                        </div>
                        <div className="detailprice">ราคารวม(ต่อเดือน)</div>
                        <div className="greenprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={hotelpic} />
                    <Card.Body>
                      <div>
                        เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)
                        <div className="location">
                          <i className="fas fa-map-marker-alt"></i>
                          {""} กรุงเทพมหานคร,สุขุมวิท
                        </div>
                        <div className="detailprice">ราคารวม(ต่อเดือน)</div>
                        <div className="greenprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={hotelpic} />
                    <Card.Body>
                      <div>
                        เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)
                        <div className="location">
                          <i className="fas fa-map-marker-alt"></i>
                          {""} กรุงเทพมหานคร,สุขุมวิท
                        </div>
                        <div className="detailprice">ราคารวม(ต่อเดือน)</div>
                        <div className="greenprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={hotelpic} />
                    <Card.Body>
                      <div>
                        เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)
                        <div className="location">
                          <i className="fas fa-map-marker-alt"></i>
                          {""} กรุงเทพมหานคร,สุขุมวิท
                        </div>
                        <div className="detailprice">ราคารวม(ต่อเดือน)</div>
                        <div className="greenprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={hotelpic} />
                    <Card.Body>
                      <div>
                        เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)
                        <div className="location">
                          <i className="fas fa-map-marker-alt"></i>
                          {""} กรุงเทพมหานคร,สุขุมวิท
                        </div>
                        <div className="detailprice">ราคารวม(ต่อเดือน)</div>
                        <div className="greenprice">1560 บาท</div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Slider>
          </div>

          <div className="ads">
            <Container>
              <Row>
                <Col>
                  {" "}
                  <img className="ads380" src={ads380} alt="" />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="today">
    
            <Row>
              <Col>
              <h3>E-voucher</h3>
              </Col>
              <Col>
                <NavLink href="" className="btn-seeall">
                  ดูทั้งหมด
                </NavLink>
              </Col>
            </Row>
            <Slider {...settings}>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={flash2} />
                    <Card.Body>
                      <Card.Text>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                      </Card.Text>
                      <Card.Text></Card.Text>
                      <Card.Text>3,200 บาท</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={flash3} />
                    <Card.Body>
                      <Card.Text>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                      </Card.Text>
                      <Card.Text></Card.Text>
                      <Card.Text>3,200 บาท</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={flash} />
                    <Card.Body>
                      <Card.Text>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                      </Card.Text>
                      <Card.Text></Card.Text>
                      <Card.Text>3,200 บาท</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={flash1} />
                    <Card.Body>
                      <Card.Text>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                      </Card.Text>
                      <Card.Text></Card.Text>
                      <Card.Text>3,200 บาท</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div style={{ padding: "5%" }}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={flash2} />
                    <Card.Body>
                      <Card.Text>
                        ดีลบิวตี้ Thai massage and tension release (Thai
                        maseeage + Foot massage)
                      </Card.Text>
                      <Card.Text></Card.Text>
                      <Card.Text>3,200 บาท</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Slider>
          </div>

          <div className="thailandmenu">
            <Row>
              <Col>
                <h3>สถานที่ท่องเที่ยวยอด</h3>
              </Col>
              <Col>
                <NavLink href="Province" className="btn-seeall">
                  ดูทั้งหมด
                </NavLink>
              </Col>
            </Row>

            <Tabs
              defaultActiveKey="central"
              id="uncontrolled-tab-example"
              className="mb-4"
            >
              <Tab eventKey="central" title="ภาคกลาง">
                <Thailand />
              </Tab>

              <Tab eventKey="north" title="ภาคเหนือ">
                <Thailand />
              </Tab>
              <Tab eventKey="northeast" title="ภาคตะวันออกเฉียง">
                <Thailand />
              </Tab>
              <Tab eventKey="west" title="ภาคตะวันตก">
                <Thailand />
              </Tab>
              <Tab eventKey="east" title="ภาคตะวันออก">
                <Thailand />
              </Tab>
              <Tab eventKey="south" title="ภาคใต้">
                <Thailand />
              </Tab>
            </Tabs>
          </div>

          <Container>
            <Row>
              <Col className="textregister">
                <h1>ลงทะเบียนร้านค้าออนไลน์ของคุณได้เลยฟรี</h1>
                <p>
                  เรามีร้านค้าท่องเที่ยวไทย มากกว่า 30 ร้านค้า สินค้าและบริการ
                  มากกว่า 300 รายการ ที่ส่งตรงจากทั่ว ประเทศไทย
                  ธุรกิจการจัดงานแสดงสินค้าด้านการท่องเที่ยวภายในประเทศไทย
                  ที่มีประสบการณ์ ยาวนานกว่า 20 ปี
                  สนใจเปิดร้านค้าของคุณได้ที่นี่ สมัครเลยวันนี้ฟรี
                </p>
                <Button variant="success" className="lg btn-start">
                  เริ่มต้นสมัคร
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}
