import React from "react";
import Slider from "react-slick";
import {
  Card,
  Tabs,
  Tab,
  Breadcrumb,
  Container,
  Button,
  Form,
  Row,
  Col,
  Pagination,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import product from "../../img/product1.jpg";
import "./travelproductdetail.css";

var slideIndex = 1;
 showSlides(slideIndex);

export function plusSlides(n) {
  showSlides(slideIndex += n);
}

export function currentSlide(n) {
  showSlides(slideIndex = n);
}

export function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
}



export class Imgproduct extends React.Component {
  
  // int slideIndex = 1;

  // showSlides(slideIndex);
  
  // plusSlides((n)=> {
  //   showSlides((slideIndex += n));
  // })

  
  //  currentSlide((n)=> {
  //   showSlides((slideIndex = n));
  // })
  
  //  showSlides((n) =>{
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("demo");
  
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  
  // })

  render() {
    
    return (
      <div className="container">
        <div className="mySlides">
          <div className="numbertext">1 / 6</div>
          <img src={product} alt="" />
        </div>

        <div className="mySlides">
          <div className="numbertext">2 / 6</div>
          <img src={product} alt="" />
        </div>

        <div className="mySlides">
          <div className="numbertext">3 / 6</div>
          <img src={product} alt="" />
        </div>

        <div className="mySlides">
          <div className="numbertext">4 / 6</div>
          <img src={product} alt="" />
        </div>

        <div className="mySlides">
          <div className="numbertext">5 / 6</div>
          <img src={product} alt="" />
        </div>

        <div className="mySlides">
          <div className="numbertext">6 / 6</div>
          <img src={product} alt="" />
        </div>

        <b className="prev" onClick={plusSlides(-1)}>
          &#10094;
        </b>
        <b className="next" onClick={plusSlides(1)}>
          &#10095;
        </b>

        <div className="caption-container">
          <p id="caption"></p>
        </div>

        <div className="row">
          <div className="column">
            <img
              className="demo cursor"
              src={product}
              style={{ width: "100%" }}
              onClick={currentSlide(1)}
              alt="The Woods"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src={product}
              style={{ width: "100%" }}
              onClick={currentSlide(2)}
              alt="Cinque Terre"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src={product}
              style={{ width: "100%" }}
              onClick={currentSlide(3)}
              alt="Mountains and fjords"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src={product}
              style={{ width: "100%" }}
              onClick={currentSlide(4)}
              alt="Northern Lights"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src={product}
              style={{ width: "100%" }}
              onClick={currentSlide(5)}
              alt="Nature and sunrise"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src={product}
              style={{ width: "100%" }}
              onClick={currentSlide(6)}
              alt="Snowy Mountains"
            />
          </div>
        </div>
      </div>
    );
  }
}
