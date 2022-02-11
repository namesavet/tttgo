import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";

export function Hotel() {
  const items = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/img/hotel/hotel1.jpg`,
      title: `เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)`,
      price: 1560,
      daymonth: `ต่อเดือน`,
      location: `กรุงเทพมหานคร,สุขุมวิท`,
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/img/hotel/hotel2.jpg`,
      title: `เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)`,
      price: 1560,
      daymonth: `ต่อเดือน`,
      location: `กรุงเทพมหานคร,สุขุมวิท`,
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/img/hotel/hotel3.jpg`,
      title: `เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)`,
      price: 1560,
      daymonth: `ต่อเดือน`,
      location: `กรุงเทพมหานคร,สุขุมวิท`,
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/img/hotel/hotel4.jpg`,
      title: `เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)`,
      price: 1560,
      daymonth: `ต่อเดือน`,
      location: `กรุงเทพมหานคร,สุขุมวิท`,
    },
    {
      id: 5,
      image: `${process.env.PUBLIC_URL}/img/hotel/hotel5.jpg`,
      title: `เนอโว่ พรีเมียร์ เรสซิเดนซ์ (Neveu permier Residence)`,
      price: 1560,
      daymonth: `ต่อเดือน`,
      location: `กรุงเทพมหานคร,สุขุมวิท`,
    },
  ];
  return (
    <div>
      <CardHotel items={items} />
    </div>
  );
}
export function CardHotel(props) {
  const { items } = props;
  const hotel = {
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
    <Slider {...hotel}>
      {items.map((e) => {
        return <Item {...e} key={e.id} />;
      })}
    </Slider>
  );
}

export function Item(props) {
  const { image, title, price, daymonth, location } = props;
  return (
    <div style={{ padding: "5%" }}>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div>
            {title}
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              {""} {location}
            </div>
            <div className="detailprice">ราคารวม({daymonth})</div>
            <div className="greenprice">{price} บาท</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
