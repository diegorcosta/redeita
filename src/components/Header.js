//icons
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";

//img
import logoRedeita from "../img/logo-redeita-w.svg";

//style
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="social-nav">
        <ul>
          <li>
            <a href="/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>

      <div className="main-menu">
        <div className="container">
          <img src={logoRedeita} alt="Logotipo Rede Ita" />
          <div className="buttons">
            <a href="/">
              <button>
                <BsFillPlayCircleFill />
                <span>Ao vivo</span>
              </button>
            </a>
            <a href="/">
              <button>
                <FaWhatsapp />
                <span>Fale com a redação</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
