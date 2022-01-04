import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import first from '../img/first.jpg'
import second from '../img/second.jpg'


class Bander extends Component {
    render() {
        return (

            <Carousel >
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={first}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={second}
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>

        )
    }
}
export default Bander;