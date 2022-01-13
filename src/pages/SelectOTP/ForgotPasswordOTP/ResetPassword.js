import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../Otp.css";
import "./ResetPassword.css";
import { NavLink } from "react-router-dom";

function NewPassword(props) {
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
        <div className="titleReset" style={{ fontSize: "24px" }}>
          <h>รีเซ็ตรหัสผ่าน</h>
        </div>
        <div className="introTitleReset mt-2">
          <h>กรุณาป้อนรหัสผ่านใหม่ ต้องมีความยาว 8-20 ตัวอักษรและรวมถึงตัวเลข</h>
        </div>
        <Form>
          <Form.Group className="mb-3 mt-4" style={{ textAlign: "left" }}>
          <Form.Label
              style={{
                marginLeft: "10%",
              }}
            >
              รหัสผ่านใหม่
            </Form.Label>
            <Form.Control
              type="password"
              style={{ width: "80%", marginLeft: "10%" }}
            />
            <Form.Label
              style={{
                marginLeft: "10%",
              }}
            >
              ยืนยันรหัสผ่านใหม่
            </Form.Label>
            <Form.Control
              type="password"
              style={{ width: "80%", marginLeft: "10%" }}
            />
          </Form.Group>
        </Form>
        <div className="row mt-5 mb-5" style={{textAlign:"right",marginRight:"8%"}}>
          <div className="col">
          <NavLink to="/loginWithEmail">
            <Button
              variant="outline"
              style={{
                color: "white",
              }}
              type="submit"
              className="submit-NewPassword"
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

function ResetPassword() {
  const [ResetNewPassword, setResetNewPassword] = React.useState(false);

  return (
    <>
      <Button
        variant="outline"
        style={{
          backgroundColor: "#8be973",
          color: "white",
          width: "40%",
        }}
        type="submit"
        className="resetPassword-btn"
        onClick={() => setResetNewPassword(true)}
      >
        ยืนยัน
      </Button>
      <NewPassword
        show={ResetNewPassword}
        onHide={() => setResetNewPassword(false)}
      />
    </>
  );
}

export default ResetPassword;
