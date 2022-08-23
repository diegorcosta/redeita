import React from "react";
import listaProgramas from "../data/programas";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

//style
import "../styles/programas.scss";

const Programas = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 240;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 240;
  };

  return (
    <section className="programas">
      <div className="container">
        <h1>Programas</h1>
        <div className="arrow">
          <MdChevronLeft onClick={slideLeft} />
          <div className="scroll" id="slider">
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
          <MdChevronRight onClick={slideRight} />
        </div>
      </div>
    </section>
  );
};

export default Programas;
