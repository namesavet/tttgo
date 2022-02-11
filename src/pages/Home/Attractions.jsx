import React, { useState } from "react";
import { Row, Tab, Col, Card, Nav, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";

export function Attractions(props){
    const {region} = props
    
    const province = [
        {id:1,title:"กรุงเทพ",image:`${process.env.PUBLIC_URL}/img/province/thai.jpg`,region:`central`},
        {id:2,title:"นครสวรรค์",image:`${process.env.PUBLIC_URL}/img/province/center2.jpg`,region:`central`},
        {id:3,title:"กำแพงเพชร",image:`${process.env.PUBLIC_URL}/img/province/center3.jpg`,region:`central`},
        {id:4,title:"พิจิตร",image:`${process.env.PUBLIC_URL}/img/province/thai.jpg`,region:`central`},
        {id:5,title:"พิษณุโลก",image:`${process.env.PUBLIC_URL}/img/province/thai.jpg`,region:`central`},
        {id:6,title:"อุทัยธานี",image:`${process.env.PUBLIC_URL}/img/province/thai.jpg`,region:`central`},
        {id:7,title:"สุโขทัย",image:`${process.env.PUBLIC_URL}/img/province/thai.jpg`,region:`central`},
        {id:8,title:"เชียงราย ",image:`${process.env.PUBLIC_URL}/img/province/north1.jpg`,region:`north`},
        {id:9,title:"เชียงใหม่ ",image:`${process.env.PUBLIC_URL}/img/province/north2.jpg`,region:`north`},
        {id:10,title:"น่าน ",image:`${process.env.PUBLIC_URL}/img/province/north1.jpg`,region:`north`},
        {id:11,title:"พะเยา ",image:`${process.env.PUBLIC_URL}/img/province/north2.jpg`,region:`north`},
        {id:12,title:"แพร่ ",image:`${process.env.PUBLIC_URL}/img/province/north1.jpg`,region:`north`},
        {id:13,title:"แม่ฮ่องสอน",image:`${process.env.PUBLIC_URL}/img/province/north2.jpg`,region:`north`},
        {id:14,title:"ลำปาง",image:`${process.env.PUBLIC_URL}/img/province/north1.jpg`,region:`north`},

    ]

    const items = province.filter(e=>e.region===region)

    return(
        <div>
            <CradProvince items={items}/>
        </div>
    )
}
function CradProvince(props){
    const {items} = props
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
    return(
        <Slider {...toptravel}>
            {items.map((e)=>{
              return  <Item {...e} key={e.id}/>
            })}
        </Slider>
    )
}
function Item(props){
 const {title,image} = props
    return(
        <NavLink href="/Province" style={{padding:"0px"}}>
          
              <div style={{ padding: "3%" }}>
                  <div className="provinec-pic">
                    <img className="thaipic " src={image} alt="" />
                    <div className="provinec-name">{title}</div>
                  </div>
                </div>
        </NavLink>
    )
}
