import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./Cart.css";
import bin from "../../img/bin.png";

const productData = [
  {
    shopId: 1,
    shopName: "ร้านของที่ระลึกเที่ยวไทย ณ อยุธยา",
    productlist: [
      {
        id: 1,
        shopId: 1,
        image: `${process.env.PUBLIC_URL}/img/bagpack.jpg`,
        title: `กระเป๋าเดินทางLOJEL LUGGAGE ขนาดพิเศษ LJCF1638 สีขาว ไซส์ 28`,
        option: `HM50GL+footrest`,
        price: `2,599`,
      },
      {
        id: 2,
        shopId: 1,
        image: `${process.env.PUBLIC_URL}/img/bagpack.jpg`,
        title: `เครื่องสำอางท่องเที่ยวกระเป๋าหูรูดเชือกกันฝุ่น`,
        option: `size 65x84 cm.`,
        price: `720`,
      },
    ],
  },
  {
    shopId: 2,
    shopName: "QIAOYUE Sports City",
    productlist: [
      {
        id: 1,
        shopId: 2,
        image: `${process.env.PUBLIC_URL}/img/bagpack.jpg`,
        title: `AliExpress เก้าอี๋พับพนักพิงแบบพกพาตกปลา Retractable สูลพลาสติกสำหรับผู้ใหญ่`,
        option: `Joom 1 pc`,
        price: `1400`,
      },
    ],
  },
];

function ButtonIncrement(props) {
  return (
    <button className="incrementNumber" onClick={props.onClickFunc}>
      +
    </button>
  );
}
function ButtonDecrement(props) {
  return (
    <button className="decreaseNumber" onClick={props.onClickFunc}>
      -
    </button>
  );
}
function DisplayShow(props) {
  return (
    <input
      value={props.message}
      style={{
        textAlign: "center",
        border: "none",
        height: "25px",
        width: "30px",
      }}
    />
  );
}

function ProductList() {
 
}
console.log(ProductList);

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "selectAllItem") {
      let tempProduct = products.map((product) => {
        return { ...product, isChecked: checked };
      });
      setProducts(tempProduct);
    } else if (name === "selectAllItemInShop") {
      let tempProduct = products.map((product) =>
        product.shopId === name ? { ...product, isChecked: checked } : product
      );
      setProducts(tempProduct);
    } else {
      let tempProduct = products.map((product) =>
        product.title === name ? { ...product, isChecked: checked } : product
      );
      setProducts(tempProduct);
    }
  };

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if (counter <= 1) {
    decrementCounter = () => setCounter(0);
  }
  return (
    <Col sm={8}>
      <div className="allProductinCart-bg">
        <Container>
          <Row>
            <Col xs={8} className="itemcart mt-2 mb-2">
              <Form.Check
                inline
                style={{ fontWeight: "bold" }}
                label={`สินค้าทั้งหมด (3 รายการ)`}
                name="selectAllItem"
                type="checkbox"
                id="selectAllItem"
                checked={
                  products.filter((product) => product?.isChecked !== true)
                    .length < 1
                }
                onChange={handleChange}
              />
            </Col>
            <Col xs={4} className="mt-2" style={{ textAlign: "right" }}>
              <i className="fas fa-trash"> ลบ</i>
            </Col>
          </Row>
        </Container>
      </div>
      {products.map((product) => (
        <div className="productincart" key={product.shopId}>
          <Row>
            <Col>
              <Container className="shopName">
                <Row className="mt-3">
                  <Col xs={8}>
                    <Row>
                      <Col>
                        <Form.Check
                          className="select-item-incart"
                          inline
                          style={{ fontWeight: "bold" }}
                          name="selectAllItemInShop"
                          type="checkbox"
                          id="selectAllItemInShop"
                          checked={
                            products.filter(
                              (product) => product?.isChecked !== true
                            ).length < 1
                          }
                          onChange={handleChange}
                        />{" "}
                        <i
                          className="fas fa-store"
                          style={{ color: "gray" }}
                        ></i>{" "}
                        {product.shopName}
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={4} style={{ textAlign: "end" }}>
                    <Row>
                      <div className="col">
                        <p style={{ textDecoration: "underline" }}>ดูร้านค้า</p>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Container>

              <Container>
                <Row className="productInshop mt-3 mb-3">
                  <Col sm={8}>
                    <Row>
                      <Col sm={1}>
                        <Form.Check
                          inline
                          style={{ marginTop: "40px" }}
                          name={product}
                          type="checkbox"
                          id={product.id}
                          checked={product?.isChecked || false}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={3} md={4}>
                        <img
                          style={{ width: "100%" }}
                          src={product.image}
                          alt="logo"
                        ></img>
                      </Col>
                      <Col sm={8} md={7}>
                        <div className="productName">
                          <p>{product.title}</p>
                        </div>
                        <div className="productDetail">
                          <p>
                            ตัวเลือกสินค้า:
                            <select
                              className="select-detailPrduct"
                              name="detailProduct"
                              id="detailProduct"
                            >
                              <option>{product.option}</option>
                            </select>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    sm={2}
                    className="justify-content-center mt-4"
                    style={{ textAlign: "end" }}
                  >
                    <li>
                      <ButtonDecrement onClickFunc={decrementCounter} />
                      <DisplayShow message={counter} />
                      <ButtonIncrement onClickFunc={incrementCounter} />
                    </li>
                  </Col>
                  <Col sm={2}>
                    <div className="fontprice">
                      <p>{product.price} บาท</p>
                    </div>
                    <div style={{ textAlign: "end" }}>
                      <img className="deletelogo" src={bin} alt="logo"></img>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      ))}
    </Col>
  );
}
export default Product;
