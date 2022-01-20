import React from "react";
import Slider from "react-slick";
import {
  Card,
  Tabs,
  Tab,
  Breadcrumb,
  Container,
  Pagination,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import flash from "../../img/flash.jpg";
import flash1 from "../../img/flash1.jpg";
import flash2 from "../../img/flash2.jpg";
import flash3 from "../../img/flash3.jpg";
import thai from "../../img/thai.jpg";
import north from "../../img/north.jpg";
import "./travelproductdetail.css";

export class Travelproductdetail extends React.Component {
  render() {
    return (
      <div className="bg-travelproductdetail">
        <Container>
          <Breadcrumb className="travelproductdetail-head-path">
            <Breadcrumb.Item href="/">หน้าแรก</Breadcrumb.Item>
            <Breadcrumb.Item href="/Travelproduct">
              สินค้าประจำวัน
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" active>
              กระเป๋าเดินทาง LOJELL LUGGAGE LJCF1638 สีขาวไซส์28
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className="row">
            <div className="col-xs-16 col-md-6">wda</div>
            <div className="col-xs-16 col-md-6">
              <h5>
                กระเป๋าเดินทาง LOJELL LUGGAGE ขนาดพิเศษ LJCF1638 สีขาวไซส์28
              </h5>
              <div className="row">
                <div className="col">หมายเลขสินค้า:2929384</div>
                <div className="col">แชร์:</div>
              </div>
              <div className="row">
                <div className="col-3">ราคา</div>
                <div className="col">
                  <div>5690</div>
                  <div>1590</div>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <div>Go point</div>
                  <div>โดย</div>
                  <div>สี</div>
                  <div>จำนวน</div>
                  <div>วิธีจัดส่ง</div>
                </div>
                <div className="col">
                <div>รับสูงสุด 50 Go Point</div>
                  <div>ร้าน ของที่ระลึกเที่ยวไทยโก</div>
                  <div>สี</div>
                  <div> <Form.Control size="sm" type="number" placeholder="Small text" /></div>
                  <div>วิธีจัดส่ง</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
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
                          ล้อสามารถหมุนได้ 360องศา น้ำหนักเบาแข็งแรงทนทานกันน้ำ
                        </p>
                        <p> ระบบคันชักทำมาจาก อลูมิเนียมสังเคราะห์</p>
                        <p>มีความปลอดภัยด้วยระบบล็อค TSA</p>
                        <p>
                          {" "}
                          สายคาดสัมภาระและแผงกั้นภายในเพื่อความง่ายในการจัดเก็บ
                        </p>
                        <p>
                          {" "}
                          ช่องกระเป๋าพร้อมซิปรูดเพิ่มประสิทธิภาพในการจัดเก็บสัมภาระ
                        </p>
                        <p> ระหว่างการเดินทาง SafePlux™ ซิปคู่</p>
                        <p> ป้องกันการโจรกรรมสิ่งของสัมภาระในกระเป๋าเดินทาง</p>
                        <b> รับประกัน : </b>
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

            <div className="col-xs-6 col-md-4 travelproduct-sellby">
              <div
                className="row"
                style={{
                  borderBottom: "1px solid",
                  borderColor: "#dee2e6",
                  padding: "15px",
                }}
              >
                <div className="col-xs-12 col-md-8">
                  <b>จำหน่ายโดย</b>
                  <div>ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา</div>
                </div>
                <div className="col-xs-6 col-md-4">ฟ กฟ กฟ กฟ</div>
              </div>

              <div className="row">รายการสินค้า</div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
