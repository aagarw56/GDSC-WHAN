import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HealthTopics from "./components/HealthTopics";
import Featured from "./components/Featured";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import Safety from "./pages/Safety";
import MentalWellness from "./pages/MentalWellness";
import HormonalHealth from "./pages/HormonalHealth";
import PregnancyCare from "./pages/PregnancyCare";
import ReproductiveHealth from "./pages/ReproductiveHealth";
import SexualWellness from "./pages/SexualWellness";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <HealthTopics />
      <Featured />
      <Newsletter />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics/safety" element={<Safety />} />
      <Route path="/topics/mental-wellness" element={<MentalWellness />} />
      <Route path="/topics/hormonal-health" element={<HormonalHealth />} />
      <Route path="/topics/pregnancy-care" element={<PregnancyCare />} />
      <Route path="/topics/reproductive-health" element={<ReproductiveHealth />} />
      <Route path="/topics/sexual-wellness" element={<SexualWellness />} />

    </Routes>
  );
}
