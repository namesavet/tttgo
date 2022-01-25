import React from "react";
import {
  Row,
  Form,
  Button,
  Col,
  Container,
  Nav,
  NavLink,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./information.css";
import useState from "react-hook-use-state";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { useForm, Controller } from "react-hook-form";
function Formaddress() {
  const { reset } = useForm();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [value, setValue] = useState();
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="address-head">
        <Container>
          <Row>
            <Col xs={8} md={8} className="setting-data-address">
              ตั้งค่าที่อยู่
            </Col>
            <Col xs={4} md={4} className="clear-data-address">
              <Button
                variant=""
                className="btn-clear-data-address"
                type="reset"
                onClick={reset}
              >
                ล้างข้อมูล
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="address-form">
        <Form.Group className="mb-3" controlId="fristname-lastname">
          <Form.Label>ชื่อ-นามสกุล</Form.Label>
          <Form.Control type="text" placeholder="ชื่อ-นามสกุล" required />
          <Form.Control.Feedback type="invalid">
            โปรดใส่ชื่อ-นามสกุล
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phonenumber">
          <Form.Label>หมายเลขโทรศัพท์</Form.Label>
       
{/*    รหัสโทรศัพท์
          <PhoneInput
            international
            defaultCountry="TH"
            value={value}
            onChange={setValue}
          /> */}

          <Form.Control type="text" placeholder="หมายเลขโทรศัพท์" required />
          <Form.Control.Feedback type="invalid">
            โปรดใส่หมายเลขโทรศัพท์
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>ที่อยู่</Form.Label>
          <Form.Control type="text" placeholder="ที่อยู่" required />
          <Form.Control.Feedback type="invalid">
            โปรดใส่ที่อยู่
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>จังหวัด</Form.Label>
          <Form.Select required>
            <option value="" hidden>
              จังหวัด
            </option>
            <option>กรุงเทพมหานคร</option>
            <option>กระบี่</option>
            <option>กาญจนบุรี</option>
            <option>กาฬสินธุ์</option>
            <option>กำแพงเพรช</option>
            <option>ขอนแก่น</option>
            <option>จันทบุรี</option>
            <option>ฉะเชิงเทรา</option>
            <option>ชลบุรี</option>
            <option>ชัยนาท</option>
            <option>ชัยภูมิ</option>
            <option>ชุมพร</option>
            <option>เชียงราย</option>
            <option>เชียงใหม่</option>
            <option>ตรัง</option>
            <option>ตราด</option>
            <option>ตาก</option>
            <option>นครนายก</option>
            <option>นครปฐม</option>
            <option>นครพนม</option>
            <option>นครราชสีมา</option>
            <option>นครศรีธรรมราช</option>
            <option>นครสวรรค์</option>
            <option>นนทบุรี</option>
            <option>นราธิวาส</option>
            <option>น่าน</option>
            <option>บึงกาฬ</option>
            <option>บุรีรัมย์</option>
            <option>ปทุมธานี</option>
            <option>ประจวบคีรีขันธ์</option>
            <option>ปราจีนบุรี</option>
            <option>ปัตตานี</option>
            <option>พระนครศรีอยุธยา</option>
            <option>พังงา</option>
            <option>พัทลุง</option>
            <option>พิจิตร</option>
            <option>พิษณุโลก</option>
            <option>เพชรบุรี</option>
            <option>เพชรบูรณ์</option>
            <option>แพร่</option>
            <option>พะเยา</option>
            <option>ภูเก็ต</option>
            <option>มหาสารคาม</option>
            <option>มุกดาหาร</option>
            <option>แม่ฮ่องสอน</option>
            <option>ยะลา</option>
            <option>ยโสธร</option>
            <option>ร้อยเอ็ด</option>
            <option>ระนอง</option>
            <option>ระยอง</option>
            <option>ราชบุรี</option>
            <option>ลพบุรี</option>
            <option>ลำปาง</option>
            <option>ลำพูน</option>
            <option>เลย</option>
            <option>ศรีสะเกษ</option>
            <option>สกลนคร</option>
            <option>สงขลา</option>
            <option>สตูล</option>
            <option>สมุทรปราการ</option>
            <option>สมุทรสงคราม</option>
            <option>สมุทรสาคร</option>
            <option>สระแก้ว</option>
            <option>สระบุรี</option>
            <option>สิงห์บุรี</option>
            <option>สุโขทัย</option>
            <option>สุพรรณบุรี</option>
            <option>สุราษฎร์ธานี</option>
            <option>สุรินทร์</option>
            <option>หนองคาย</option>
            <option>หนองบัวลำภู</option>
            <option>อ่างทอง</option>
            <option>อุดรธานี</option>
            <option>อุทัยธานี</option>
            <option>อุตรดิตถ์</option>
            <option>อุบลราชธานี</option>
            <option>อำนาจเจริญ</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            โปรดเลือก จังหวัด
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>เขต/อำเภอ</Form.Label>
          <Form.Select required>
            <option value="" hidden>
              เขต/อำเภอ
            </option>
            <option value="1">จันเกษรม</option>
            <option value="2">ภูเก็ต</option>
            <option value="3">เชียงใหม่</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            โปรดเลือก เขต/อำเภอ
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>แขวง/ตำบล</Form.Label>
          <Form.Select required>
            <option value="" hidden>
              แขวง/ตำบล
            </option>
            <option value="1">จตุจักร</option>
            <option value="2">ภูเก็ต</option>
            <option value="3">เชียงใหม่</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            โปรดเลือก แขวง/ตำบล
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>รหัสไปรษณีย์</Form.Label>
          <Form.Select required>
            <option value="" hidden>
              รหัสไปรษณีย์
            </option>
            <option value="1">10900</option>
            <option value="2">ภูเก็ต</option>
            <option value="3">เชียงใหม่</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            โปรดเลือก รหัสไปรษณีย์
          </Form.Control.Feedback>
        </Form.Group>
        <div className="row">
          <div className="address-btn col-sm-16 col-md-12">
            <Button
              variant="primary"
              type="submit"
              className="lg submit-address"
            >
              บันทึก
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
}

export class Address extends React.Component {
  render() {
    return (
      <div>
        <Formaddress />
      </div>
    );
  }
}
