import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReproductiveHealth() {
  return (
    <>
      <Navbar />

      <main className="topic-page">
        {/* HERO */}
        <section className="topic-hero">
          <div className="topic-container">
            <span className="topic-kicker">Cycles & Gynecologic Health</span>
            <h1 className="topic-title">Reproductive Health</h1>
            <p className="topic-subtitle">
              Reproductive health includes menstrual cycle health, contraception,
              fertility, and conditions like PCOS, endometriosis, and fibroids.
              Knowing what’s typical and what isn’t helps you catch concerns early.
            </p>

            <div className="topic-cta">
              <a className="btn btn-primary" href="#ucsc">
                UCSC Resources
              </a>
              <a className="btn btn-secondary" href="#cycle">
                Cycle Health
              </a>
              <a className="btn btn-secondary" href="#resources">
                Trusted Resources
              </a>
            </div>

            <div className="topic-note">
              <strong>Seek urgent care</strong> if you have severe pelvic pain,
              heavy bleeding soaking through pads hourly, fainting, or symptoms of
              infection (fever + pelvic pain).
            </div>
          </div>
        </section>

        <div className="topic-container topic-body">
          {/* OVERVIEW */}
          <section className="topic-section">
            <h2 className="section-title">What reproductive health covers</h2>
            <p className="section-lead">
              Reproductive health is about more than pregnancy. It includes cycle
              regularity, pelvic pain, hormonal symptoms, contraception choices,
              fertility planning, and preventative screenings like Pap/HPV.
            </p>
          </section>

          {/* CYCLE HEALTH */}
          <section className="topic-section" id="cycle">
            <h2 className="section-title">Cycle health: what’s common vs what’s not</h2>
            <p className="section-lead">
              Cycles vary person to person, especially during puberty, postpartum,
              and perimenopause. Tracking your cycle can help you notice patterns and
              share clear info with a clinician.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Common experiences</h3>
                <p>
                  Mild cramps, mild mood changes, and some variation in cycle length
                  can be normal.
                </p>
              </div>

              <div className="resource-card">
                <h3>Potential red flags</h3>
                <p>
                  Very heavy bleeding, severe pain, bleeding between periods, cycles
                  that suddenly change, or symptoms that disrupt school/work.
                </p>
              </div>

              <div className="resource-card">
                <h3>What to track</h3>
                <p>
                  Start/end dates, flow heaviness, pain level, mood, sleep, headaches,
                  and any spotting.
                </p>
              </div>

              <div className="resource-card">
                <h3>When to get checked</h3>
                <p>
                  If irregular cycles persist, pain is severe, or symptoms last 2–3+
                  cycles with increasing impact.
                </p>
              </div>
            </div>
          </section>

          {/* CONDITIONS */}
          <section className="topic-section">
            <h2 className="section-title">Common reproductive health conditions</h2>
            <p className="section-lead">
              Many conditions are treatable, especially when addressed early. If you’re
              told “it’s normal” but you feel worse each month, it’s valid to seek a second opinion.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>PCOS</h3>
                <p>
                  Often involves irregular periods, acne, hair changes, and weight shifts.
                  Frequently connected with insulin resistance.
                </p>
                <a
                  className="topic-link"
                  href="https://www.cdc.gov/pcos/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC: PCOS overview
                </a>
              </div>

              <div className="resource-card">
                <h3>Endometriosis</h3>
                <p>
                  Can cause severe cramps, pelvic pain, pain with periods, and sometimes
                  fertility challenges. Diagnosis can take time, advocacy matters.
                </p>
                <a
                  className="topic-link"
                  href="https://www.womenshealth.gov/a-z-topics/endometriosis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OWH: Endometriosis
                </a>
              </div>

              <div className="resource-card">
                <h3>Fibroids</h3>
                <p>
                  Noncancerous growths that may cause heavy periods, pelvic pressure,
                  or pain.
                </p>
                <a
                  className="topic-link"
                  href="https://www.womenshealth.gov/a-z-topics/uterine-fibroids"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OWH: Uterine fibroids
                </a>
              </div>

              <div className="resource-card">
                <h3>PMS & PMDD</h3>
                <p>
                  PMS is common; PMDD is a severe mood disorder tied to the menstrual cycle
                  and is treatable.
                </p>
                <a
                  className="topic-link"
                  href="https://www.ncbi.nlm.nih.gov/books/NBK532307/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PMDD overview
                </a>
              </div>
            </div>
          </section>

          {/* PREVENTIVE CARE */}
          <section className="topic-section callout">
            <h2 className="section-title">Preventive care that protects long-term health</h2>
            <ul className="checklist">
              <li>
                <strong>Pap tests & HPV:</strong> Screening helps prevent cervical cancer by finding
                changes early.
              </li>
              <li>
                <strong>HPV vaccination:</strong> Reduces risk of HPV-related cancers (ask a provider
                about eligibility).
              </li>
              <li>
                <strong>Routine check-ins:</strong> If you have new pelvic pain, heavy bleeding,
                or persistent symptoms, get evaluated.
              </li>
            </ul>

            <a
              className="topic-link"
              href="https://www.womenshealth.gov/a-z-topics/pap-hpv-tests"
              target="_blank"
              rel="noopener noreferrer"
            >
              Office on Women’s Health: Pap & HPV tests
            </a>
          </section>

          {/* CONTRACEPTION & FERTILITY */}
          <section className="topic-section">
            <h2 className="section-title">Contraception & fertility</h2>
            <p className="section-lead">
              This page focuses on reproductive health systems. For consent/STI prevention,
              see Sexual Wellness. For pregnancy-specific care, see Pregnancy Care.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Contraception overview</h3>
                <p>
                  Options include pills, IUDs, implants, patches, rings, injections, and barrier
                  methods. A provider can help match options to your health and goals.
                </p>
                <a
                  className="topic-link"
                  href="https://www.plannedparenthood.org/learn/birth-control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Planned Parenthood: Birth control options
                </a>
              </div>

              <div className="resource-card">
                <h3>Fertility basics</h3>
                <p>
                  Fertility can be influenced by age, cycle regularity, PCOS, endometriosis,
                  thyroid health, and lifestyle factors. If trying for pregnancy with no success,
                  a clinician can guide next steps.
                </p>
                <a
                  className="topic-link"
                  href="https://www.womenshealth.gov/pregnancy/you-get-pregnant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OWH: Getting pregnant basics
                </a>
              </div>
            </div>
          </section>

          {/* UCSC */}
          <section className="topic-section" id="ucsc">
            <h2 className="section-title">UCSC resources</h2>
            <p className="section-lead">
              UCSC students can access medical care, referrals, and support services through campus.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Student Health Center (UCSC)</h3>
                <p>
                  Primary care visits, reproductive health support, referrals, and guidance
                  for symptoms like cycle changes, pelvic pain, or hormonal concerns.
                </p>
                <a
                  className="topic-link"
                  href="https://healthcenter.ucsc.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCSC Student Health Center
                </a>
              </div>

              <div className="resource-card">
                <h3>CAPS (stress & mental health)</h3>
                <p>
                  Hormonal symptoms and reproductive health concerns can affect mood and stress.
                  CAPS provides counseling support.
                </p>
                <a
                  className="topic-link"
                  href="https://caps.ucsc.edu/get-help/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAPS: Get help
                </a>
              </div>

              <div className="resource-card">
                <h3>Basic Needs Center</h3>
                <p>
                  Support for food insecurity, housing instability, and financial stress,
                  all of which can impact health and access to care.
                </p>
                <a
                  className="topic-link"
                  href="https://basicneeds.ucsc.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCSC Basic Needs Center
                </a>
              </div>

              <div className="resource-card">
                <h3>CARE Office (support & advocacy)</h3>
                <p>
                  Trauma-informed advocacy and support for sexual assault, relationship violence,
                  and stalking.
                </p>
                <a
                  className="topic-link"
                  href="https://care.ucsc.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCSC CARE Office
                </a>
              </div>
            </div>
          </section>

          {/* RESOURCES */}
          <section className="topic-section" id="resources">
            <h2 className="section-title">Trusted resources</h2>

            <div className="link-box">
              <h3>Relevant information</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.womenshealth.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office on Women’s Health (OWH)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cdc.gov/reproductivehealth/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CDC: Reproductive Health
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.plannedparenthood.org/learn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Planned Parenthood: Education
                  </a>
                </li>
              </ul>
              <p className="muted">
                If your symptoms are dismissed but you’re still struggling, it’s okay to ask questions,
                request testing, or seek a second opinion.
              </p>
            </div>
          </section>

          {/* CLOSING */}
          <section className="topic-section closing">
            <h2 className="section-title">Know your baseline</h2>
            <p>
              The most powerful tool is awareness. Track your cycle, take symptoms seriously,
              and seek care when things feel off. Early support can prevent long-term health issues.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
