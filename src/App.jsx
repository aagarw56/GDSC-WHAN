import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HealthTopics from "./components/HealthTopics";
import Featured from "./components/Featured";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <HealthTopics />
              <Featured />
              <Newsletter />
              <Footer />
            </>
          }
        />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
