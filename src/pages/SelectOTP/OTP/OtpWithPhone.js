import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../Otp.css";
import otpPhone from "../../../img/otpPhone.png";
import { NavLink } from "react-router-dom";

function SelectPhone(props) {
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
          <p>รหัส OTP จะหมดอายุ 42 วินาที</p>
        </div>
        <div className="row mt-5 mb-4">
          <div className="col mt-3">
            <p>ส่งรหัสอีกครั้ง</p>
          </div>
          <div className="col">
          <NavLink to="/loginWithEmail">
            <Button
              variant="outline"
              style={{
                color: "white",
              }}
              type="submit"
              className="accept-Otp-phone"
            >
              ยืนยัน
            </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function ButtonPhone() {
  const [OtpPhoneShow, setOtpPhoneShow] = React.useState(false);

  return (
    <>
      <Button
        type="submit"
        style={{color:"white"}}
        className="select-NumberPhone mt-5 mb-2"
        onClick={() => setOtpPhoneShow(true)}
      >
        หมายเลขโทรศัพท์
      </Button>

      <SelectPhone show={OtpPhoneShow} onHide={() => setOtpPhoneShow(false)} />
    </>
  );
}

export default ButtonPhone;
