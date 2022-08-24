import React from "react";
import listaProgramas from "../data/programas";

//style
import "../styles/programas.scss";

const Programas = () => {
  return (
    <section className="programas">
      <div className="container">
        <h1>Programas</h1>
        <ul>
          {listaProgramas.map((programa) => (
            <li key={programa.id}>
              <a href={programa.link} target="_blank" rel="noreferrer">
                <img src={programa.src} alt={programa.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Programas;
