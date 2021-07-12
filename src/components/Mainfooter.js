import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube, FiMail } from "react-icons/fi";
import { RiMapPin2Fill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import footercss from "../styles/footer.css";
import Maincss from "../styles/Main.css";

function Mainfooter() {
  return (





    <div>

      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>About us</h4>
              <hr />
              <p > cenas au calhas sdsadasdasdasdsadas dsa sadsadsa asds <br></br> dasdasdas</p>
              <div className="naoselect" >
                <a className="icon" href="https://pt-pt.facebook.com/SLBenfica/"> <FaFacebookF /> </a>
                <a className="icon" href="https://twitter.com/SLBenfica">  <ImTwitter /> </a>
                <a className="icon" href="https://www.instagram.com/slbenfica/?hl=pt">  <IoLogoInstagram /> </a>
                <a className="icon" href="https://www.youtube.com/user/slbenfica"> <FiYoutube /> </a>

              </div>
            </div>
            {/* Column2 */}
            <div class="col">
              <h4 class="colorWhite">Endereço</h4>
              <hr />

              <p className="icon">
                {" "}
                <RiMapPin2Fill /> Lisboa,Oeiras{" "}
              </p>
              <p className="icon">
                {" "}
                <AiFillPhone /> +351-915198378{" "}
              </p>
              <p className="icon">
                {" "}
                <FiMail /> joao.parreira1001@gmail.com{" "}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Mainfooter;
