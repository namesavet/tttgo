import React,{Component} from "react";
import { Row, Col, Nav, Form, Button, FormControl, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SearchTab.css";
import cart from "../img/shopping-cart.png";
import booking from "../img/booking.png";

class SearchTab extends Component {
  render() {
    return (
      <div className="SearchTab mt-3 mb-3">
        <Container>
          <Row>
          <Col sm={2} className="mt-3">
            <Form.Group>
              <Form.Select>
                <option id="productTravel">สินค้าท่องเที่ยว</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="mt-3" sm={7}>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="สินค้าท่องเที่ยว"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">ค้นหา</Button>
            </Form>
          </Col>
          <Col>
            <Row sm="auto">
              <Col>
                <Nav.Link className="booking-link mt-1 ">
                  <Row>
                    <div className="col-3 circle-booking">
                      <img className="logo-tab " src={booking} alt="logo"></img>
                    </div>
                    <div className="col title-head-productTravel  mt-2">
                      การจอง
                    </div>
                  </Row>
                </Nav.Link>
              </Col>

              <Col>
                <Nav.Link className="cart-link mt-1 s" href="/Cart">
                  <Row>
                    <div className="col-3 circle-cart">
                      <img className="logo-tab " src={cart} alt="logo"></img>
                    </div>
                    <div className="col title-head-productTravel  mt-2">
                      รถเข็น
                    </div>
                  </Row>
                </Nav.Link>
              </Col>
            </Row>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default SearchTab;
