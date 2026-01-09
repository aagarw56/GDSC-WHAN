import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer">
        <div className="footer__inner">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__col footer__brand">
              <div className="brand">
                <span className="brand__icon">♥</span>
                <h3 className="brand__name">
                  Women's Health Advancement <br /> Network
                </h3>
              </div>
              <p className="footer__text">
                Empowering women with trusted health information and support.
              </p>
            </div>

            {/* Quick Links */}
            <nav className="footer__col">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__links">
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>

              </ul>
            </nav>

            {/* Resources */}
            <nav className="footer__col">
              <h4 className="footer__heading">Resources</h4>
              <ul className="footer__links">
                <li><a href="#">Health Library</a></li>
                <li><a href="#">Find a Doctor</a></li>
                <li><a href="#">Community Forum</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </nav>
          </div>

          <div className="footer__divider"></div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © 2025 Women's Health Advancement Network. All rights reserved.
            </p>

            <ul className="footer__legal">
              <li><a href="#">Privacy Policy</a></li>
              <li className="dot">•</li>
              <li><a href="#">Terms of Service</a></li>
              <li className="dot">•</li>
              <li><a href="#">Medical Disclaimer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
