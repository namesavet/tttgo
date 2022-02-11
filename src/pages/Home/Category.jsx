import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";

export function Category() {
  const items = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/img/category/shirt.png`,
      title: `เสื้อผ้า`,
    },
    {
        id: 2,
        image: `${process.env.PUBLIC_URL}/img/category/category1.jpg`,
        title: `รองเท้า`,
      },
      {
        id: 3,
        image: `${process.env.PUBLIC_URL}/img/category/category2.jpg`,
        title: `กางเกง`,
      },
      {
        id: 4,
        image: `${process.env.PUBLIC_URL}/img/category/category3.jpg`,
        title: `เดรส`,
      },
      {
        id: 5,
        image: `${process.env.PUBLIC_URL}/img/category/category6.jpg`,
        title: `ถุงเท้า`,
      },
      {
        id: 6,
        image: `${process.env.PUBLIC_URL}/img/category/shirt.png`,
        title: `เสื้อ`,
      },
      {
        id: 7,
        image: `${process.env.PUBLIC_URL}/img/category/category1.jpg`,
        title: `รองเท้า`,
      },
      {
        id: 8,
        image: `${process.env.PUBLIC_URL}/img/category/category2.jpg`,
        title: `กางเกง`,
      },
  ];
  return (
    <div>
      <CardCategory items={items} />
    </div>
  );
}
export function CardCategory(props) {
  const { items } = props;
  const category = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
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
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...category}>
      {items.map((e) => {
        return <Item {...e} key={e.id} />;
      })}
    </Slider>
  );
}

export function Item(props) {
  const { image, title} = props;
  return (
    <div>
                <div style={{ padding: "5%" }}>
                  <div>
                    <img className="categorypic" src={image} alt="" />
                  </div>
                  <div className="categorytext">{title}</div>
                </div>
              </div>
  );
}
