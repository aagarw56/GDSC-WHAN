import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HealthTopics from "./components/HealthTopics";
import Featured from "./components/Featured";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import About from "./pages/About";  // import About page
import ScrollToHash from "./components/ScrollToHash";

import AboutUs from "./pages/AboutUs";
import Safety from "./pages/Safety";
import MentalWellness from "./pages/MentalWellness";
import HormonalHealth from "./pages/HormonalHealth";
import PregnancyCare from "./pages/PregnancyCare";
import ReproductiveHealth from "./pages/ReproductiveHealth";
import SexualWellness from "./pages/SexualWellness";



function Home() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <HealthTopics />
              <Featured />
              <Newsletter />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />  {/* About route */}
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/topics/safety" element={<Safety />} />
      <Route path="/topics/mental-wellness" element={<MentalWellness />} />
      <Route path="/topics/hormonal-health" element={<HormonalHealth />} />
      <Route path="/topics/pregnancy-care" element={<PregnancyCare />} />
      <Route path="/topics/reproductive-health" element={<ReproductiveHealth />} />
      <Route path="/topics/sexual-wellness" element={<SexualWellness />} />

    </Routes>
  );
}
