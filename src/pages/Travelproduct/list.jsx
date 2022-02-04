import React from "react";
import {
  Row,
  Tab,
  Col,
  Container,
  Nav,
  NavLink,
  Breadcrumb,
  Card,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "./travelproduct.css";
import ads1400 from "../../img/ads1400.jpg";
import logo401 from "../../img/logoproduct/4001.png";
import logo402 from "../../img/logoproduct/4002.png";
import logo403 from "../../img/logoproduct/4003.png";
import logo404 from "../../img/logoproduct/4004.png";
import shirt from "../../img/category/shirt.png";
import product from "../../img/product1.jpg";
import SearchTab from "../../components/SearchTab";

export class Travelproduct extends React.Component {
  render() {
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
    return (

      <div>
        <div className="head-productTraval mt-3 mb-3">
          <SearchTab/>
</div>
      <Container>

        <ul className="breadcrumb">
          <li>
            <a href="/">หน้าแรก</a>
          </li>
          <li>       สินค้าประจำวัน</li>
        </ul>



        <div className="ads">
          <Container>
            <Row>
              <Col>
                {" "}
                <img className="ads380" src={ads1400} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
        <Row>
          <Col>
            <h5>ร้านค้าที่เข้าร่วมรายการ</h5>
          </Col>
          <Col>
            <NavLink href="" className="btn-seeall">
              ดูทั้งหมด
            </NavLink>
          </Col>
        </Row>
        <div className="row">
          <div className="col-3  col-md  col-xl  logoproduct-top">
            <img src={logo401} alt="" className="pic100per" />
          </div>
          <div className="col-3  col-md  col-xl logoproduct-top">
            <img src={logo402} alt="" className="pic100per" />
          </div>
          <div className="col-3  col-md  col-xl logoproduct-top">
            <img src={logo403} alt="" className="pic100per" />
          </div>
          <div className="col-3  col-md  col-xl logoproduct-top">
            <img src={logo404} alt="" className="pic100per" />
          </div>
          <div className="col-3  col-md col-xl logoproduct-top">
            <img src={logo404} alt="" className="pic100per" />
          </div>
          <div className="col-3  col-md col-xl logoproduct-top">
            <img src={logo403} alt="" className="pic100per" />
          </div>
          <div className="col-3  col-md col-xl logoproduct-top">
            <img src={logo402} alt="" className="pic100per" />
          </div>
          <div className="col-3  col-md  col-xl logoproduct-top">
            <img src={logo401} alt="" className="pic100per" />
          </div>
        </div>
        <Container>
          <Breadcrumb className="province-head-path">
            <Breadcrumb.Item href="/">หน้าแรก</Breadcrumb.Item>
            <Breadcrumb.Item href="" active>
              สินค้าประจำวัน
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className="ads">
            <Container>
              <Row>
                <Col>
                  {" "}
                  <img className="ads380" src={ads1400} alt="" />
                </Col>
              </Row>
            </Container>
          </div>
          <Row>
            <Col>
              <h5>ร้านค้าที่เข้าร่วมรายการ</h5>
            </Col>
            <Col>
              <NavLink href="" className="btn-seeall">
                ดูทั้งหมด
              </NavLink>
            </Col>
          </Row>
          <div className="row">
            <div className="col-3  col-md  col-xl  logoproduct-top">
              <img src={logo401} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md  col-xl logoproduct-top">
              <img src={logo402} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md  col-xl logoproduct-top">
              <img src={logo403} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md  col-xl logoproduct-top">
              <img src={logo404} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md col-xl logoproduct-top">
              <img src={logo404} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md col-xl logoproduct-top">
              <img src={logo403} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md col-xl logoproduct-top">
              <img src={logo402} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md  col-xl logoproduct-top">
              <img src={logo401} alt="" className="pic100per" />
            </div>
          </div>

          <div className="row ">
            <div className="col-3  col-md  col-xl  logoproduct-bottom">
              <img src={logo401} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md  col-xl  logoproduct-bottom">
              <img src={logo402} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md  col-xl  logoproduct-bottom">
              <img src={logo403} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md  col-xl  logoproduct-bottom">
              <img src={logo404} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md col-xl  logoproduct-bottom">
              <img src={logo404} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md col-xl  logoproduct-bottom">
              <img src={logo403} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md col-xl  logoproduct-bottom">
              <img src={logo402} alt="" className="pic100per" />
            </div>
            <div className="col-3  col-md  col-xl  logoproduct-bottom">
              <img src={logo401} alt="" className="pic100per" />
            </div>
          </div>

          <div className="categorymenu">
            <h5>หมวดหมู่สินค้า</h5>
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

        <h5 style={{marginTop:"30px"}}>สินค้าท่องเที่ยวแนะนำ</h5>
        <div className="row  flashsale" style={{ listStyle: "none" }}>
          <li className="flashdetail-product-col">
          <Card className="flashdetail-product">
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <div>
                      *CASIO* นาฬิกาสายเลส มีกล่องครบชุด 
                      <div className="disprice">ปกติ 2990 บาท</div>
                      <div className="redprice">1560 บาท</div>
                    </div>
                  </Card.Body>
                </Card>
          </li>
          <li className="flashdetail-product-col">
          <Card className="flashdetail-product">
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <div>
                      *CASIO* นาฬิกาสายเลส มีกล่องครบชุด 
                      <div className="disprice">ปกติ 2990 บาท</div>
                      <div className="redprice">1560 บาท</div>
                    </div>
                  </Card.Body>
                </Card>
          </li>
          <li className="flashdetail-product-col">
          <Card className="flashdetail-product">
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <div>
                      *CASIO* นาฬิกาสายเลส มีกล่องครบชุด 
                      <div className="disprice">ปกติ 2990 บาท</div>
                      <div className="redprice">1560 บาท</div>
                    </div>
                  </Card.Body>
                </Card>
          </li>
          <li className="flashdetail-product-col">
          <Card className="flashdetail-product">
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <div>
                      *CASIO* นาฬิกาสายเลส มีกล่องครบชุด 
                      <div className="disprice">ปกติ 2990 บาท</div>
                      <div className="redprice">1560 บาท</div>
                    </div>
                  </Card.Body>
                </Card>
          </li>
          <li className="flashdetail-product-col">
          <Card className="flashdetail-product">
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <div>
                      *CASIO* นาฬิกาสายเลส มีกล่องครบชุด 
                      <div className="disprice">ปกติ 2990 บาท</div>
                      <div className="redprice">1560 บาท</div>
                    </div>
                  </Card.Body>
                </Card>
          </li>
          
        </div>
      </Container>
      </div>
    );
  }
}
