import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, user, logout } = useAuth();

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
        <h1
  className="nav-home"
  onClick={() => handleScroll("about")}
  role="button"
  tabIndex={0}
>
  Women's Health Advancement Network
</h1>

    </div>
      <div className="nav-right">
        <div className="nav-links">
          <button onClick={() => handleScroll("topics")}>Health Topics</button>
          <button onClick={() => handleScroll("articles")}>Articles</button>
          <button onClick={() => handleScroll("resources")}>Resources</button>
        </div>

        <div className="nav-auth">
          {isLoggedIn ? (
            <>
              <button onClick={() => navigate("/profile")}>
                {user?.firstName || "Profile"}
              </button>
              <button className="nav-login" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="nav-login" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="nav-btn nav-signup" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}


