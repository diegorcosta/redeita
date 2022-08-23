import React from "react";

//img
import logoRedeita from "../img/logo-redeita-w.svg";
import logoFundacao from "../img/logo-fundacaopedroamerico.svg";
import logoUnifacisa from "../img/logo-unifacisa.svg";
import logoCultura from "../img/logo-cultura.svg";

//icons
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

//styles
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="main-footer">
      <section className="social-links">
        <div className="container">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/rede.ita.oficial"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebook />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rede.ita"
                rel="noreferrer"
                target="_blank"
              >
                <FaInstagram />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/JornalismoIta"
                rel="noreferrer"
                target="_blank"
              >
                <FaYoutube />
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="container">
        <div className="about">
          <img
            className="logo-redeita"
            src={logoRedeita}
            alt="Logotipo Rede Ita"
          />
          <address>
            <p>Rua Luiza Bezerra Motta, 200 - Catolé</p>
            <p>Campina Grande/PB</p>
            <p>CEP: 58.410-410</p>
            <p>Fone: (83) 2101.8200</p>
          </address>
        </div>

        <div className="links">
          <div className="column">
            <h2>Programas</h2>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=NcyHDaUQpbg&list=PLJmzgIqj_KQTQFC3wGCD3RbukTVTCFZS_"
                  rel="noreferrer"
                  target="_blank"
                >
                  Diversidade
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=0JBg8Grc5AE&list=PLJmzgIqj_KQQBbsbohpEs4ypDqN6rqE2q"
                  rel="noreferrer"
                  target="_blank"
                >
                  ITN
                </a>
              </li>
              <li>
                <a href="/">É Bom Saber</a>
              </li>
              <li>
                <a href="/">Ponto a Ponto</a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=lMcvJhdb8hc&list=PLJmzgIqj_KQScOFHhB0leFzfGRvF8PbVA"
                  rel="noreferrer"
                  target="_blank"
                >
                  Em Dia
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=C8ATCNm43M4&list=PLJmzgIqj_KQR5YV-FIhS_yO-WRGBxVA6o"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ita Esportes
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=CmWrF3drfj4&list=PLJmzgIqj_KQQIrAiXEXaQuiHTyU6o6f-w"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ita FC
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=Ect5K4YZMrc&list=PLJmzgIqj_KQQ9RDYcn2odSW-LQAn5GEXT"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ideia Livre
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=aFGibioUOhY&list=PLJmzgIqj_KQTtu2k-J4OhHPS3g25noEXE"
                  rel="noreferrer"
                  target="_blank"
                >
                  IT Games
                </a>
              </li>
            </ul>
          </div>

          <div className="column">
            <h2>Fale Conosco</h2>
            <ul>
              <li>
                <a
                  href="https://wa.me/55839981054530?text=Contato%20via%20site"
                  rel="noreferrer"
                  target="_blank"
                >
                  Programação
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/558399810545309?text=Olá,%20quero%20sugerir%20uma%20pauta"
                  rel="noreferrer"
                  target="_blank"
                >
                  Redação
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial@tvitarare.com.br"
                  rel="noreferrer"
                  target="_blank"
                >
                  Comercial
                </a>
              </li>
              <li>
                <a href="tel:8321018212" target="_blank" rel="noreferrer">
                  Ouvidoria
                </a>
              </li>
            </ul>
            <h2>Links úteis</h2>
            <ul>
              <li>
                <a href="/">Editais</a>
              </li>
              <li>
                <a
                  href="https://unifacisa.solides.jobs/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Trabalhe conosco
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="logos">
          <a
            href="http://www.fundacaopedroamerico.org.br/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="logo-fundacao"
              src={logoFundacao}
              alt="Logotipo Fundação Pedro Américo"
            />
          </a>
          <span>
            <div className="column">
              <div>
                <h4>Parceria</h4>
                <a
                  href="https://www.unifacisa.edu.br/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="logo-unifacisa"
                    src={logoUnifacisa}
                    alt="Logotipo Unifacisa"
                  />
                </a>
              </div>
            </div>
            <div className="column">
              <h4>Filiada</h4>
              <a
                href="http://tvcultura.com.br/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="logo-cultura"
                  src={logoCultura}
                  alt="Logotipo Cultura"
                />
              </a>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
