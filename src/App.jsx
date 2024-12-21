import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Chief_Patrons from "./components/Chief_Patrons";
import Patrons from "./components/Patrons";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Services />
        <Collaboration />
        <Chief_Patrons />
        <Patrons />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
