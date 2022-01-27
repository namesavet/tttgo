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


function Pic() {
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    
    console.log(slides[slideIndex-1]);
  }
  return (
    <div className="container">
      <div className="mySlides" >
        <div className="numbertext">1 / 6</div>
        <img src={product} style={{ width: "100%" }} alt="The Woods" />
      </div>

      <div className="mySlides" >
        <div className="numbertext">2 / 6</div>
        <img src={product} style={{ width: "100%" }} alt="2" />
      </div>

      <div className="mySlides">
        <div className="numbertext">3 / 6</div>
        <img src={product} style={{ width: "100%" }} alt="3" />
      </div>

      <div className="mySlides" >
        <div className="numbertext">4 / 6</div>
        <img src={product} style={{ width: "100%" }} alt="4" />
      </div>

      <div className="mySlides">
        <div className="numbertext">5 / 6</div>
        <img src={product} style={{ width: "100%" }} alt="5" />
      </div>

      <div className="mySlides"  >
        <div className="numbertext">6 / 6</div>
        <img src={product} style={{ width: "100%" }} alt="" />
      </div>

      <i className="prev" onClick={plusSlides(-1)}>
        &#10094;
      </i>
      <i className="next" onClick={plusSlides(1)}>
        &#10095;
      </i>

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

export class Imgproduct extends React.Component {
  render() {
    return (
      <div>
        <Pic />
      </div>
    );
  }
}
