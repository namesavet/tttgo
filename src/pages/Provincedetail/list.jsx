import React from "react";
import Slider from "react-slick";
import {
  Card,
  Tabs,
  Tab,
  Breadcrumb,
  Container,
  Pagination,
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
import "./provincedetail.css";

export class Provincedetail extends React.Component {
  render() {
    return (
      <Container>
        <Breadcrumb className="province-head-path">
          <Breadcrumb.Item href="/">หน้าแรก</Breadcrumb.Item>
          <Breadcrumb.Item href="/Province">ชลบุรี</Breadcrumb.Item>
          <Breadcrumb.Item href="" active>
            Great & Grand Sweet Destination
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="row">
          <li className="col-sm-16 col-md-5 provincedetail-img">
           
              <img src={flash} alt="" width={"100%"} />
           
          </li>
          <li className="col-sm-16 col-md-5 provincedetail-img">
            
              <img src={flash} alt="" width={"100%"} />
           
          </li>
          <li className="col-sm-16 col-md-2 provincedetail-img">
            
              <img src={flash} alt="" width={"100%"} />
              <img src={flash} alt="" width={"100%"} />
          </li>
        </div>

        <div className="provincedetail-body">
          <Row>
            <Col xs={12} md={8}>
              <li>
                <h4>Great & Grand Sweet Destination</h4>
              </li>
              <li className="provincetitel-location">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "rgb(0, 204, 255)" }}
                ></i>{" "}
                เมืองพัทยา อำเภอแหลมฉบัง
              </li>
            </Col>
            <Col xs={6} md={4}>
              <li>แชร์ :</li>
            </Col>
          </Row>

          <div className="provincetitel-title-price">
            <h4>บัตรเข้าชมเมืองไอศครีม</h4>
          </div>
          <div>
            <li>
              ผู้ใหญ่ วันธรรมดา 99 บาท วันเสาร์อาทิตย์และนักขัตฤกษ์ 120 บาท
            </li>

            <li>
              เด็กที่สูงต่ำกว่า 100 ซ.ม. เข้าฟรีทุกวัน เกิน 100 ซ.ม. 66 บาท
            </li>
          </div>

          <h4 className="provincetitel-title-price">ข้อมูลสถานที่</h4>
          <div className="provincedetail-detail">
            ตั้งอยู่ไม่ห่างจากฟาร์มพัทยา ติดกับเมืองน้ำแข็ง สังเกตง่าย ๆ
            คืออาคารสีเหลืองที่ตั้งโดดเด่น ซึ่งเป็นตัวร้านคาเฟ่นั่นเอง
            โดยทางร้านจะแบ่งโซนให้บริการเป็น 2 ส่วน ด้วยกัน ได้แก่
            ร้านขายไอศกรีมและร้านขายขนมกับเครื่องดื่ม
            การตกแต่งร้านเน้นความสดใสเป็นหลัก หน้าต่างกรุเป็นกระจกใส
            ทำให้ร้านดูปลอดโปร่ง โล่งกว้างขวางยิ่งขึ้น มองเห็นวิว
            “ดินแดนของหวาน” ที่อยู่ด้านนอกชัดเจน
            โซนแรกให้บริการขนมและเครื่องดื่ม ภายในร้านคุมโทนสีชมพูแบบพาสเทล
            มุมที่นั่งในแต่ละมุมทตกแต่งได้น่ารักมาก
          </div>
          <div className="row">
            <li className="col-md-6 col-lg-3">
              <Card className="provincedetail">
                <Card.Img variant="top" src={flash} />
                <Card.Body>
                  <div className="titlelocation">วัดแสนสุข</div>
                  <div className="greenlocation">อ.เมือง(บางแสน)</div>
                  <Card.Text className="detaillocecation">
                    ตั้งอยู่ไม่ไกลจากหาดบางแสน มีสิ่งที่น่าสนใจคือ
                    มหาเจดีย์เกตึแก้วจุฬามณีอาสุขมหา
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
            <li className="col-md-6 col-lg-3">
              <Card className="provincedetail">
                <Card.Img variant="top" src={flash1} />
                <Card.Body>
                  <div className="titlelocation">วัดแสนสุข</div>
                  <div className="greenlocation">อ.เมือง(บางแสน)</div>
                  <Card.Text className="detaillocecation">
                    ตั้งอยู่ไม่ไกลจากหาดบางแสน มีสิ่งที่น่าสนใจคือ
                    มหาเจดีย์เกตึแก้วจุฬามณีอาสุขมหา
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
            <li className="col-md-6 col-lg-3">
              <Card className="provincedetail">
                <Card.Img variant="top" src={flash2} />
                <Card.Body>
                  <div className="titlelocation">วัดแสนสุข</div>
                  <div className="greenlocation">อ.เมือง(บางแสน)</div>
                  <Card.Text className="detaillocecation">
                    ตั้งอยู่ไม่ไกลจากหาดบางแสน มีสิ่งที่น่าสนใจคือ
                    มหาเจดีย์เกตึแก้วจุฬามณีอาสุขมหา
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
            <li className="col-md-6 col-lg-3">
              <Card className="provincedetail">
                <Card.Img variant="top" src={flash3} />
                <Card.Body>
                  <div className="titlelocation">วัดแสนสุข</div>
                  <div className="greenlocation">อ.เมือง(บางแสน)</div>
                  <Card.Text className="detaillocecation">
                    ตั้งอยู่ไม่ไกลจากหาดบางแสน มีสิ่งที่น่าสนใจคือ
                    มหาเจดีย์เกตึแก้วจุฬามณีอาสุขมหา
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
          </div>
        </div>
      </Container>
    );
  }
}
