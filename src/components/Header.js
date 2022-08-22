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
import logoUnifacisa from "../img/logo-unifacisa.svg";
import logoFundacao from "../img/logo-fundacaopedroamerico.svg";

//style
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="social-nav">
        <div className="content">
          <div className="logo">
            <img src={logoUnifacisa} alt="Logotipo Unifacisa" />
            <img src={logoFundacao} alt="Logotipo Fundação Pedro Américo" />
          </div>
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
