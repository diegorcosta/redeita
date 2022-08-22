import React from "react";

//img
import logoRedeita from "../img/logo-redeita-w.svg";
import logoFundacao from "../img/logo-fundacaopedroamerico.svg";
import logoUnifacisa from "../img/logo-unifacisa.svg";
import logoCultura from "../img/logo-cultura.svg";

//styles
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="main-footer">
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
                <a href="/">Diversidade</a>
              </li>
              <li>
                <a href="/">ITN</a>
              </li>
              <li>
                <a href="/">É Bom Saber</a>
              </li>
              <li>
                <a href="/">Ponto a Ponto</a>
              </li>
              <li>
                <a href="/">Em Dia</a>
              </li>
              <li>
                <a href="/">Ita Esportes</a>
              </li>
              <li>
                <a href="/">Ita FC</a>
              </li>
              <li>
                <a href="/">Ideia Livre</a>
              </li>
              <li>
                <a href="/">IT Games</a>
              </li>
            </ul>
          </div>

          <div className="column">
            <h2>Fale Conosco</h2>
            <ul>
              <li>
                <a href="/">WhatsApp</a>
              </li>
              <li>
                <a href="/">Redação</a>
              </li>
              <li>
                <a href="/">Comercial</a>
              </li>
              <li>
                <a href="/">Ouvidoria</a>
              </li>
            </ul>
            <h2>Links úteis</h2>
            <ul>
              <li>
                <a href="/">Editais</a>
              </li>
              <li>
                <a href="/">Trabalhe conosco</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="logos">
          <img
            className="logo-fundacao"
            src={logoFundacao}
            alt="Logotipo Fundação Pedro Américo"
          />
          <span>
            <div className="column">
              <div>
                <h4>Parceria</h4>
                <img
                  className="logo-unifacisa"
                  src={logoUnifacisa}
                  alt="Logotipo Unifacisa"
                />
              </div>
            </div>
            <div className="column">
              <h4>Filiada</h4>
              <img
                className="logo-cultura"
                src={logoCultura}
                alt="Logotipo Cultura"
              />
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
