import React, { useEffect, useState } from "react";
import {
  Card,
  Tabs,
  Tab,
  Breadcrumb,
  Container,
  Button,
  Form,
  Row,
  Col,
  Pagination,
  ButtonGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import product from "../../img/product1.jpg";
import "./travelproductdetail.css";
import { Imgproduct } from "./Imgproduct";
import ToggleButton from "react-bootstrap/ToggleButton";

function Btnchoosecolor() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "HM50GL+footrest", value: "1" },
    { name: "HM50GL+footrest", value: "2" },
  ];
  return (
    <div>
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            className="btn-travelproductdetail-color"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export class Travelproductdetail extends React.Component {
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
      <div className="bg-travelproductdetail">
        <Container>
          <ul className="breadcrumb">
            <li>
              <a href="/">หน้าแรก</a>
            </li>
            <li>
              <a href="/Travelproduct">สินค้าประจำวัน</a>
            </li>
            <li> กระเป๋าเดินทาง LOJELL LUGGAGE LJCF1638 สีขาวไซส์28</li>
          </ul>

         
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-xs-16 col-md-6"> <Imgproduct /></div>
            <div className="col-xs-16 col-md-6">
              <h5>
                กระเป๋าเดินทาง LOJELL LUGGAGE ขนาดพิเศษ LJCF1638 สีขาวไซส์28
              </h5>
              <div className="row travelproduct-item-number">
                <div className="col">หมายเลขสินค้า : 2929384</div>
                <div className="col">แชร์ : </div>
              </div>
              <div className="row travelproductdetail-price">
                <div className="col-3" style={{ marginTop: "20px" }}>
                  ราคา
                </div>
                <div className="col">
                  <div className="travelproduct-disprice">
                    ปกติ 2400-4490 บาท{" "}
                  </div>
                  <div className="travelproduct-redprice">1590-2590 บาท</div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-3"> Go point</div>
                <div className="col">รับสูงสุด 50 Go Point</div>
              </div>

              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-3">โดย</div>
                <div className="col travelproduct-store">
                  ร้าน ของที่ระลึกเที่ยวไทยโก
                </div>
              </div>

              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col col-md-2 col-lg-3">สี</div>
                <div className="col col-md-6 col-lg-6">
                  <div>
                    <Btnchoosecolor />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-3">จำนวน</div>
                <div className="col">
                  <li>
                    <button
                      className="decreaseNumber btn-decreaseNumber"
                      onClick={this.DecreaseItem}
                    >
                      -
                    </button>

                    <input
                      name="clicks input-num-product"
                      value={this.state.clicks}
                      onChange={this.handleChange.bind(this)}
                      style={{
                        textAlign: "center",             
                        borderLeft:"none",
                        borderRight:"none",
                        borderTop:"1px solid #E8E8E8",
                        borderBottom:"1px solid #E8E8E8",
                        height: "30px",
                        width:"15%",
                      }}
                    />

                    <button
                      className="incrementNumber btn-incrementNumber"
                      onClick={this.IncrementItem}
                    >
                      +
                    </button>
                  </li>
                </div>
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-3">วิธีจัดส่ง</div>
                <div className="col">
                  จัดส่งทั่วไป ถึงภายใน 3 วัน (ไม่รวมวันหยุด)
                </div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-4">
                  {" "}
                  <Button
                    variant="success"
                    className="lg travelproduct-btn-buy"
                  >
                    ซื้อสินค้า
                  </Button>{" "}
                </div>
                <div className="col-4">
                  {" "}
                  <Button
                    variant="success"
                    className="lg travelproduct-btn-add"
                  >
                    เพิ่มลงรถเข็น
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-xs-12 col-md-8">
              {" "}
              <div className="content-travelproductdetail">
                <Tabs
                  defaultActiveKey="travelproduct-detail"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3 travelproductdetail-tab"
                >
                  <Tab eventKey="travelproduct-detail" title="รายละเอียดสินค้า">
                    <div className="boder-content-travelproduct">
                      <div className="content-travelproduct-detail">
                        <p>กระเป๋าเดินทางผลิตจากวัสดุ PC Polycarbonate</p>
                        <p>
                          {" "}
                          ล้อสามารถหมุนได้ 360องศา น้ำหนักเบาแข็งแรงทนทานกันน้ำ
                        </p>
                        <p> ระบบคันชักทำมาจาก อลูมิเนียมสังเคราะห์</p>
                        <p>มีความปลอดภัยด้วยระบบล็อค TSA</p>
                        <p>
                          {" "}
                          สายคาดสัมภาระและแผงกั้นภายในเพื่อความง่ายในการจัดเก็บ
                        </p>
                        <p>
                          ช่องกระเป๋าพร้อมซิปรูดเพิ่มประสิทธิภาพในการจัดเก็บสัมภาระ
                        </p>
                        <p>ระหว่างการเดินทาง SafePlux™ ซิปคู่</p>
                        <p>ป้องกันการโจรกรรมสิ่งของสัมภาระในกระเป๋าเดินทาง</p>
                        <b>รับประกัน : </b>
                        <p>1 ปี (รับประกันล้อลาก มือจับ คันลากและตัวล็อค)</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="travelproduct-more-detail"
                    title="ข้อมูลเพิ่มเติม"
                  >
                    <div className="boder-content-travelproduct">
                      <div className="content-travelproduct-detail">
                        Dimensions : 55 x 39 x 24 cm
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>

            <div className="col-xs-6 col-md-4" style={{ marginTop: "3.3%" }}>
              <div className="travelproduct-sellby">
                <div style={{ padding: "15px" }}>
                  <div
                    className="row"
                    style={{
                      borderBottom: "1px solid",
                      borderColor: "#dee2e6",
                      paddingBottom: "10px",
                    }}
                  >
                    <div
                      className="col-sx-6  col-md-12 col-lg-5"
                      style={{ marginTop: "5px" }}
                    >
                      <b>จำหน่ายโดย</b>
                    </div>
                    <div
                      className="col-sx-6 col-md-12  col-lg-7"
                      style={{ marginTop: "5px" }}
                    >
                      <li>
                        <Button
                          style={{ fontSize: "12px" }}
                          variant="outline-success"
                        >
                          <i className="far fa-comment-alt"></i> แชท
                        </Button>
                        <Button
                          style={{ fontSize: "12px", marginLeft: "2%" }}
                          variant="outline-secondary"
                        >
                          <i className="fas fa-store"></i> ดูร้านค้า
                        </Button>
                      </li>
                    </div>
                    <div
                      className="travelproduct-store"
                      style={{ marginTop: "5px" }}
                    >
                      ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา
                    </div>
                  </div>

                  <div className="row" style={{ paddingTop: "10px" }}>
                    <div className="col-4">รายการสินค้า</div>
                    <div className="col">306 รายการ</div>
                  </div>
                  <div className="row">
                    <div className="col-4">อัพเดตล่าสุด</div>
                    <div className="col">12/02/2021 14:04</div>
                  </div>
                  <div className="row">
                    <div className="col-4">ประเภทร้านค้า</div>
                    <div className="col">สินค้า OTOP</div>
                  </div>
                  <div className="row">
                    <div className="col-4">จังหวัด</div>
                    <div className="col">เชียงใหม่</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="travelproduct-content-review">
            <h5>รีวิวจากลูกค้า</h5>
            <div className="travelproduct-review">
              <div className="row travelproduct-review-row">
                <div className="col-3 col-md-2 travelproduct-review-point">
                  <b className="travelproduct-review-getpoint">4.9</b>/5
                </div>
                <div className="col col-md-8">
                  <h5>คุณนิยมยอด ธรรมชาติ</h5>
                  <div className="travelproduct-review-detail">
                    ส่งเร็วปานกลางสินค้าเหมาะกับราคา ได้ของครบถ้วนส่งเร็วปานกลาง
                    ส่งเร็วปานกลางสินค้าเหมาะกับราคา ได้ของครบถ้วนส่งเร็วปานกลาง
                    ส่งเร็วปานกลางสินค้าเหมาะกับราคา ได้ของครบถ้วนส่งเร็วปานกลาง
                  </div>
                  <div className="travelproduct-review-date">
                    รีวิวเมื่อ 24 กรกฏาคม 2020
                  </div>
                </div>
              </div>
            </div>

            <div className="travelproduct-review">
              <div className="row travelproduct-review-row">
                <div className="col-3 col-md-2 travelproduct-review-point">
                  <b className="travelproduct-review-getpoint">4.9</b>/5
                </div>
                <div className="col col-md-8">
                  <h5>คุณนิยมยอด ธรรมชาติ</h5>
                  <div className="travelproduct-review-detail">
                    ส่งเร็วปานกลางสินค้าเหมาะกับราคา ได้ของครบถ้วนส่งเร็วปานกลาง
                    ส่งเร็วปานกลางสินค้าเหมาะกับราคา ได้ของครบถ้วนส่งเร็วปานกลาง
                    ส่งเร็วปานกลางสินค้าเหมาะกับราคา ได้ของครบถ้วนส่งเร็วปานกลาง
                  </div>
                  <div className="travelproduct-review-date">
                    รีวิวเมื่อ 24 กรกฏาคม 2020
                  </div>
                </div>
              </div>
            </div>

            <div className="travelproduct-review">
              <div className="row travelproduct-review-row">
                <div className="col-3 col-md-2 travelproduct-review-point">
                  <b className="travelproduct-review-getpoint">4.0</b>/5
                </div>
                <div className="col col-md-8">
                  <h5>คุณนิยมยอด ธรรมชาติ</h5>
                  <div className="travelproduct-review-detail">
                    ส่งเร็วปานกลางสินค้าเหมาะกับราคา ได้ของครบถ้วนส่งเร็วปานกลาง
                    ส่งเร็วปานกลางสินค้าเหมาะกับราคา ได้ของครบถ้วนส่งเร็วปานกลาง
                    ส่งเร็วปานกลางสินค้าเหมาะกับราคา ได้ของครบถ้วนส่งเร็วปานกลาง
                  </div>
                  <div className="travelproduct-review-date">
                    รีวิวเมื่อ 24 กรกฏาคม 2020
                  </div>
                </div>
              </div>
            </div>

            <Pagination className="travelproduct-page-review">
              <Pagination.Item className="page-review" active>
                {1}
              </Pagination.Item>
              <Pagination.Item className="page-review">{2}</Pagination.Item>
              <Pagination.Item className="page-review">{3}</Pagination.Item>
              <Pagination.Ellipsis className="page-review" />
              <Pagination.Next className="page-review" />
              <Pagination.Last className="page-review" />
            </Pagination>
          </div>

          <div className="travelproduct-near">
            <h5>สินค้าท่องเที่ยวแนะนำ</h5>
            <div className="row ">
              <div className="col">
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
              <div className="col">
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
              <div className="col">
                {" "}
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
              <div className="col">
                {" "}
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
              <div className="col">
                {" "}
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
          </div>
        </Container>
      </div>
    );
  }
}
