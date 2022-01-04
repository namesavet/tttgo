// import { Navbar,Nav ,Container} from "react-bootstrap";
import './LoginWithPhone.css';
// import "bootstrap/dist/css/bootstrap.min.css";
function LoginwithPhone() {
  return (
      <div className="LoginWithPhone">
        <div>
          <ul style={{ color: "black" ,fontSize:'30px'}}>เข้าสู่ระบบ</ul>
        </div>

        <form>
          <ul>เบอร์มือถือ(10 หลัก)</ul>
          <ul className="form-control">
            <input type="text" placeholder="088xxxxxxx" />
          </ul>
          <ul>
            <button type="submit" className="btnLogin">
              เข้าสู่ระบบ
            </button>
          </ul>
        </form>
        <ul style={{ textAlign: "center" }}>
          <label>หรือจะลงทะเบียนด้วย</label>
        </ul>

        <ul>
          <button type="submit" className="btnGoogle">
            เข้าสู่ระบบผ่าน GOOGLE
          </button>
        </ul>
        <ul>
          <button type="submit" className="btnFacebook">
            เข้าสู่ระบบผ่าน FACEBOOK
          </button>
        </ul>

        <ul>
          <button type="submit" className="btnLine">
            เข้าสู่ระบบผ่าน LINE
          </button>
        </ul>
      </div>

     
   
  );
}
export default LoginwithPhone;
