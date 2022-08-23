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
            <a
              href="https://www.youtube.com/c/JornalismoIta"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <BsFillPlayCircleFill />
                <span>Ao vivo</span>
              </button>
            </a>
            <a
              href="https://wa.me/558399810545309?text=Olá!%20Quero%20sugerir%20uma%20pauta!"
              target="_blank"
              rel="noreferrer"
            >
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
