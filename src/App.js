import BannerCarousel from "./components/BannerCarousel";
import Programas from "./components/Programas";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BannerCarousel />
      <Programas />
      <Footer />
    </div>
  );
};

export default App;
