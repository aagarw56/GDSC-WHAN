import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MentalWellness() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <h1>MentalWellness</h1>
        <p>Content for Safety topic goes here.</p>
      </main>
      <Footer />
    </>
  );
}