import "./App.css";
import Faqs from "./FAQs";
import FooterFile from "./Footer";
import FormPopup from "./FormPopUp";
import Table from "./ReferalTable";
import HeroSection from "./hero";
import Information from "./information";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Information />
      <Table />
      <Faqs />
      <FooterFile />
    </div>
  );
}

export default App;
