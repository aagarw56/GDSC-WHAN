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

            {/* Resources */}
            <nav className="footer__col" id="resources">
              <h4 className="footer__heading">Resources</h4>
              <ul className="footer__links">
                <li>
                  <Link to="/health-library">Health Library</Link>
                </li>
                <li>
                  <Link to="/find-doctor">Find a Doctor</Link>
                </li>
                <li>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__divider"></div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © 2025 Women's Health Advancement Network. All rights reserved.
            </p>

            <ul className="footer__legal">
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="dot">•</li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li className="dot">•</li>
              <li>
                <Link to="/disclaimer">Medical Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
