import Footer from "../components/Footer";

export default function MentalWellness() {
  return (
    <>

      <main className="topic-page">
        {/* HERO */}
        <section className="topic-hero">
          <div className="topic-container">
            <span className="topic-kicker">Health Topic</span>
            <h1 className="topic-title">Mental Wellness</h1>
            <p className="topic-subtitle">
              Mental health matters at every stage of life. This page includes
              common conditions, contributing factors, self-care tools, and
              trusted resources, plus UCSC-specific support.
            </p>

            <div className="topic-cta">
              <a className="btn btn-primary" href="#ucsc">
                UCSC Support
              </a>
              <a className="btn btn-secondary" href="#crisis">
                Crisis Help
              </a>
              <a className="btn btn-secondary" href="#resources">
                Trusted Resources
              </a>
            </div>

            <div className="topic-note">
              <strong>If you’re in immediate danger:</strong> call <strong>911</strong>.
              <br />
              <strong>If you’re having thoughts of self-harm:</strong> call/text{" "}
              <strong>988</strong> (U.S.) or use{" "}
              <a
                className="topic-link"
                href="https://findahelpline.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find A Helpline
              </a>{" "}
              for worldwide support.
            </div>
          </div>
        </section>

        <div className="topic-container topic-body">
          {/* OVERVIEW */}
          <section className="topic-section">
            <h2 className="section-title">Women’s mental health</h2>
            <p className="section-lead">
              Mental health conditions can affect women differently due to a mix of
              biological, social, and environmental factors, like hormonal changes,
              trauma exposure, caregiving roles, financial stress, discrimination,
              and access to care.
            </p>
          </section>

          {/* STATS */}
          <section className="topic-section">
            <h2 className="section-title">Key facts & statistics</h2>

            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-value">53%</div>
                <div className="stat-label">
                  Of women who have mental health problems have experienced abuse.
                </div>
                <a
                  className="topic-link"
                  href="https://www.agendaalliance.org/our-work/projects-and-campaigns/previous-work/womens-mental-health-facts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source & context
                </a>
              </div>

              <div className="stat-card">
                <div className="stat-value">29% vs 16%</div>
                <div className="stat-label">
                  Women in poverty are more likely to experience common mental health
                  disorders compared to women not in poverty.
                </div>
                <a
                  className="topic-link"
                  href="https://www.agendaalliance.org/our-work/projects-and-campaigns/previous-work/womens-mental-health-facts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source & context
                </a>
              </div>

              <div className="stat-card">
                <div className="stat-value">PMDD</div>
                <div className="stat-label">
                  PMDD is a severe, cyclical mood disorder linked to the menstrual cycle.
                  It’s treatable and not “just PMS.”
                </div>
                <a
                  className="topic-link"
                  href="https://www.ncbi.nlm.nih.gov/books/NBK532307/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn about PMDD
                </a>
              </div>

              <div className="stat-card">
                <div className="stat-value">Postpartum</div>
                <div className="stat-label">
                  Perinatal and postpartum mood disorders are common and support exists.
                </div>
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

          {/* COMMON CONDITIONS */}
          <section className="topic-section">
            <h2 className="section-title">Common conditions affecting women</h2>
            <p className="section-lead">
              These conditions can range from mild to severe. If symptoms interfere
              with daily functioning, relationships, school, sleep, appetite, or safety,
              it’s worth reaching out for support.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Depression</h3>
                <p>
                  Persistent sadness, hopelessness, fatigue, low motivation, changes in
                  sleep/appetite, and loss of interest in activities.
                </p>
              </div>

              <div className="resource-card">
                <h3>Anxiety disorders</h3>
                <p>
                  Includes generalized anxiety, panic disorder, and social anxiety.
                  Often involves excessive worry, physical tension, or avoidance.
                </p>
              </div>

              <div className="resource-card">
                <h3>PTSD</h3>
                <p>
                  Can develop after experiencing or witnessing trauma; may include
                  flashbacks, nightmares, hypervigilance, and emotional distress.
                </p>
              </div>

              <div className="resource-card">
                <h3>PMDD</h3>
                <p>
                  Severe mood symptoms (depression, irritability, anxiety) that happen
                  before menstruation and improve after it starts.
                </p>
              </div>

              <div className="resource-card">
                <h3>Eating disorders</h3>
                <p>
                  Such as anorexia, bulimia, and binge eating disorder often connected to
                  body image, control, anxiety, and stress.
                </p>
              </div>

              <div className="resource-card">
                <h3>OCD</h3>
                <p>
                  Intrusive thoughts (obsessions) and repetitive behaviors (compulsions)
                  done to reduce distress.
                </p>
              </div>

              <div className="resource-card">
                <h3>Other conditions</h3>
                <p>
                  Bipolar disorder, schizophrenia, and substance use disorders can also
                  affect women and require professional support.
                </p>
              </div>

              <div className="resource-card">
                <h3>Substance use & mental health</h3>
                <p>
                  Stress, trauma, and depression can increase risk. Recovery support is
                  available and works best with compassion + community.
                </p>
              </div>
            </div>
          </section>

          {/* CONTRIBUTING FACTORS */}
          <section className="topic-section callout">
            <h2 className="section-title">Why women may be at higher risk</h2>
            <ul className="checklist">
              <li>
                <strong>Biological factors:</strong> hormonal changes (puberty, pregnancy,
                postpartum, perimenopause/menopause), genetics, sleep disruption.
              </li>
              <li>
                <strong>Social factors:</strong> discrimination, unequal pay, caregiving burdens,
                harassment, stigma around seeking help.
              </li>
              <li>
                <strong>Trauma exposure:</strong> higher rates of sexual/relationship violence can
                increase PTSD, anxiety, depression, and substance use risk.
              </li>
              <li>
                <strong>Financial stress:</strong> food insecurity, housing instability, and poverty
                are strongly linked to mental health outcomes.
              </li>
            </ul>
          </section>

          {/* PRACTICAL TOOLS */}
          <section className="topic-section">
            <h2 className="section-title">Practical tools you can try</h2>
            <p className="section-lead">
              These aren’t “cures,” but they can help regulate stress and support your mental
              health while you seek care or as part of ongoing wellness.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Grounding (60 seconds)</h3>
                <p>
                  Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.
                  This can interrupt spiraling anxiety.
                </p>
              </div>

              <div className="resource-card">
                <h3>Stress reset breathing</h3>
                <p>
                  Try “box breathing”: inhale 4, hold 4, exhale 4, hold 4. Repeat 4 times.
                </p>
              </div>

              <div className="resource-card">
                <h3>Sleep basics</h3>
                <p>
                  Keep a consistent bedtime, reduce caffeine late-day, and limit screen time
                  30–60 minutes before bed.
                </p>
              </div>

              <div className="resource-card">
                <h3>Reach out early</h3>
                <p>
                  You don’t need to be at your “worst” to ask for help. Earlier support often
                  makes recovery easier.
                </p>
              </div>
            </div>
          </section>

          {/* UCSC */}
          <section className="topic-section" id="ucsc">
            <h2 className="section-title">UCSC mental health resources</h2>
            <p className="section-lead">
              If you’re a UCSC student, these services offer confidential support and crisis response.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Counseling & Psychological Services (CAPS)</h3>
                <p>
                  Confidential services including individual counseling, crisis counseling,
                  psychiatry, and groups/workshops.
                </p>
                <div className="mini">
                  Phone: <strong>(831) 459-2628</strong>
                  <br />
                  24/7 Crisis Support: Call the same number and{" "}
                  <strong>press option 3</strong>
                </div>
                <a
                  className="topic-link"
                  href="https://caps.ucsc.edu/get-help/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAPS: Get help now
                </a>
              </div>

              <div className="resource-card">
                <h3>Campus Mobile Crisis Team (CMCT)</h3>
                <p>
                  Responds to behavioral health crises and welfare concerns on campus.
                </p>
                <div className="mini">
                  Phone: <strong>(831) 502-9988</strong>
                </div>
                <a
                  className="topic-link"
                  href="https://caps.ucsc.edu/get-help/crisis-team/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CMCT information
                </a>
              </div>

              <div className="resource-card">
                <h3>CARE Office (Trauma-informed support)</h3>
                <p>
                  Support for survivors of sexual assault, relationship violence, and stalking.
                  Advocates can help with options, accommodations, and accompaniment.
                </p>
                <div className="mini">
                  CARE Advocate: <strong>(831) 502-2273</strong>
                </div>
                <a
                  className="topic-link"
                  href="https://care.ucsc.edu/about/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CARE contact & drop-in info
                </a>
              </div>

              <div className="resource-card">
                <h3>Basic Needs Center</h3>
                <p>
                  Supports students with food insecurity, housing instability, and financial stress,
                  key drivers of mental health strain.
                </p>
                <a
                  className="topic-link"
                  href="https://basicneeds.ucsc.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic Needs Center
                </a>
              </div>
            </div>
          </section>

          {/* CRISIS */}
          <section className="topic-section" id="crisis">
            <h2 className="section-title">Crisis support</h2>
            <p className="section-lead">
              If you’re in crisis, you deserve immediate support. These services are free and confidential.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>988 Suicide & Crisis Lifeline (U.S.)</h3>
                <p>24/7 crisis support for anyone who needs help.</p>
                <ul className="mini-list">
                  <li>
                    Call or Text: <strong>988</strong>
                  </li>
                  <li>
                    Website:{" "}
                    <a
                      href="https://988lifeline.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      988lifeline.org
                    </a>
                  </li>
                </ul>
              </div>

              <div className="resource-card">
                <h3>Find A Helpline (Worldwide)</h3>
                <p>
                  Verified global directory of helplines by country/topic (chat, phone, text).
                </p>
                <a
                  className="topic-link"
                  href="https://findahelpline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find a helpline
                </a>
              </div>

              <div className="resource-card">
                <h3>Postpartum Support International (PSI)</h3>
                <p>
                  Support for postpartum depression/anxiety, pregnancy and perinatal mental health.
                </p>
                <a
                  className="topic-link"
                  href="https://postpartum.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  postpartum.net
                </a>
              </div>

              <div className="resource-card">
                <h3>NAMI HelpLine (U.S.)</h3>
                <p>Mental health info, resources, and support.</p>
                <a
                  className="topic-link"
                  href="https://www.nami.org/support-education/nami-helpline/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NAMI HelpLine
                </a>
              </div>
            </div>
          </section>

          {/* TRUSTED RESOURCES */}
          <section className="topic-section" id="resources">
            <h2 className="section-title">Trusted learning resources</h2>

            <div className="link-box">
              <h3>Evidence based information</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.nimh.nih.gov/health"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    National Institute of Mental Health (NIMH)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cdc.gov/mentalhealth/index.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CDC Mental Health
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.who.int/health-topics/mental-health"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WHO: Mental Health
                  </a>
                </li>
              </ul>
              <p className="muted">
                Tip: If a resource is trying to sell a “miracle cure,” or discourages professional care,
                it’s a red flag.
              </p>
            </div>
          </section>

          {/* CLOSING */}
          <section className="topic-section closing">
            <h2 className="section-title">You deserve support</h2>
            <p>
              Mental health struggles are common and treatable. Whether you’re dealing with stress,
              anxiety, trauma, PMDD, depression, or something else, you don’t have to “push through”
              alone. Support exists, and reaching out is a strong step forward.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
