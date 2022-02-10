import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";

export function Specialprice() {
  const items = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/img/product/product1.jpg`,
      title: `  *CASIO* นาฬิกาสายเลส มีกล่องครบชุด`,
      disprice: 2990,
      redprice: 1560,
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/img/product/product2.jpg`,
      title: `  *CASIO* นาฬิกาสายเลส มีกล่องครบชุด`,
      disprice: 2990,
      redprice: 1560,
    },
    {
      id:3,
      image:  `${process.env.PUBLIC_URL}/img/product/product3.jpg`,
      title: `  *CASIO* นาฬิกาสายเลส มีกล่องครบชุด`,
      disprice: 2990,
      redprice: 1560,
    },
    {
      id: 4,
      image:  `${process.env.PUBLIC_URL}/img/product/product4.jpg`,
      title: `  *CASIO* นาฬิกาสายเลส มีกล่องครบชุด`,
      disprice: 2990,
      redprice: 1560,
    },
    {
      id:5,
      image:  `${process.env.PUBLIC_URL}/img/product/product5.jpg`,
      title: `  *CASIO* นาฬิกาสายเลส มีกล่องครบชุด`,
      disprice: 2990,
      redprice: 1560,
    },
    {
        id: 6,
        image:  `${process.env.PUBLIC_URL}/img/product/product1.jpg`,
        title: `  *CASIO* นาฬิกาสายเลส มีกล่องครบชุด`,
        disprice: 2990,
        redprice: 1560,
      },
  ];
  return (
    <div>
      <CardSpecialPrice items={items} />
    </div>
  );
}
export function CardSpecialPrice(props) {
  const { items } = props;
  const promotion = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    <Slider {...promotion}>
      {items.map((e) => {
        return <Item {...e} key={e.id} />;
      })}
    </Slider>
  );
}

export function Item(props) {
  const { image, title, disprice, redprice } = props;
  return (
    <div style={{ padding: "5%" }}>
      <Card className="">
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
