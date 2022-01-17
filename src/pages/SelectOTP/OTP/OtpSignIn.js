import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../Otp.css";
import otpPhone from "../../../img/otpPhone.png";

function SelectSiginPhone(props) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        วินาที: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="no-border" />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div className="titleSelect" style={{ fontSize: "24px" }}>
          ยืนยันรหัส OTP
        </div>
        <div className="otp-image mt-4 mb-4">
          <img src={otpPhone} alt="logo" style={{ width: "10%" }}></img>
        </div>
        <div className="title-otp">
          <p>ระบบได้ส่งรหัส OTP ไปยังหมายเลข 080 200 0100 ที่ท่านได้แจ้งไว้</p>
          <p>โปรดตรวจสอบและนำรหัส OTP 6 หลัก กรอกในช่องด้านล่าง</p>
          <p>รหัสอ้างอิง : jQBF1E </p>
        </div>
        <div className="input-otp mt-4 mb-4">
          <Form.Control
            type="text"
            id="firstname"
            placeholder="รหัส OTP 6 หลัก"
            style={{ marginLeft: "15%", width: "70%" }}
          />
        </div>
        <div className="time-otp">
        <p>รหัส OTP จะหมดอายุ {timerComponents.length ? timerComponents : <span>หมดเวลา</span>}</p>
        </div>
        <div className="row mt-5">
          <div className="col mt-3">
            <p>ส่งรหัสอีกครั้ง</p>
          </div>
          <div className="col">
            <Button
              variant="outline"
              type="submit"
              style={{color: "white" }}
              className="btn-Otp-SignInPhone"
            >
              ยืนยัน
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function ButtonSignin() {
  const [SignInPhone, setSignInPhone] = React.useState(false);

  return (
    <>
      <Form>
        <Form.Group className="mb-3 mt-4" style={{ textAlign: "left" }}>
          <Form.Label style={{ marginLeft: "10%" }}>
            เบอร์มือถือ(10 หลัก)
          </Form.Label>
          <Form.Control
            style={{ width: "80%", marginLeft: "10%" }}
            type="text"
            placeholder="088xxxxxxx"
          />
        </Form.Group>
      </Form>
      <Button
        style={{color: "white" }}
        type="submit"
        className="btn-SignInPhone mb-4 mt-2"
        onClick={() => setSignInPhone(true)}
      >
        เข้าสู่ระบบ
      </Button>

      <SelectSiginPhone show={SignInPhone} onHide={() => setSignInPhone(false)} />
    </>
  );
}

export default ButtonSignin;
