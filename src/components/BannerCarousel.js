import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//img
import carousel1 from "../img/carousel/carousel-1.png";
import carousel2 from "../img/carousel/carousel-2.png";
import carousel3 from "../img/carousel/carousel-3.png";
import carousel4 from "../img/carousel/carousel-4.png";

//style
import "../styles/carousel.scss";

const BannerCarousel = () => {
  return (
    <Carousel
      autoPlay
      centerMode
      centerSlidePercentage={100}
      infiniteLoop
      interval={6000}
      showStatus={false}
    >
      <div>
        <div className="carousel-1">
          <div className="container">
            <img src={carousel1} alt="Carousel 1" />
          </div>
        </div>
      </div>
      <div>
        <div className="carousel-2">
          <div className="container">
            <img src={carousel2} alt="Carousel 2" />
          </div>
        </div>
      </div>
      <div className="carousel-3">
        <div className="container">
          <img src={carousel3} alt="Carousel 3" />
        </div>
      </div>
      <div>
        <div className="carousel-4">
          <div className="container">
            <img src={carousel4} alt="Carousel 4" />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
