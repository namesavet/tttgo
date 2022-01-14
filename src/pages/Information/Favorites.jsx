import React from "react";
import {
  Row,
  Tab,
  Tabs,
  Col,
  Container,
  Nav,
  NavLink,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import hotel1 from "../../img/hotel1.jpg";
import flash2 from "../../img/flash2.jpg";
import product from "../../img/product/product1.png";
import "./information.css";

export class Favoriteshotel extends React.Component {
  render() {
    return (
      <Container>
        <div className="row favorites-row">
          <li className="col-sm-6 col-md-4 favorites-card">
            <Card>
              <Card.Img variant="top" src={hotel1} />
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
          </li>
          <li className="col-sm-6 col-md-4 favorites-card">
            <Card>
              <Card.Img variant="top" src={hotel1} />
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
          </li>
          <li className="col-sm-6 col-md-4 favorites-card">
            <Card>
              <Card.Img variant="top" src={hotel1} />
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
          </li>
          <li className="col-sm-6 col-md-4 favorites-card">
            <Card>
              <Card.Img variant="top" src={hotel1} />
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
          </li>
        </div>
      </Container>
    );
  }
}
export class Favoritesproduct extends React.Component {
  render() {
    return (
      <Container>
        <div className="row favorites-row">
          <li className="col-sm-6 col-md-4 favorites-card">
            <Card>
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
          </li>
          <li className="col-sm-6 col-md-4 favorites-card">
            <Card>
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
          </li>
          <li className="col-sm-6 col-md-4 favorites-card">
            <Card>
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
          </li>
        </div>
      </Container>
    );
  }
}
export class Favoritesvoucher extends React.Component {
  render() {
    return (
      <Container>
        <div className="row favorites-row">
          <li className="col-sm-6 col-md-4 favorites-card">
            {" "}
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={flash2} />
              <Card.Body>
                <Card.Text>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                </Card.Text>
                <Card.Text></Card.Text>
                <Card.Text>3,200 บาท</Card.Text>
              </Card.Body>
            </Card>
          </li>
        </div>
      </Container>
    );
  }
}

export class Favorites extends React.Component {
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="favorites-hotel"
          transition={false}
          id="noanim-tab-example"
          className="mb-3 favorites-tab"
        >
          <Tab eventKey="favorites-hotel" title="โรงแรม+ที่พัก">
            <Favoriteshotel />
          </Tab>
          <Tab eventKey="favorites-product" title="สินค้า">
            <Favoritesproduct />
          </Tab>
          <Tab eventKey="favorites-voucher" title="E-voucher">
            <Favoritesvoucher />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
