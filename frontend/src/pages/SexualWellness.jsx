import Footer from "../components/Footer";

export default function SexualWellness() {
  return (
    <>

      <main className="topic-page">
        {/* HERO */}
        <section className="topic-hero">
          <div className="topic-container">
            <span className="topic-kicker">Health Topic</span>
            <h1 className="topic-title">Sexual Health & Wellness</h1>
            <p className="topic-subtitle">
              Sexual wellness is part of overall health-physical, emotional, and
              relational. It includes desire, comfort, safety, consent,
              STI prevention, and access to care.
            </p>

            <div className="topic-cta">
              <a className="btn btn-primary" href="#ucsc">
                UCSC Resources
              </a>
              <a className="btn btn-secondary" href="#screening">
                Testing & Screening
              </a>
              <a className="btn btn-secondary" href="#resources">
                Trusted Resources
              </a>
            </div>

            <div className="topic-note">
              <strong>Reminder:</strong> You deserve care that is respectful,
              non-judgmental, and confidential. If something feels painful,
              stressful, or confusing, it’s valid to seek support.
            </div>
          </div>
        </section>

        <div className="topic-container topic-body">
          {/* OVERVIEW */}
          <section className="topic-section">
            <h2 className="section-title">What sexual wellness really means</h2>
            <p className="section-lead">
              Sexual health includes comfort, function, consent, 
              boundaries, safety, self-esteem, and reproductive
              health. Understanding your body and knowing when to ask for help can
              make a major difference.
            </p>
          </section>

          {/* HORMONES */}
          <section className="topic-section">
            <h2 className="section-title">How hormones influence sexual health</h2>
            <p className="section-lead">
              Hormones play a central role in libido, and
              overall sexual function. Stress and sleep also matter, sometimes as
              much as hormones do.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Estrogen</h3>
                <p>
                  Supports vaginal lubrication, elasticity, and comfort during
                  sex. Changes during postpartum or menopause can lead to dryness.
                </p>
              </div>

              <div className="resource-card">
                <h3>Progesterone</h3>
                <p>
                  Can influence mood, energy, and overall sexual interest depending
                  on the cycle stage.
                </p>
              </div>

              <div className="resource-card">
                <h3>Testosterone</h3>
                <p>
                  Impacts arousal, and energy. Women have testosterone too,
                  just in smaller amounts than men.
                </p>
              </div>

              <div className="resource-card">
                <h3>Thyroid hormones</h3>
                <p>
                  Thyroid imbalance can affect energy, mood, and sexual desire.
                </p>
              </div>

              <div className="resource-card">
                <h3>Cortisol (stress hormone)</h3>
                <p>
                  Chronic stress can reduce libido and make arousal harder by
                  keeping the body in “survival mode.”
                </p>
              </div>
            </div>

            <div className="link-box">
              <h3>Learn more</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.womenshealth.gov/sexual-health"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office on Women’s Health: Sexual Health
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.endocrine.org/patient-engagement/endocrine-library"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Endocrine Society: Hormone Education
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* COMMON CHALLENGES */}
          <section className="topic-section">
            <h2 className="section-title">Common sexual health challenges</h2>
            <p className="section-lead">
              These issues are extremely common and treatable. You are not alone,
              and help exists.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Low libido</h3>
                <p>
                  Can be caused by stress, depression/anxiety, hormonal shifts,
                  medications (like SSRIs), relationship factors, or sleep issues.
                </p>
              </div>

              <div className="resource-card">
                <h3>STIs</h3>
                <p>
                  Some STIs may have no symptoms at first. Regular screening and
                  early treatment protect long-term health and fertility.
                </p>
              </div>

              <div className="resource-card">
                <h3>Body image & self-esteem</h3>
                <p>
                  Self-judgment can block pleasure and intimacy. Therapy and
                  supportive communication can help.
                </p>
              </div>

              <div className="resource-card">
                <h3>Consent & boundaries stress</h3>
                <p>
                  Feeling pressured or unsafe affects desire and well-being. Consent
                  should always be enthusiastic and ongoing.
                </p>
              </div>
            </div>
          </section>

          {/* SUPPORTING WELLNESS */}
          <section className="topic-section callout">
            <h2 className="section-title">Everyday tips for sexual wellness</h2>
            <ul className="checklist">
              <li>
                <strong>Use lubrication if needed:</strong> water-based or silicone-based
                lubricants can reduce friction and discomfort.
              </li>
              <li>
                <strong>Prioritize communication:</strong> share boundaries, preferences,
                and what feels safe and enjoyable.
              </li>
              <li>
                <strong>Practice safe sex:</strong> condoms and dental dams reduce STI risk.
              </li>
              <li>
                <strong>Mind-body connection:</strong> mindfulness, yoga, and breathwork can
                improve relaxation and pleasure.
              </li>
              <li>
                <strong>Pelvic floor health:</strong> pelvic floor PT can help with pain,
                tension, and function.
              </li>
              <li>
                <strong>Track patterns:</strong> notice how cycle phase, stress, sleep, and
                mood affect libido and comfort.
              </li>
            </ul>
          </section>

          {/* RESOURCES & SUPPORT */}
<section className="topic-section">
  <h2 className="section-title">Prevention, consent, and screening resources</h2>
  <p className="section-lead">
    Sexual wellness includes prevention, education, consent, respectful care, and
    access to health services. These resources support safety, informed decisions,
    and long-term well-being.
  </p>

  <div className="resource-grid">
    <div className="resource-card">
      <h3>STI testing & treatment</h3>
      <p>
        Regular screening helps protect your health, especially because many STIs can
        have no symptoms at first. Testing can also reduce long-term complications.
      </p>
      <a
        className="topic-link"
        href="https://www.cdc.gov/std/default.htm"
        target="_blank"
        rel="noopener noreferrer"
      >
        CDC: STI information & prevention
      </a>
    </div>

    <div className="resource-card">
      <h3>Contraception & pregnancy prevention</h3>
      <p>
        Contraception options vary by effectiveness and side effects. A provider can help
        you choose what fits your health needs and preferences.
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
      <h3>Consent & healthy relationships</h3>
      <p>
        Consent should be clear, freely given, and ongoing. Healthy relationships include
        respect, boundaries, and safety.
      </p>
      <a
        className="topic-link"
        href="https://www.rainn.org/articles/what-is-consent"
        target="_blank"
        rel="noopener noreferrer"
      >
        RAINN: What is consent?
      </a>
    </div>

    <div className="resource-card">
      <h3>Reproductive health care</h3>
      <p>
        Routine care like Pap tests, HPV prevention, and pelvic health check-ups can help
        detect issues early and support long-term health.
      </p>
      <a
        className="topic-link"
        href="https://www.womenshealth.gov/a-z-topics/pap-hpv-tests"
        target="_blank"
        rel="noopener noreferrer"
      >
        Office on Women’s Health: Pap & HPV tests
      </a>
    </div>

    <div className="resource-card">
      <h3>Support after sexual violence</h3>
      <p>
        If you or someone you know has experienced sexual violence, support is available.
        You can get help with safety planning, medical options, and emotional support.
      </p>
      <a
        className="topic-link"
        href="https://www.rainn.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        RAINN: Support & resources
      </a>
    </div>

    <div className="resource-card">
      <h3>Communication & wellbeing</h3>
      <p>
        Stress, anxiety, depression, and trauma can affect comfort and relationships. Mental
        health support can improve overall wellbeing and health outcomes.
      </p>
      <a
        className="topic-link"
        href="https://www.nimh.nih.gov/health"
        target="_blank"
        rel="noopener noreferrer"
      >
        NIMH: Mental health information
      </a>
    </div>
  </div>
</section>


          {/* SCREENING */}
          <section className="topic-section" id="screening">
            <h2 className="section-title">Testing, screening, and prevention</h2>
            <p className="section-lead">
              Regular screening is one of the most protective things you can do for
              sexual health, especially because many STIs can be asymptomatic.
            </p>

            <ul className="checklist">
              <li>Get STI testing if you have a new partner or multiple partners.</li>
              <li>Use condoms/dental dams to reduce STI risk.</li>
              <li>Ask your provider about HPV vaccination if you’re eligible.</li>
              <li>Routine gynecological care matters (Pap tests, etc.) - follow your provider’s guidance.</li>
            </ul>

            <div className="link-box">
              <h3>Guidance</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.cdc.gov/std/prevention/default.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CDC: STI Prevention
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.plannedparenthood.org/learn/stds-hiv-safer-sex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Planned Parenthood: STDs & safer sex
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.womenshealth.gov/sexual-health/stis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office on Women’s Health: STIs
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* WHEN TO SEEK HELP */}
          <section className="topic-section">
            <h2 className="section-title">When to seek medical advice</h2>
            <p className="section-lead">
              Don’t ignore pain, sudden changes, or symptoms that persist. Many issues are
              treatable with the right support.
            </p>

            <ul className="checklist">
              <li>Persistent low libido or distress about sexual functioning</li>
              <li>Painful sex, bleeding during sex, or persistent dryness</li>
              <li>Changes in orgasm ability or significant discomfort</li>
              <li>Symptoms of infection (burning, unusual discharge, pelvic pain)</li>
              <li>Concerns about fertility or reproductive health</li>
              <li>Symptoms suggesting hormonal imbalance (irregular cycles, fatigue, mood shifts)</li>
            </ul>

            <div className="link-box">
              <h3>Where to get help</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.plannedparenthood.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Planned Parenthood (testing, contraception, counseling)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.womenshealth.gov/sexual-health"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office on Women’s Health (education & support)
                  </a>
                </li>
              </ul>
              <p className="muted">
                You can start with primary care, OB-GYN, or a sexual health clinic.
                If pain is a major issue, ask about pelvic floor physical therapy.
              </p>
            </div>
          </section>

          {/* UCSC */}
          <section className="topic-section" id="ucsc">
            <h2 className="section-title">UCSC resources</h2>
            <p className="section-lead">
              UCSC students can access confidential care, testing, and support services.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Student Health Center (UCSC)</h3>
                <p>
                  Primary care, sexual health support, STI testing (availability may vary),
                  contraception guidance, referrals, and general medical support.
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
                <h3>CARE Office (confidential advocate)</h3>
                <p>
                  Trauma-informed support for survivors of sexual assault, stalking,
                  and relationship violence. They can help you understand options and get support.
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

              <div className="resource-card">
                <h3>CAPS (mental health support)</h3>
                <p>
                  Sexual wellness is closely linked to mental health, stress, trauma, and anxiety.
                  CAPS provides counseling and crisis support.
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
                <h3>Title IX Office (reporting & support)</h3>
                <p>
                  Information and response pathways for sexual harassment/misconduct concerns.
                </p>
                <a
                  className="topic-link"
                  href="https://titleix.ucsc.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCSC Title IX
                </a>
              </div>
            </div>
          </section>

          {/* TRUSTED RESOURCES */}
          <section className="topic-section" id="resources">
            <h2 className="section-title">Trusted resources</h2>

            <div className="link-box">
              <h3>Learn more (reliable sources)</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.womenshealth.gov/sexual-health"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office on Women’s Health: Sexual health
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.plannedparenthood.org/learn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Planned Parenthood: Sexual health education
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cdc.gov/std/default.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CDC: STDs/STIs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.endocrine.org/patient-engagement/endocrine-library"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Endocrine Society: Hormone education
                  </a>
                </li>
              </ul>
              <p className="muted">
                If you experience pain, dryness, or ongoing low libido, you’re not “broken.”
                These are common medical concerns with real solutions.
              </p>
            </div>
          </section>

          {/* CLOSING */}
          <section className="topic-section closing">
            <h2 className="section-title">You deserve safe, respectful care</h2>
            <p>
              Sexual wellness should feel empowering, not confusing or painful.
              Whether you’re focusing on safety, pleasure, comfort, consent, or
              reproductive health, support exists. If something doesn’t feel right,
              it’s worth talking to a provider or advocate.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
