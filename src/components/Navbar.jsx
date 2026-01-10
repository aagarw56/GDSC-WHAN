import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      // If already on homepage, scroll to section
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on homepage, navigate to home with hash
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo"></span>
        <h1>Women's Health Advancement Network</h1>
      </div>

      <div className="nav-right">
        {/* Scroll to sections */}
        <button onClick={() => handleScroll("topics")}>Health Topics</button>
        <button onClick={() => handleScroll("articles")}>Articles</button>
        <button onClick={() => handleScroll("resources")}>Resources</button>
    
        {/* Go to another page */}
        <button
          className="nav-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
