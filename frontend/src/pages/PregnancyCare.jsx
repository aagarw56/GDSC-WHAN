import Footer from "../components/Footer";

export default function PregnancyCare() {
  return (
    <>

      <main className="topic-page">
        {/* HERO */}
        <section className="topic-hero">
          <div className="topic-container">
            <span className="topic-kicker">Prenatal & Postpartum</span>
            <h1 className="topic-title">Pregnancy Care</h1>
            <p className="topic-subtitle">
              Pregnancy care focuses on prenatal health, nutrition, medical checkups,
              and postpartum support. Whether you're pregnant now or planning ahead,
              informed care can protect both parent and baby.
            </p>

            <div className="topic-cta">
              <a className="btn btn-primary" href="#trimester">
                Trimester Roadmap
              </a>
              <a className="btn btn-secondary" href="#warning">
                Warning Signs
              </a>
              <a className="btn btn-secondary" href="#ucsc">
                UCSC Resources
              </a>
            </div>

            <div className="topic-note">
              <strong>Urgent warning:</strong> If you have heavy bleeding, severe abdominal pain,
              fainting, severe headache/vision changes, or trouble breathing, seek emergency care.
            </div>
          </div>
        </section>

        <div className="topic-container topic-body">
          {/* OVERVIEW */}
          <section className="topic-section">
            <h2 className="section-title">What prenatal care includes</h2>
            <p className="section-lead">
              Prenatal care is regular medical support during pregnancy. It helps monitor
              growth, catch complications early, and support nutrition, mental health,
              and safer delivery planning.
            </p>
          </section>

          {/* TRIMESTER ROADMAP */}
          <section className="topic-section" id="trimester">
            <h2 className="section-title">Trimester roadmap</h2>
            <p className="section-lead">
              Every pregnancy is different, but this overview shows what commonly happens
              and what providers typically check.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>First trimester (Weeks 1–12)</h3>
                <p>
                  Early appointments, pregnancy confirmation, dating ultrasound (if needed),
                  baseline labs, nausea/fatigue management, and prenatal vitamin planning.
                </p>
              </div>

              <div className="resource-card">
                <h3>Second trimester (Weeks 13–27)</h3>
                <p>
                  Anatomy scan, monitoring growth, managing back pain/heartburn, and screening
                  for certain conditions (varies by provider).
                </p>
              </div>

              <div className="resource-card">
                <h3>Third trimester (Weeks 28–40)</h3>
                <p>
                  More frequent visits, birth planning, monitoring blood pressure,
                  preparing for labor signs, and postpartum planning.
                </p>
              </div>

              <div className="resource-card">
                <h3>Postpartum (after delivery)</h3>
                <p>
                  Recovery support, mood check-ins, sleep and feeding support, and follow-up care.
                  Postpartum depression/anxiety support is available.
                </p>
                <a
                  className="topic-link"
                  href="https://postpartum.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Postpartum Support International (PSI)
                </a>
              </div>
            </div>
          </section>

          {/* NUTRITION + HEALTH HABITS */}
          <section className="topic-section">
            <h2 className="section-title">Nutrition & healthy habits</h2>
            <p className="section-lead">
              Your provider can personalize recommendations, but these are common priorities
              for pregnancy health.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Prenatal vitamins</h3>
                <p>
                  Many providers recommend prenatal vitamins (often including folic acid).
                  Ask your clinician what's best for you.
                </p>
                <a
                  className="topic-link"
                  href="https://www.cdc.gov/ncbddd/folicacid/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC: Folic acid info
                </a>
              </div>

              <div className="resource-card">
                <h3>Balanced meals</h3>
                <p>
                  Focus on protein, fiber, iron-rich foods, calcium, and hydration.
                  If nausea is severe, small frequent meals can help.
                </p>
              </div>

              <div className="resource-card">
                <h3>Movement</h3>
                <p>
                  Gentle activity (as approved by a provider) can help with mood, circulation,
                  and back pain.
                </p>
              </div>

              <div className="resource-card">
                <h3>Sleep & stress</h3>
                <p>
                  Pregnancy can disrupt sleep. Prioritize rest, ask for help, and consider
                  mental health support if anxiety becomes overwhelming.
                </p>
              </div>
            </div>
          </section>

          {/* WARNING SIGNS */}
          <section className="topic-section callout" id="warning">
            <h2 className="section-title">Warning signs: when to seek urgent care</h2>
            <ul className="checklist">
              <li>Heavy bleeding or passing large clots</li>
              <li>Severe abdominal pain or intense cramping</li>
              <li>Fainting, dizziness, or signs of shock</li>
              <li>Severe headache, vision changes, or swelling (especially hands/face)</li>
              <li>Fever, chills, or severe infection symptoms</li>
              <li>Decreased fetal movement later in pregnancy</li>
              <li>Shortness of breath or chest pain</li>
            </ul>
            <a
              className="topic-link"
              href="https://www.acog.org/womens-health"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACOG: Pregnancy & women's health info
            </a>
          </section>

          {/* POSTPARTUM */}
          <section className="topic-section">
            <h2 className="section-title">Postpartum support matters</h2>
            <p className="section-lead">
              The weeks after birth can bring major physical and emotional changes.
              Postpartum depression and anxiety are common and treatable.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Physical recovery</h3>
                <p>
                  Bleeding, soreness, and fatigue are common. If pain becomes severe, fever appears,
                  or symptoms worsen, contact a clinician.
                </p>
              </div>

              <div className="resource-card">
                <h3>Mental health</h3>
                <p>
                  If you feel persistent sadness, panic, numbness, or intrusive thoughts, reach out.
                  Support is available.
                </p>
                <a
                  className="topic-link"
                  href="https://988lifeline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  988 Lifeline (U.S.)
                </a>
              </div>

              <div className="resource-card">
                <h3>Support networks</h3>
                <p>
                  Ask for help early: friends, family, counseling, campus resources, and community orgs.
                </p>
              </div>

              <div className="resource-card">
                <h3>Feeding support</h3>
                <p>
                  Feeding can be challenging. If available, ask your provider about lactation support
                  or local resources.
                </p>
              </div>
            </div>
          </section>

          {/* UCSC */}
          <section className="topic-section" id="ucsc">
            <h2 className="section-title">UCSC resources</h2>
            <p className="section-lead">
              UCSC students can access healthcare, counseling, and basic needs support, especially important
              during pregnancy and postpartum.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Student Health Center (UCSC)</h3>
                <p>
                  Medical visits, referrals, and guidance for pregnancy-related care planning.
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
                <h3>CAPS (mental health support)</h3>
                <p>
                  Pregnancy and postpartum can affect mental health. CAPS offers counseling and crisis support.
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
                  Support for food insecurity, housing instability, and financial stress.
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
                <h3>DRC (academic accommodations)</h3>
                <p>
                  If you need accommodations for health-related reasons, the DRC can help coordinate support.
                </p>
                <a
                  className="topic-link"
                  href="https://drc.ucsc.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disability Resource Center (DRC)
                </a>
              </div>
            </div>
          </section>

          {/* RESOURCES */}
          <section className="topic-section" id="resources">
            <h2 className="section-title">Trusted resources</h2>

            <div className="link-box">
              <h3>Pregnancy information</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.acog.org/womens-health"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ACOG: Women's health & pregnancy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cdc.gov/pregnancy/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CDC: Pregnancy information
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.womenshealth.gov/pregnancy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office on Women's Health: Pregnancy
                  </a>
                </li>
              </ul>
              <p className="muted">
                If you're pregnant and unsure where to start, begin with a healthcare provider
                to confirm pregnancy and discuss next steps.
              </p>
            </div>
          </section>

          {/* CLOSING */}
          <section className="topic-section closing">
            <h2 className="section-title">Support early, support often</h2>
            <p>
              Pregnancy and postpartum can be intense, physically and emotionally. Prenatal care,
              symptom tracking, and support systems can make the experience safer and healthier.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
