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
import Feedback from 'react-bootstrap/Feedback'



export class FormExample extends React.Component{
  render(){
  
    const [validated, setValidated] = this.useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return(
      <div>
 <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
      </div>
    )
  }
}


















export class Address extends React.Component {
  render() {
    return (
      <div>
        <div className="address-head">
        <Container >
          <Row >
            <Col xs={8} md={8} className="setting-data-address">
              ตั้งค่าที่อยู่
            </Col>
            <Col xs={4} md={4} className="clear-data-address">
              ล้างข้อมูล
            </Col>
          </Row>
        </Container>
          
        </div>

        <div className="address-form">
          <Form>
            <Form.Group className="mb-3" controlId="fristname-lastname">
              <Form.Label>ชื่อ-นามสกุล</Form.Label>
              <Form.Control type="text" placeholder="ชื่อ-นามสกุล" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phonenumber">
              <Form.Label>หมายเลขโทรศัพท์</Form.Label>
              <Form.Control type="text" placeholder="หมายเลขโทรศัพท์" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>ที่อยู่</Form.Label>
              <Form.Control type="text" placeholder="ที่อยู่" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>จังหวัด</Form.Label>
              <Form.Select placeholder="ชื่อ-นามสกุล">
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
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>เขต/อำเภอ</Form.Label>
              <Form.Select>
                <option value="1">จันเกษรม</option>
                <option value="2">ภูเก็ต</option>
                <option value="3">เชียงใหม่</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>แขวง/ตำบล</Form.Label>
              <Form.Select>
                <option value="1">จตุจักร</option>
                <option value="2">ภูเก็ต</option>
                <option value="3">เชียงใหม่</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>รหัสไปรษณีย์</Form.Label>
              <Form.Select>
                <option value="1">10900</option>
                <option value="2">ภูเก็ต</option>
                <option value="3">เชียงใหม่</option>
              </Form.Select>
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
          </Form>
        </div>
      
      </div>
    );
  }
}
