//icons
import { BsFillPlayCircleFill, BsWhatsapp } from "react-icons/bs";

//img
import logoRedeita from "../img/logo-redeita-w.svg";

//style
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="main-header">
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
                <BsWhatsapp />
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
