import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">❤️</span>
        <h1>Women's Health Advancement Network</h1>
      </div>

      <div className="nav-right">
        {/* Scroll to sections */}
        <a href="#topics">Health Topics</a>
        <a href="#articles">Articles</a>
        <a href="#resources">Resources</a>
        <a href="#about">About</a>

        {/* Go to another page */}
        <Link to="/login">
          <button className="nav-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
}

