import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HealthTopics from "./components/HealthTopics";
import Featured from "./components/Featured";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";

import AboutUs from "./pages/AboutUs";
import Map from "./pages/Map";
import HealthLibrary from "./pages/HealthLibrary";
import CommunityForum from "./pages/CommunityForum";
import Safety from "./pages/Safety";
import MentalWellness from "./pages/MentalWellness";
import HormonalHealth from "./pages/HormonalHealth";
import PregnancyCare from "./pages/PregnancyCare";
import ReproductiveHealth from "./pages/ReproductiveHealth";
import SexualWellness from "./pages/SexualWellness";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";

function Layout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <HealthTopics />
      <Featured />
      <Newsletter />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/find-doctor" element={<Map />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/health-library" element={<HealthLibrary />} />

        <Route path="/topics/safety" element={<Safety />} />
        <Route path="/topics/mental-wellness" element={<MentalWellness />} />
        <Route path="/topics/hormonal-health" element={<HormonalHealth />} />
        <Route path="/topics/pregnancy-care" element={<PregnancyCare />} />
        <Route path="/topics/reproductive-health" element={<ReproductiveHealth />} />
        <Route path="/topics/sexual-wellness" element={<SexualWellness />} />
      </Route>
    </Routes>
  );
}
