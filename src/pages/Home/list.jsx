import React from "react";
import Slider from "react-slick";
import {
  Card,
  Tabs,
  Tab,
  Row,
  Col,
  Button,
  ListGroup,
  Container,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Footmenu from "../../components/footmenu.js";

import ads175 from "../../img/ads.jpg";
import ads380 from "../../img/ads380.jpg";
import hotelpic from "../../img/hotel.jpg";
import first from "../../img/first.jpg";
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
    };
    return (
      <div>
        <div className="">
          <Slider {...toptravel}>
            <div>
              <div style={{ padding: "3%" }}>
                <div>
                  <img className="thaipic" src={thai} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div>
                  <img className="thaipic" src={thai} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div>
                  <img className="thaipic" src={thai} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div>
                  <img className="thaipic" src={thai} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div>
                  <img className="thaipic" src={thai} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div>
                  <img className="thaipic" src={thai} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div>
                  <img className="thaipic" src={thai} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div>
                  <img className="thaipic" src={thai} alt="" />
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
    };
    const category = {
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
    };
    const promotion = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    const hotel = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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

        <div className="layoutmenubtn">
          <article className="col-12  " >
            <nav>
              <div className="row tabbtnmenu ">
                <div className=" col-lg-3 testmenu">
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
                </div>
              </div>
            </nav>
          </article>
        </div>

        <div className="category">
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

        <div className="today">
          <Row>
            <Col>
              <h3> ดีลพิเศษประจำวัน</h3>
            </Col>
            <Col className="textseeall">ดูทั้งหมด</Col>
          </Row>
          <Slider {...settings}>
            <div>
              <div style={{ padding: "5%", width: "100%" }}>
                <Card>
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <div>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
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
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <div>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
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
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <div>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
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
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <div>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
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
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <div>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
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
                <img className="ads175" src={ads175} alt="" />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="today">
          <Row>
            <Col>
              <h3> สินค้าราคาพิเศษ</h3>
            </Col>
            <Col className="textseeall">ดูทั้งหมด</Col>
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

        <div className="hotel">
          <Row>
            <Col>
              <h3> โรงแรม+ที่พัก สำหรับคุณ</h3>
            </Col>
            <Col className="textseeall">ดูทั้งหมด</Col>
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
                      <i class="fas fa-map-marker-alt"></i>
                      {""}  กรุงเทพมหานคร,สุขุมวิท</div>
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
                      <i class="fas fa-map-marker-alt"></i>
                      {""}  กรุงเทพมหานคร,สุขุมวิท</div>
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
                      <i class="fas fa-map-marker-alt"></i>
                      {""}  กรุงเทพมหานคร,สุขุมวิท</div>
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
                      <i class="fas fa-map-marker-alt"></i>
                      {""}  กรุงเทพมหานคร,สุขุมวิท</div>
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
                      <i class="fas fa-map-marker-alt"></i>
                      {""}  กรุงเทพมหานคร,สุขุมวิท</div>
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
              {" "}
              <h3>E-voucher</h3>
            </Col>
            <Col className="textseeall">ดูทั้งหมด</Col>
          </Row>

          <Slider {...settings}>
            <div>
              <div style={{ padding: "5%" }}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <Card.Text>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
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
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <Card.Text>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
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
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <Card.Text>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
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
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <Card.Text>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
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
                  <Card.Img variant="top" src={first} />
                  <Card.Body>
                    <Card.Text>
                      ดีลบิวตี้ Thai massage and tension release (Thai maseeage
                      + Foot massage)
                    </Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text>3,200 บาท</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Slider>
        </div>

        <div className="thailand">
          <Row>
            <Col>
              <h3>สถานที่ท่องเที่ยวยอด</h3>
            </Col>
            <Col className="textseeall">ดูทั้งหมด</Col>
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
                มากกว่า 300 รายการ ที่ส่งตรงจากทั่ว
              </p>
              <p>
                ประเทศไทย
                ธุรกิจการจัดงานแสดงสินค้าด้านการท่องเที่ยวภายในประเทศไทย
                ที่มีประสบการณ์ ยาวนานกว่า 20 ปี
              </p>
              <p>สนใจเปิดร้านค้าของคุณได้ที่นี่ สมัครเลยวันนี้ฟรี</p>
              <Button variant="success" className="lg">
                เริ่มต้นสมัคร
              </Button>{" "}
            </Col>
          </Row>
        </Container>

        <div className="footmenu">
          <Footmenu></Footmenu>
        </div>
      </div>
    );
  }
}
