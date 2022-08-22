import React from "react";
import listaProgramas from "../data/programas";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

//style
import "../styles/programas.scss";

const Programas = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section className="programas">
      <div className="container">
        <h1>Programas</h1>
        <div className="arrow">
          <MdChevronLeft className="left-arrow" onClick={slideLeft} />
          <div className="scroll" id="slider">
            <ul>
              {listaProgramas.map((programa) => (
                <li key={programa.id}>
                  <a href="/">
                    <img src={programa.src} alt={programa.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <MdChevronRight className="right-arrow" onClick={slideRight} />
        </div>
      </div>
    </section>
  );
};

export default Programas;
