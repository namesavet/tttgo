import React from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  NavLink,
  Nav,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";
function ChangeAddress(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      
    </Modal>
  );
}

function EditAddress() {
  const [InputaddressShow, setInputaddressShow] = React.useState(false);

  return (
    <>
      <p
        style={{ color: "#98fb98", textAlign: "end" }}
        onClick={() => setInputaddressShow(true)}
      >
        แก้ไข
      </p>

      <ChangeAddress
        show={InputaddressShow}
        onHide={() => setInputaddressShow(false)}
      />
    </>
  );
}

render(<EditAddress />);
