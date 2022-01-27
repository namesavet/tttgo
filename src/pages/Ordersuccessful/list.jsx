import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import product from "../../img/product1.jpg";
import "./ordersuccessful.css";

export class Ordersuccessful extends React.Component {
  render() {
    return (
      <Container>
        <div className="order-successful-bin">
          <div className="order-successful-head">
            <i className="fas fa-check-circle fa-3x"></i>
            <div className="order-text-successful-head"> คำสั่งซื้อสำเสร็จ</div>
            <div>
              ขอบคุณสำหรับการสั่งซื้อสินค้า สามารถเช็คสถานะการจัดส่งที่เลข
              tacking
            </div>
          </div>
          <div className="order-successful-tecking-bg">
            <Row style={{ fontSize: "15px", color: "gray" }}>
              <Col xs={12} md={8}>
                หมายเลขการจอง : 564403517
              </Col>
              <Col xs={12} md={4}>
                สั่งซื้อเมื่อวันที่ : 27/05/2021
              </Col>
            </Row>
            <div style={{ fontSize: "17px" }}>
              Standard Delivery | หมายเลขสถานะการจัดส่ง EN211765929715TH
            </div>
          </div>
          <div
            className="order-successful-address-bg"
            style={{ fontSize: "15px" }}
          >
            <h5>ที่อยู่ในการจัดส่ง</h5>
            <b>กาญจนาพรรณ ธาตุตกุลมาร 090-001-2001</b>
            <div>
              110 คอนโดใหม่ ซอยโรหิตสุข ถ.ประชาราฏบำเพ็ญ ซอย 5 เขตห้วยขวาง
              จังหวัดกรุงเทพมหานตร 10310
            </div>
          </div>

          <div className="order-successful-store">
            <Row
              className="order-successful-store-name"
              style={{ fontSize: "15px" }}
            >
              <Col xs={8} md={10}>
                <i className="fas fa-store" style={{ color: "gray" }}></i>
                {"  "}ร้าน ของที่ระลึกเที่ยวไทย ณ อยุธยา
              </Col>
              <Col xs={4} md={2} style={{ textAlign: "end" }}>
                2 รายการ
              </Col>
            </Row>

            <Row className="" style={{ marginTop: "10px" }}>
              <Col xs={8} md={9}>
                <Row className="" style={{ marginTop: "10px" }}>
                  <Col xs={3} md={2}>
                    <img src={product} alt="" style={{ width: "100%" }} />
                  </Col>
                  <Col xs={5} md={7}>
                    <div>
                      กระเป๋าเดินทาง LOJELL LUGGAGE ขนาดพิเศษ LJCF1638
                      สีขาวไซส์28
                    </div>
                    <div style={{ fontSize: "13px", color: "gray" }}>
                      ตัวเลือกสินค้า : HM50GL+footrest
                    </div>
                  </Col>
                  <Col xs={3} md={3} style={{ textAlign: "center" }}>
                    <div className="bg-num-x">x1</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={4} md={3} style={{ textAlign: "end" }}>
                <div className="disprice">4400 บาท</div>
                <div className="redprice">2599 บาท</div>
              </Col>
            </Row>
            <Row className="" style={{ marginTop: "10px" }}>
              <Col xs={8} md={9}>
                <Row className="" style={{ marginTop: "10px" }}>
                  <Col xs={3} md={2}>
                    <img src={product} alt="" style={{ width: "100%" }} />
                  </Col>
                  <Col xs={5} md={7}>
                    <div>
                      กระเป๋าเดินทาง LOJELL LUGGAGE ขนาดพิเศษ LJCF1638
                      สีขาวไซส์28
                    </div>
                    <div style={{ fontSize: "13px", color: "gray" }}>
                      ตัวเลือกสินค้า : HM50GL+footrest
                    </div>
                  </Col>
                  <Col xs={3} md={3} style={{ textAlign: "center" }}>
                    <div className="bg-num-x">x1</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={4} md={3} style={{ textAlign: "end" }}>
                <div className="disprice"></div>
                <div className="greenprice">720 บาท</div>
              </Col>
            </Row>
          </div>

          <div className="order-successful-store">
            <Row
              className="order-successful-store-name"
              style={{ fontSize: "15px" }}
            >
              <Col xs={8} md={10}>
                <i className="fas fa-store" style={{ color: "gray" }}></i>
                {"  "}ร้าน ของที่ระลึกเที่ยวไทย ณ อยุธยา
              </Col>
              <Col xs={4} md={2} style={{ textAlign: "end" }}>
                1 รายการ
              </Col>
            </Row>

            <Row className="" style={{ marginTop: "10px" }}>
              <Col xs={8} md={9}>
                <Row className="" style={{ marginTop: "10px" }}>
                  <Col xs={3} md={2}>
                    <img src={product} alt="" style={{ width: "100%" }} />
                  </Col>
                  <Col xs={5} md={7}>
                    <div>
                      กระเป๋าเดินทาง LOJELL LUGGAGE ขนาดพิเศษ LJCF1638
                      สีขาวไซส์28
                    </div>
                    <div style={{ fontSize: "13px", color: "gray" }}>
                      ตัวเลือกสินค้า : HM50GL+footrest
                    </div>
                  </Col>
                  <Col xs={3} md={3} style={{ textAlign: "center" }}>
                    <div className="bg-num-x">x1</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={4} md={3} style={{ textAlign: "end" }}>
                <div className="disprice">4400 บาท</div>
                <div className="redprice">2599 บาท</div>
              </Col>
            </Row>
          </div>


        </div>

        <div className="order-successful-pay">
          <div className="order-successful-head-pay">
            <Row>
              <Col xs={6} md={8} style={{ fontSize: "15px" }}>
                การชำระเงิน
              </Col>
              <Col xs={6} md={4} style={{ textAlign: "end", fontSize: "16px" }}>
                บัตรเครดิต / เดบิต *8639
              </Col>
            </Row>
          </div>
          <div className="order-successful-detail-pay">
            <Row style={{ marginBottom: "15px" }}>
              <Col xs={6} md={8}>
                รายการสั่งซื้อ (จำนวน x3)
              </Col>
              <Col xs={6} md={4} style={{ textAlign: "end" }}>
                3,319 บาท
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col xs={6} md={8}>
                ค่าจัดส่ง
              </Col>
              <Col xs={6} md={4} style={{ textAlign: "end" }}>
                22 บาท
              </Col>
            </Row>
          </div>
          <div className="order-successful-total-pay">
            <Row style={{ fontSize: "large", fontWeight: "bold" }}>
              <Col xs={6} md={8}>
                <div> รวม</div>
              </Col>
              <Col
                xs={6}
                md={4}
                style={{ textAlign: "end", marginBottom: "15px" }}
              >
                <div> 3,341 บาท</div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col xs={6} md={8}>
                Go Point ที่ได้รับ
              </Col>
              <Col xs={6} md={4} style={{ textAlign: "end" }}>
                20 Point
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}
