import React from "react";
import { Button, Modal } from "react-bootstrap";
import ButtonEmail from "./OTP/OtpWithEmail";
import ButtonPhone from "./OTP/OtpWithPhone";
import "./Otp.css";

function SelectGetOTP(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="no-border"/>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div className="titleSelect" style={{ fontSize:"20px" }}>
          เลือกการยืนยันรหัส OTP
        </div>
        <ButtonPhone/>
        <ButtonEmail/>
      </div>
    </Modal>
  );
}

function ButtonSignUp() {
  const [selectOtpShow, setSelectOtpShow] = React.useState(false);

  return (
    <>
      <Button
        style={{
          color: "white",
        }}
        type="submit"
        className="btn-Register"
        onClick={() => setSelectOtpShow(true)}
      >
        ยืนยัน
      </Button>

      <SelectGetOTP
        show={selectOtpShow}
        onHide={() => setSelectOtpShow(false)}
      />
    </>
  );
}

export default ButtonSignUp;
