import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./travelproductdetail.css";


export class Imgproduct extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: [],
      setImages: [],
      setfullImages: [],
    };
  }

  async getImages() {
    var response = [
      { image: `${process.env.PUBLIC_URL}/img/bag.jpg` },
      { image: `${process.env.PUBLIC_URL}/img/bag1.jpg` },
      { image: `${process.env.PUBLIC_URL}/img/bag2.jpg` },
      { image: `${process.env.PUBLIC_URL}/img/bag3.jpg` },
     
   
    ];

    this.setState({
      setImages: response,
    });
  }
  async fullgetImages(fullpic) {
    var response = [
      { image: `${process.env.PUBLIC_URL}/img/bag.jpg` },
      { image: `${process.env.PUBLIC_URL}/img/bag1.jpg` },
      { image: `${process.env.PUBLIC_URL}/img/bag2.jpg` },
      { image: `${process.env.PUBLIC_URL}/img/bag3.jpg` },
     
      
    ];
    if (fullpic == undefined) {
      fullpic = response[0].image;
    }
    var response = [fullpic];

    this.setState({
      setfullImages: response,
    });
  }
  componentDidMount() {
    this.getImages();
    this.fullgetImages();
  }
  render() {
    const { setImages } = this.state;
    const { setfullImages } = this.state;
    var imagesCard = [];
    var fullimagesCard = [];

    setImages.map((key, index) => {
      imagesCard.push(
        <img
          src={setImages[index].image}
          alt=""
          style={{ width: "100%" ,marginBottom:"20px",cursor:"pointer"}}
          onClick={() => this.fullgetImages(setImages[index].image)}
        />
      );
    });

    setfullImages.map((key, index) => {
      fullimagesCard.push(
        <img src={setfullImages} alt="" style={{ width: "100%" }} />
      );
    });

    return (
      <div className="row">
        <div className="pic_productsmall" style={{paddingRight:"10px"}}>
          {imagesCard}
        </div>
        <div className="pic_productbig" style={{paddingLeft:"5px",paddingRight:"20px"}}>{fullimagesCard}</div>
      </div>
    );
  }
}
