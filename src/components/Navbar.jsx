export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">❤️</span>
        <h1>Women's Health Advancement Network</h1>
      </div>

      <div className="nav-right">
        <a href="#">Health Topics</a>
        <a href="#">Articles</a>
        <a href="#">Resources</a>
        <a href="#">About</a>
        <button className="nav-btn">Contact Us</button>
      </div>
    </nav>
  );
}
