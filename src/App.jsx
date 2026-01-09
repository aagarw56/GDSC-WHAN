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

export default function App() {
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
