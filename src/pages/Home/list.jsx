import React from "react";
import Slider from "react-slick";
import { Row, Container, Col, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import first from "../../img/first.jpg";
import second from "../../img/second.jpg";
import shirt from "../../img/category/shirt.png";
import product from "../../img/product/product.png";
import "./home.css";

export class Home extends React.Component {
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

        {/* <div className="layoutmenubtn">
          <div className="row tabmenu">
            <div className="col">
              <button type="button" className="row menubtn">
                <div className="col-3">
                  <i className="fas fa-user-circle fa-2x"></i>
                </div>
                <div className="col fontmenubtn">โรงแรม+ที่พัก</div>
              </button>
            </div>
            <div className="col">
              <button type="button" className="row menubtn">
                <div className="col-3">
                  <i className="fas fa-user-circle fa-2x"></i>
                </div>
                <div className="col fontmenubtn">โรงแรม+ที่พัก</div>
              </button>
            </div>
            <div className="col">
              <button type="button" className="row menubtn">
                <div className="col-3">
                  <i className="fas fa-user-circle fa-2x"></i>
                </div>
                <div className="col fontmenubtn">โรงแรม+ที่พัก</div>
              </button>
            </div>
          </div>
        </div> */}

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
          <h2> ดีลพิเศษประจำวัน</h2>
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

        <div className="ads">
          <img className="ads175" src={second} alt="" />
        </div>

        <div className="today">
          <h2> สินค้าราคาพิเศษ</h2>
          <Slider {...promotion}>
            <div>
              <div style={{ padding: "5%" }}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Text>
                    *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง ขนาดหน้าปัด 30 mm
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
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Text>
                    *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง ขนาดหน้าปัด 30 mm
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
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Text>
                    *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง ขนาดหน้าปัด 30 mm
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
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Text>
                    *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง ขนาดหน้าปัด 30 mm
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
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Text>
                    *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง ขนาดหน้าปัด 30 mm
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
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Text>
                    *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง ขนาดหน้าปัด 30 mm
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
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Text>
                    *CASIO* นาฬิกาสายเลส มีกล่องครบชุด ภาพถ่ายสินค้าจริง ขนาดหน้าปัด 30 mm
                    </Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text>3,200 บาท</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Slider>
        </div>


















      </div>
    );
  }
}
