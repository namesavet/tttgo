import React from "react";
import logopk from "../img/logopk.png";
import dbdlogo from "../img/dbdverified.png";
import ssllogo from "../img/ssl.jpg";
import facebookw from "../img/facebookw.png";
import linew from "../img/linew.png";
import instagram from "../img/instagram.png";
import youtube from "../img/youtube.png";
import twitter from "../img/twitter.png";
import "./FooterLogin.css";
class FooterLogin extends React.Component {
  render() {
    return (
      <footer>
        <div className="row " style={{ backgroundColor: "#98FB98" }}>
          <div className="col mt-5">
            <img src={logopk} alt="logo" style={{ width: "200px" }}></img>
          </div>
          <div className="col text-center mt-5">
            <h1>บริษัท พี.เค. ดิจิทัล คอนเนคท์ จำกัด</h1>
            <p>
              59/1 ถนน เจริญราษฎร์ แขวง บางโคล่ เขตบางคอแหลม กรุงเทพมหานคร 10120
            </p>
            <p>
              ติดต่อ:02-307-84488 | Line ID:@tttgo | Email :
              ae@pkdigitalconnect.com
            </p>
          </div>
          <div className="col mt-5">
            <div className="row justify-content-center">
              <div className="col">
                <img src={dbdlogo} alt="logo" style={{ width: "100px" }}></img>{" "}
                <img src={ssllogo} alt="logo" style={{ width: "80px" }}></img>
              </div>
            </div>
            <div className="row row-cols-auto justify-content-center">
              <div className="col">
                <button type="">
                  <img
                    src={facebookw}
                    alt="logo"
                    style={{ width: "30px" }}
                  ></img>
                </button>
              <button type="">
                <img src={twitter} alt="logo" style={{ width: "30px" }}></img>
              </button>
              <button type="">
                <img src={linew} alt="logo" style={{ width: "30px" }}></img>
              </button>
              <button type="">
                <img src={instagram} alt="logo" style={{ width: "30px" }}></img>
              </button>
              <button type="">
                <img src={youtube} alt="logo" style={{ width: "30px" }}></img>
              </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterLogin;
