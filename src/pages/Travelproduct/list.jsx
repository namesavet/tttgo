import React from "react";
import { Row, Col, Container, NavLink, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./travelproduct.css";
import ads1400 from "../../img/ads1400.jpg";
import logo401 from "../../img/logoproduct/4001.png";
import logo402 from "../../img/logoproduct/4002.png";
import logo403 from "../../img/logoproduct/4003.png";
import logo404 from "../../img/logoproduct/4004.png";
import product from "../../img/product1.jpg";
import { Category } from "../Home/Category";

export class Travelproduct extends React.Component {
  render() {
    return (
      <Container>
        <ul className="breadcrumb">
          <li>
            <a href="/">หน้าแรก</a>
          </li>
          <li> สินค้าประจำวัน</li>
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
          <Category />
        </div>

        <h5 style={{ marginTop: "30px" }}>สินค้าท่องเที่ยวแนะนำ</h5>
        <div className="row  flashsale" style={{ listStyle: "none" }}>
          <li className="col-4 col-md-3 col-lg-2 ">
            <NavLink href="/Travelproductdetail" className="Nav-link">
              <Card className="flashdetail-product ">
                <Card.Img variant="top" src={product} />
                <Card.Body>
                  <div>
                    <p className="texthid">
                      {" "}
                      *CASIO* นาฬิกาสายเลส มีกล่องครบชุด
                    </p>
                    <div className="disprice">ปกติ 2990 บาท</div>
                    <div className="redprice">1560 บาท</div>
                  </div>
                </Card.Body>
              </Card>
            </NavLink>
          </li>
          <li className="col-4 col-md-3 col-lg-2">
            <Card className="flashdetail-product">
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <div>
                  <p className="texthid"> *CASIO* นาฬิกาสายเลส มีกล่องครบชุด</p>
                  <div className="disprice">ปกติ 2990 บาท</div>
                  <div className="redprice">1560 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-4 col-md-3 col-lg-2">
            <Card className="flashdetail-product">
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <div>
                  <p className="texthid"> *CASIO* นาฬิกาสายเลส มีกล่องครบชุด</p>
                  <div className="disprice">ปกติ 2990 บาท</div>
                  <div className="redprice">1560 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-4 col-md-3 col-lg-2">
            <Card className="flashdetail-product">
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <div>
                  <p className="texthid"> *CASIO* นาฬิกาสายเลส มีกล่องครบชุด</p>
                  <div className="disprice">ปกติ 2990 บาท</div>
                  <div className="redprice">1560 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-4 col-md-3 col-lg-2">
            <Card className="flashdetail-product">
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <div>
                  <p className="texthid"> *CASIO* นาฬิกาสายเลส มีกล่องครบชุด</p>
                  <div className="disprice">ปกติ 2990 บาท</div>
                  <div className="redprice">1560 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-4 col-md-3 col-lg-2">
            <Card className="flashdetail-product">
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <div>
                  <p className="texthid"> *CASIO* นาฬิกาสายเลส มีกล่องครบชุด</p>
                  <div className="disprice">ปกติ 2990 บาท</div>
                  <div className="redprice">1560 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-4 col-md-3 col-lg-2">
            <Card className="flashdetail-product">
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <div>
                  <p className="texthid"> *CASIO* นาฬิกาสายเลส มีกล่องครบชุด</p>
                  <div className="disprice">ปกติ 2990 บาท</div>
                  <div className="redprice">1560 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-4 col-md-3 col-lg-2">
            <Card className="flashdetail-product">
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <div>
                  <p className="texthid"> *CASIO* นาฬิกาสายเลส มีกล่องครบชุด</p>
                  <div className="disprice">ปกติ 2990 บาท</div>
                  <div className="redprice">1560 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-4 col-md-3 col-lg-2">
            <Card className="flashdetail-product">
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <div>
                  <p className="texthid"> *CASIO* นาฬิกาสายเลส มีกล่องครบชุด</p>
                  <div className="disprice">ปกติ 2990 บาท</div>
                  <div className="redprice">1560 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
        </div>
      </Container>
    );
  }
}
