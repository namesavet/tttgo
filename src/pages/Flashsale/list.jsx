import React from "react";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./flashsale.css";

export class Flashsale extends React.Component {
  render() {
    return (
      <Container>
        <ul className="breadcrumb">
          <li>
            <a href="/">หน้าแรก</a>
          </li>
          <li> ดีลพิเศษประจำวัน</li>
        </ul>

        <h4>ดีลพิเศษประจำวัน หมดเวลาใน..........นาที</h4>

        <AllFlashsale />
      </Container>
    );
  }
}

export function AllFlashsale() {
  const items = [
    {
      id: 1,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 2,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash1.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 3,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash2.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 4,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash3.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 5,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash4.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 6,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash5.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 7,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash6.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 8,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 9,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash1.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 10,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash2.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 11,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash3.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 12,
      title: `ดีลบิวตี้ Thai massage and tension release (Thai maseeage +
      Foot massage)`,
      image: `${process.env.PUBLIC_URL}/img/flash/flash4.jpg`,
      disprice: 5300,
      redprice: 3200,
    },
  ];
  return (
    <div className="row  flashsale" style={{ listStyle: "none" }}>
      <CardFlashsale items={items} />
    </div>
  );
}

export function CardFlashsale(props) {
  const { items } = props;
  return (
    <>
      {items.map((e) => {
        return <Item {...e} key={e.id} />;
      })}
    </>
  );
}

export function Item(props) {
  const { title, image, disprice, redprice } = props;
  return (
    <li className="col-md-6 col-lg-3">
      <Card className="flashdetail">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div>
            {title}
            <div className="disprice">ปกติ {disprice} บาท</div>
            <div className="redprice">{redprice} บาท</div>
          </div>
        </Card.Body>
      </Card>
    </li>
  );
}
