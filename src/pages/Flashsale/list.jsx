import React from "react";

import { Card, Breadcrumb, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import flash from "../../img/flash.jpg";
import flash1 from "../../img/flash1.jpg";
import flash2 from "../../img/flash2.jpg";
import flash3 from "../../img/flash3.jpg";
import flash4 from "../../img/flash4.jpg";
import flash5 from "../../img/flash5.jpg";
import flash6 from "../../img/flash6.jpg";
import flash7 from "../../img/flash7.jpg";
import "./flashsale.css";

export class Flashsale extends React.Component {
  render() {
    return (
      <Container>
        <Breadcrumb className="province-head-path">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="" active>
            ดีลพิเศษประจำวัน
          </Breadcrumb.Item>
        </Breadcrumb>

        <h4>ดีลพิเศษประจำวัน หมดเวลาใน..........นาที</h4>

        <div className="row  flashsale" style={{ listStyle: "none" }}>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash1} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash2} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash3} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash4} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash5} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash6} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash7} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash1} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash2} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash3} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash4} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash5} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash6} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
          <li className="col-md-6 col-lg-3">
            <Card className="flashdetail">
              <Card.Img variant="top" src={flash7} />
              <Card.Body>
                <div>
                  ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
                  Foot massage)
                  <div className="disprice">ปกติ 5300 บาท</div>
                  <div className="redprice">3,200 บาท</div>
                </div>
              </Card.Body>
            </Card>
          </li>
        </div>
      </Container>
    );
  }
}
