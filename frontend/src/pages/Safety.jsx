
import { useAuth } from "../context/AuthContext";
import { trackResourceClick } from "../utils/trackClick";

export default function Safety() {
  const { token } = useAuth();
  return (
    <>

      <main className="topic-page">
        {/* HERO */}
        <section className="topic-hero">
          <div className="topic-container">
            <span className="topic-kicker">Health Topic</span>
            <h1 className="topic-title">Safety & Personal Protection</h1>
            <p className="topic-subtitle">
              Practical tools, campus resources, and crisis support, designed to
              help you feel informed, prepared, and supported.
            </p>

            <div className="topic-cta">
              <a className="btn btn-primary" href="#ucsc">
                UCSC Resources
              </a>
              <a className="btn btn-secondary" href="#hotlines">
                Hotlines & Help
              </a>
            </div>

            <div className="topic-note">
              <strong>If you are in immediate danger:</strong> call <strong>911</strong>.
              If you cant safely speak, consider texting 911 (availability varies by area).
            </div>
          </div>
        </section>

        <div className="topic-container topic-body">
          {/* STATS */}
          <section className="topic-section">
            <h2 className="section-title">Why this matters</h2>
            <p className="section-lead">
              Violence against women is widespread and often underreported. The goal of
              sharing these numbers is not to scare you, its to validate concerns, encourage
              preparation, and make it easier to seek support early.
            </p>

            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-value">1 in 3</div>
                <div className="stat-label">
                  Women experience physical or sexual violence in their lifetime.
                </div>
                <a
                  className="topic-link"
                  href="https://www.who.int/news/item/09-03-2021-devastatingly-pervasive-1-in-3-women-globally-experience-violence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source: WHO
                </a>
              </div>

              <div className="stat-card">
                <div className="stat-value">~3/day</div>
                <div className="stat-label">
                  Nearly 3 women per day in the U.S. are killed by an intimate partner.
                </div>
                <a
                  className="topic-link"
                  href="https://sanctuaryforfamilies.org/femicide-epidemic/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source: Sanctuary for Families
                </a>
              </div>

              <div className="stat-card">
                <div className="stat-value">1 in 5</div>
                <div className="stat-label">
                  A reasonable average estimate for women sexually assaulted while in college.
                </div>
                <a
                  className="topic-link"
                  href="https://pubmed.ncbi.nlm.nih.gov/28375675/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source: Journal of Sex Research review
                </a>
              </div>

              <div className="stat-card">
                <div className="stat-value">High risk</div>
                <div className="stat-label">
                  Strangulation is a major predictor of future lethal violence.
                </div>
                <a
                  className="topic-link"
                  href="https://younitynj.org/strangulation-too-often-ignored-too-often-fatal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more (risk & warning signs)
                </a>
              </div>
            </div>
          </section>

          {/* QUICK ACTION */}
          <section className="topic-section callout">
            <h2 className="section-title">Quick safety actions</h2>
            <ul className="checklist">
              <li>Share your location with a trusted friend when walking alone at night.</li>
              <li>Trust your instincts—leave early if something feels “off.”</li>
              <li>Walk with others when possible; stay in well-lit, familiar routes.</li>
              <li>Keep your phone charged; consider a small portable charger.</li>
              <li>Create a simple “check-in” text plan with friends (ex: “home ✅”).</li>
            </ul>
          </section>

          {/* TOOLS */}
          <section className="topic-section">
            <h2 className="section-title">Personal safety tools</h2>
            <p className="section-lead">
              Safety tools can help you get attention, create distance, and buy time.
              Always check local laws and campus rules before carrying any device.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Pepper spray</h3>
                <p>
                  Small, portable deterrent. Practice how to unlock and aim it safely.
                </p>
              </div>

              <div className="resource-card">
                <h3>Personal alarm / safety whistle</h3>
                <p>
                  Loud sound can draw attention and interrupt an unsafe situation.
                </p>
              </div>

              <div className="resource-card">
                <h3>Mini flashlight</h3>
                <p>
                  Helps with visibility and awareness on dark paths or stairways.
                </p>
              </div>

              <div className="resource-card">
                <h3>Portable charger</h3>
                <p>
                  Staying reachable matters, especially at night or off-campus.
                </p>
              </div>
            </div>

            <div className="link-box">
              <h3>Where to buy (examples)</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.amazon.com/dp/B07NLFQS7T"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Personal Safety Keychain Kit
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com/dp/B0FJBXY5ZF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pepper Spray Keychain (Refillable)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com/dp/B091MFX8R5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Personal Alarm & Defense Tool
                  </a>
                </li>
              </ul>
              <p className="muted">
                Tip: A “safety tool” is only helpful if you can access it quickly—avoid
                burying it in the bottom of a bag.
              </p>
            </div>
          </section>

          {/* UCSC */}
          <section className="topic-section" id="ucsc">
            <h2 className="section-title">UCSC resources</h2>
            <p className="section-lead">
              Campus services that can support you with rides, alerts, and reporting.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Safe Ride (UCSC)</h3>
                <p>
                  Free evening rides on the residential campus. Available roughly{" "}
                  <strong>7:00 p.m. – 12:00 a.m.</strong>, seven days a week when classes
                  are in session.
                </p>
                <a
                  href="https://transportation.ucsc.edu/buses-shuttles/safe-ride/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topic-link"
                >
                  Safe Ride details
                </a>
              </div>

              <div className="resource-card">
                <h3>Campus alerts (OEM)</h3>
                <p>
                  UCSC notification systems share emergency updates and safety alerts.
                </p>
                <a
                  href="https://oem.ucsc.edu/notification-systems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topic-link"
                >
                  Notification systems
                </a>
              </div>

              <div className="resource-card">
                <h3>RCSP Dispatch</h3>
                <p>
                  Residential Community Service Partners help with lockouts, first aid,
                  documenting policy issues, and emergency response support.
                </p>
                <div className="mini">
                  <strong>(831) 459-2100</strong>
                </div>
                <a
                  href="https://catalog.ucsc.edu/en/current/general-catalog/resources-residency-and-policies/policies/uc-santa-cruz-police-department/community-safety-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topic-link"
                >
                  RCSP info
                </a>
              </div>

              <div className="resource-card">
                <h3>UCSC Police (non-emergency)</h3>
                <p>24-hour non-emergency line for assistance and reporting.</p>
                <div className="mini">
                  <strong>(831) 459-2231</strong> <span className="muted">ext. 1</span>
                </div>
                <a
                  href="https://police.ucsc.edu/about/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topic-link"
                >
                  Police contact page
                </a>
              </div>
            </div>

            <div className="link-box">
              <h3>Reporting</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://uctitleix.i-sight.com/portal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UC Incident Reporting (Title IX portal)
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* HOTLINES */}
          <section className="topic-section" id="hotlines">
            <h2 className="section-title">Hotlines & support</h2>
            <p className="section-lead">
              If youre not sure what to do next, these services can help you talk through options
              confidentially and connect you to local resources.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>National Domestic Violence Hotline</h3>
                <p>24/7 support, safety planning, and local referrals.</p>
                <ul className="mini-list">
                  <li>
                    Website:{" "}
                    <a
                      href="https://www.thehotline.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      thehotline.org
                    </a>
                  </li>
                  <li>
                    Call: <strong>1-800-799-SAFE (7233)</strong>
                  </li>
                  <li>
                    Text: <strong>START</strong> to <strong>88788</strong>
                  </li>
                </ul>
                <a
                  className="topic-link"
                  href="https://nnedv.org/get-help/more-information/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More hotline info (NNEDV)
                </a>
              </div>

              <div className="resource-card">
                <h3>RAINN (Sexual Assault Hotline)</h3>
                <p>Confidential support and options after sexual violence.</p>
                <a
                  href="https://rainn.org/help-and-healing/hotline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topic-link"
                >
                  RAINN hotline & chat
                </a>
              </div>

              <div className="resource-card">
                <h3>988 Suicide & Crisis Lifeline</h3>
                <p>
                  If youre overwhelmed, scared, or in crisis, help is available.
                </p>
                <a
                  href="https://988lifeline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topic-link"
                >
                  988 Lifeline
                </a>
              </div>

              <div className="resource-card">
                <h3>211 / 898211 (Local resources)</h3>
                <p>
                  Connect to experts for health, human services, and crisis intervention.
                </p>
                <ul className="mini-list">
                  <li>
                    Call: <strong>211</strong>
                  </li>
                  <li>
                    Text your ZIP code to <strong>898211</strong>
                  </li>
                </ul>
                <a
                  href="https://211bayarea.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topic-link"
                >
                  211 Bay Area
                </a>
              </div>
            </div>

            <div className="link-box">
              <h3>Financial support after a crime (California)</h3>
              <p className="muted">
                CalVCB may help reimburse certain crime-related expenses (varies by eligibility).
              </p>
              <a
                href="https://victims.ca.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="topic-link"
              >
                California Victim Compensation Board (CalVCB)
              </a>
            </div>
          </section>

          {/* DIGITAL SAFETY */}
          <section className="topic-section">
            <h2 className="section-title">Digital & privacy safety</h2>
            <p className="section-lead">
              Safety also includes your digital footprint—especially on campus.
            </p>
            <ul className="checklist">
              <li>Turn off “precise location” for apps that dont need it.</li>
              <li>Use strong passwords + enable two-factor authentication (2FA).</li>
              <li>Be cautious sharing schedules, dorm info, or “live” locations publicly.</li>
              <li>Review privacy settings on social media regularly.</li>
            </ul>
          </section>

          {/* CLOSING */}
          <section className="topic-section closing">
            <h2 className="section-title">You are not alone</h2>
            <p>
              You dont have to handle this by yourself. Whether you want to report,
              get medical care, talk confidentially, or make a safety plan, support exists.
              Reaching out is a strong and valid step.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
