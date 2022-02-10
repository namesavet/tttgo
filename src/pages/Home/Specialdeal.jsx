import React, { useState } from "react";
import { Row, Tab, Col, Card, Nav, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";

export function Specialdeal() {
  const items = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/img/flash/flash.jpg`,
      title: ` ดีลบิวตี้ Thai massage and tension release (Thai maseeage + Foot massage)`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/img/flash/flash1.jpg`,
      title: ` ดีลบิวตี้ Thai massage and tension release (Thai maseeage + Foot massage)`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/img/flash/flash2.jpg`,
      title: ` ดีลบิวตี้ Thai massage and tension release (Thai maseeage + Foot massage)`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/img/flash/flash3.jpg`,
      title: ` ดีลบิวตี้ Thai massage and tension release (Thai maseeage + Foot massage)`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 5,
      image: `${process.env.PUBLIC_URL}/img/flash/flash4.jpg`,
      title: ` ดีลบิวตี้ Thai massage and tension release (Thai maseeage + Foot massage)`,
      disprice: 5300,
      redprice: 3200,
    },
    {
      id: 6,
      image: `${process.env.PUBLIC_URL}/img/flash/flash5.jpg`,
      title: ` ดีลบิวตี้ Thai massage and tension release (Thai maseeage + Foot massage)`,
      disprice: 5300,
      redprice: 3200,
    }
  ];
  return (
    <div>
      <CardSpecialdeal items={items} />
    </div>
  );
}
export function CardSpecialdeal(props) {
  const { items } = props;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {items.map((e) => {
        return <Item {...e} key={e.id} />;
      })}
    </Slider>
  );
}

export function Item(props) {
  const { image, title, disprice, redprice } = props;
  return (
    <div style={{ padding: "5%", width: "100%" }}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div>
            {title}
            <div className="disprice">ปกติ {disprice} บาท</div>
            <div className="redprice">{redprice} บาท</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
