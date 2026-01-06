import heroImage from "../assets/women.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <p className="hero-tagline">Your Health, Your Journey</p>

        <h2>
          Empowering women with comprehensive health resources, expert guidance,
          and a supportive community for every stage of life.
        </h2>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
