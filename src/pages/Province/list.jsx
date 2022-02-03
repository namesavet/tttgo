import React from "react";
import Slider from "react-slick";
import {
  Card,
  Tabs,
  Tab,
  Breadcrumb,
  Container,
  Pagination,
  NavLink,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import thai from "../../img/thai.jpg";
import north from "../../img/north.jpg";
import "./province.css";

export class Central extends React.Component {
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
                  <img className="thaipic" src={thai} alt="" />
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
export class North extends React.Component {
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
                  <img className="thaipic " src={north} alt="" />
                  <div className="provinec-name">เชียงใหม่</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={north} alt="" />
                  <div className="provinec-name">เชียงใหม่</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={north} alt="" />
                  <div className="provinec-name">เชียงใหม่</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={north} alt="" />
                  <div className="provinec-name">เชียงใหม่</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={north} alt="" />
                  <div className="provinec-name">เชียงใหม่</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={north} alt="" />
                  <div className="provinec-name">เชียงใหม่</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={north} alt="" />
                  <div className="provinec-name">เชียงใหม่</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ padding: "3%" }}>
                <div className="provinec-pic">
                  <img className="thaipic " src={north} alt="" />
                  <div className="provinec-name">เชียงใหม่</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export class PaginationProvince extends React.Component {
  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
    return (
      <div>
        <Pagination>{items}</Pagination>
      </div>
    );
  }
}

export class Province extends React.Component {
  render() {
    return (
      <Container>
        <ul className="breadcrumb">
          <li>
            <a href="/">หน้าแรก</a>
          </li>
          <li>ชลบุรี</li>
        </ul>
        
        <div className="thailand">
          <Tabs
            defaultActiveKey="central"
            id="uncontrolled-tab-example"
            className="mb-4 tab-procinve"
          >
            <Tab eventKey="central" title="ภาคกลาง">
              <Central />
            </Tab>

            <Tab eventKey="north" title="ภาคเหนือ">
              <North />
            </Tab>
            <Tab eventKey="northeast" title="ภาคตะวันออกเฉียง">
              <Central />
            </Tab>
            <Tab eventKey="west" title="ภาคตะวันตก">
              <North />
            </Tab>
            <Tab eventKey="east" title="ภาคตะวันออก">
              <Central />
            </Tab>
            <Tab eventKey="south" title="ภาคใต้">
              <North />
            </Tab>
          </Tabs>
        </div>

        <h3>ชลบุรี</h3>

        <div className="row  " style={{ listStyle: "none" }}>
          <li className="col-md-6 col-lg-3">
            <NavLink href="/Provincedetail" className="province-link">
              <Card className="provincedetail">
                <Card.Img variant="top" src={thai} />
                <Card.Body>
                  <div className="titlelocation">วัดแสนสุข</div>
                  <div className="greenlocation">อ.เมือง(บางแสน)</div>
                  <Card.Text className="detaillocecation">
                    ตั้งอยู่ไม่ไกลจากหาดบางแสน มีสิ่งที่น่าสนใจคือ
                    มหาเจดีย์เกตึแก้วจุฬามณีอาสุขมหา
                  </Card.Text>
                </Card.Body>
              </Card>
            </NavLink>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="provincedetail">
              <Card.Img variant="top" src={thai} />
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
              <Card.Img variant="top" src={thai} />
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
              <Card.Img variant="top" src={thai} />
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
              <Card.Img variant="top" src={thai} />
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
              <Card.Img variant="top" src={thai} />
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
              <Card.Img variant="top" src={thai} />
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
              <Card.Img variant="top" src={thai} />
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
      </Container>
    );
  }
}
