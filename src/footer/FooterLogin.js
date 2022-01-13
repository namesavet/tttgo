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
import { Container } from "react-bootstrap";
class FooterLogin extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-background">
          <Container>
           <div className="row">
             <div className="col-4 mt-5 logoCompany">
                <img src={logopk} alt="logo" className="logo-company"></img>
             </div>
             <div className="col-4 mt-4">
                <div className="company-footer">
                  <h>บริษัท พี.เค. ดิจิทัล คอนเนคท์ จำกัด</h>
                </div>
                <div className="address-footer">
                  <h>59/1 ถนน เจริญราษฎร์ แขวง บางโคล่ เขตบางคอแหลม กรุงเทพมหานคร 10120</h>
                </div>
                <div className="tel-footer">
                  <h>ติดต่อ:02-307-8448 | Line ID :@tttgo | Email:ae@pkdigitalconnect.com</h>
                </div>
             </div>
             <div className="col-4 ">
                <div className="row">
                    <div className="col award-logo mt-5">
                      <img src={dbdlogo} alt="logo" className="logo-dbdlogo"></img>
                      <img src={ssllogo} alt="logo" className="logo-ssllogo"></img>
                    </div>
                </div>
                <div className="row">
                  <div className="col social-logo mt-3" >
                    <img src={facebookw} alt="logo" className="logo-facebookw"></img>
                    <img src={linew} alt="logo" className="logo-linew"></img>
                    <img src={instagram} alt="logo" className="logo-instagram"></img>
                    <img src={youtube} alt="logo" className="logo-youtube"></img>
                    <img src={twitter} alt="logo" className="logo-twitter"></img>
                  </div>
                    
                </div>

             </div>
           </div>
          </Container>
        </div>
      </footer>
    );
  }
}
export default FooterLogin;
