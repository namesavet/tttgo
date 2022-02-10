import React from "react";
import { Row, Tab, Col, Container, Nav, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Hotel } from "./Hotel";
import { Hoteldetail } from "./Hoteldetail";
import { useState } from "react";

export function Testreact () {
    
    const initData = [
        {id:1,title:"ค่ารักษาพยาบาล",amount:2000},
        {id:2,title:"ค่าปรับ",amount:150},
        {id:3,title:"ค่าเดินทาง",amount:800},
    ]
    const [items,setitems] = useState(initData)

    const onAddNewItem=(newItem)=>{
        setitems((prevItem)=>{
            return [newItem,...prevItem]
        })
    }
    console.log(items);
    return (
      <div>
       <Hotel onAddItem={onAddNewItem}/>
       <Hoteldetail items={items}/>
      </div>
    );
  
}
