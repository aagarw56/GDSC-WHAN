export default function HormonalHealth() {
  return (
    <>

      <main className="topic-page">
        {/* HERO */}
        <section className="topic-hero">
          <div className="topic-container">
            <span className="topic-kicker">Health Topic</span>
            <h1 className="topic-title">Hormonal Health</h1>
            <p className="topic-subtitle">
              Hormones are chemical messengers that influence energy, mood, sleep,
              metabolism, and reproductive health. Understanding hormonal balance
              can help you recognize patterns, reduce symptoms, and know when to
              seek medical support.
            </p>

            <div className="topic-cta">
              <a className="btn btn-primary" href="#ucsc">
                UCSC Resources
              </a>
              <a className="btn btn-secondary" href="#symptoms">
                Symptoms Checklist
              </a>
              <a className="btn btn-secondary" href="#resources">
                Trusted Resources
              </a>
            </div>

            <div className="topic-note">
              <strong>Important:</strong> This page is educational and not a
              substitute for medical care. If symptoms are severe, persistent,
              or affecting your daily life, it's worth checking in with a
              healthcare provider.
            </div>
          </div>
        </section>

        <div className="topic-container topic-body">
          {/* OVERVIEW */}
          <section className="topic-section">
            <h2 className="section-title">Understanding your body's balance</h2>
            <p className="section-lead">
              Hormones affect nearly every system in the body. It's normal for
              them to fluctuate, especially around the menstrual cycle, pregnancy,
              and menopause. The goal is not “perfect balance,” but understanding
              what's normal for you and recognizing changes that may signal an
              underlying issue.
            </p>
          </section>

          {/* KEY HORMONES */}
          <section className="topic-section">
            <h2 className="section-title">Key hormones & what they do</h2>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Estrogen</h3>
                <p>
                  Supports reproductive health, regulates the menstrual cycle,
                  protects bone density, and can influence mood.
                </p>
              </div>

              <div className="resource-card">
                <h3>Progesterone</h3>
                <p>
                  Works with estrogen to regulate menstruation and pregnancy.
                  Often supports sleep and mood stability.
                </p>
              </div>

              <div className="resource-card">
                <h3>Testosterone</h3>
                <p>
                  Contributes to libido, muscle mass, and bone strength in women.
                </p>
              </div>

              <div className="resource-card">
                <h3>Thyroid hormones (T3 & T4)</h3>
                <p>
                  Control metabolism, energy levels, temperature regulation, and
                  weight changes.
                </p>
              </div>

              <div className="resource-card">
                <h3>Cortisol</h3>
                <p>
                  The stress hormone. Chronic high levels can affect sleep,
                  appetite, weight, and immune function.
                </p>
              </div>

              <div className="resource-card">
                <h3>Insulin</h3>
                <p>
                  Regulates blood sugar. Imbalance may contribute to fatigue,
                  cravings, weight changes, and increased diabetes risk.
                </p>
              </div>

              <div className="resource-card">
                <h3>DHEA</h3>
                <p>
                  Supports immune function, metabolism, and mood. It's also a
                  precursor hormone that can convert into estrogen/testosterone.
                </p>
              </div>
            </div>
          </section>

          {/* LIFE STAGES */}
          <section className="topic-section callout">
            <h2 className="section-title">Hormonal changes across life stages</h2>
            <ul className="checklist">
              <li>
                <strong>Puberty:</strong> estrogen and progesterone rise, triggering
                physical development and the start of menstrual cycles.
              </li>
              <li>
                <strong>Reproductive years:</strong> hormonal rhythms affect cycle regularity,
                fertility, skin changes, mood, and energy.
              </li>
              <li>
                <strong>Pregnancy:</strong> estrogen and progesterone increase significantly
                to support fetal development and postpartum transitions.
              </li>
              <li>
                <strong>Perimenopause:</strong> fluctuating hormones can cause hot flashes,
                irregular periods, sleep disruption, mood changes, and brain fog.
              </li>
              <li>
                <strong>Menopause:</strong> declining estrogen/progesterone can affect bone
                density, heart health, vaginal health, and mood.
              </li>
            </ul>
          </section>

          {/* COMMON IMBALANCES */}
          <section className="topic-section">
            <h2 className="section-title">Common hormonal imbalances</h2>
            <p className="section-lead">
              Hormonal concerns often overlap (for example, thyroid + mood, or
              PCOS + insulin resistance). A clinician can help interpret symptoms
              and lab results in context.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>PCOS (Polycystic Ovary Syndrome)</h3>
                <p>
                  Can involve irregular periods, acne, excess hair growth, and
                  weight changes, often linked with higher androgens and insulin
                  resistance.
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
                <h3>Thyroid disorders</h3>
                <p>
                  Hypothyroidism or hyperthyroidism can affect energy, weight,
                  mood, heart rate, temperature sensitivity, and hair/skin.
                </p>
                <a
                  className="topic-link"
                  href="https://www.niddk.nih.gov/health-information/endocrine-diseases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NIDDK: endocrine & thyroid info
                </a>
              </div>

              <div className="resource-card">
                <h3>PMS & PMDD</h3>
                <p>
                  PMS can cause mood swings, bloating, and fatigue. PMDD is a
                  more severe mood disorder tied to the menstrual cycle and is
                  treatable.
                </p>
                <a
                  className="topic-link"
                  href="https://www.ncbi.nlm.nih.gov/books/NBK532307/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PMDD: medical overview
                </a>
              </div>

              <div className="resource-card">
                <h3>Perimenopause & menopause</h3>
                <p>
                  Hormone decline may cause hot flashes, night sweats, sleep
                  issues, mood changes, and vaginal dryness.
                </p>
                <a
                  className="topic-link"
                  href="https://www.nia.nih.gov/health/menopause"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NIA: menopause information
                </a>
              </div>
            </div>
          </section>

          {/* SYMPTOMS */}
          <section className="topic-section" id="symptoms">
            <h2 className="section-title">Symptoms that may signal imbalance</h2>
            <p className="section-lead">
              Many symptoms can have multiple causes. If these persist, worsen,
              or significantly affect daily functioning, consider medical support.
            </p>

            <ul className="checklist">
              <li>Irregular, missed, or extremely painful periods</li>
              <li>Unexplained weight changes or stubborn weight gain/loss</li>
              <li>Persistent fatigue, low energy, or brain fog</li>
              <li>Mood swings, anxiety, depression, or irritability</li>
              <li>Trouble sleeping or frequent insomnia</li>
              <li>Hair thinning, hair loss, or excess hair growth</li>
              <li>Low libido or significant changes in sexual functioning</li>
              <li>Acne flare-ups or skin changes</li>
            </ul>
          </section>

          {/* LIFESTYLE */}
          <section className="topic-section">
            <h2 className="section-title">Lifestyle tips to support hormonal health</h2>
            <p className="section-lead">
              Lifestyle changes can't replace medical treatment when needed, but they can
              support energy, mood, cycle regularity, and long-term health.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Nutrition</h3>
                <p>
                  Focus on whole foods: leafy greens, lean protein, fiber-rich
                  carbs, and healthy fats (nuts, seeds, olive oil, avocado).
                </p>
              </div>

              <div className="resource-card">
                <h3>Movement</h3>
                <p>
                  Regular exercise supports insulin sensitivity, mood, stress
                  regulation, and bone/heart health.
                </p>
              </div>

              <div className="resource-card">
                <h3>Stress management</h3>
                <p>
                  Meditation, journaling, therapy, and mindful routines can reduce
                  chronic cortisol strain and improve sleep.
                </p>
              </div>

              <div className="resource-card">
                <h3>Sleep (7–9 hours)</h3>
                <p>
                  Hormones regulate during restorative sleep. Prioritize consistency,
                  wind-down time, and low evening caffeine.
                </p>
              </div>

              <div className="resource-card">
                <h3>Reduce endocrine disruptors</h3>
                <p>
                  Limit exposure to certain plastics, pesticides, and some personal
                  care chemicals when possible.
                </p>
                <a
                  className="topic-link"
                  href="https://www.endocrine.org/patient-engagement/endocrine-library/edcs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Endocrine Society: EDCs explained
                </a>
              </div>

              <div className="resource-card">
                <h3>Cycle awareness</h3>
                <p>
                  Track periods, mood, sleep, cravings, and energy patterns to spot
                  changes early and share accurate info with a provider.
                </p>
              </div>
            </div>
          </section>

          {/* FUN FACT */}
          <section className="topic-section callout">
            <h2 className="section-title">Fun fact: your gut affects your hormones</h2>
            <p className="section-lead">
              Your gut microbiome helps metabolize hormones like estrogen. A diet
              rich in fiber (beans, fruits, veggies, whole grains) and fermented foods
              (yogurt, kimchi, kefir) can support healthy gut function, one piece of the
              hormonal health puzzle.
            </p>
          </section>

          {/* WHEN TO SEEK HELP */}
          <section className="topic-section">
            <h2 className="section-title">When to seek medical advice</h2>
            <ul className="checklist">
              <li>Symptoms last longer than 2–3 cycles or steadily worsen</li>
              <li>Periods become extremely painful, very heavy, or suddenly irregular</li>
              <li>Fatigue, weight changes, or mood symptoms disrupt school/work</li>
              <li>New symptoms appear alongside hair loss, heart palpitations, or severe anxiety</li>
              <li>You suspect thyroid issues, PCOS, or PMDD</li>
            </ul>

            <div className="link-box">
              <h3>Helpful tracking tools</h3>
              <p className="muted">
                If you see a clinician, bring: cycle dates, symptom notes, sleep changes,
                medication/supplements, stress levels, and any family history.
              </p>
            </div>
          </section>

          {/* UCSC */}
          <section className="topic-section" id="ucsc">
            <h2 className="section-title">UCSC resources</h2>
            <p className="section-lead">
              If you're a UCSC student, you can access healthcare, referrals, and supportive services.
            </p>

            <div className="resource-grid">
              <div className="resource-card">
                <h3>Student Health Center (UCSC)</h3>
                <p>
                  Primary care visits, referrals, and support for reproductive and general health
                  concerns that may overlap with hormones (thyroid, fatigue, cycle issues, etc.).
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
                <h3>Counseling & Psychological Services (CAPS)</h3>
                <p>
                  Hormonal changes often impact mood and stress. CAPS offers counseling and
                  mental health support for UCSC students.
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
                  Financial stress and food insecurity can intensify symptoms. Basic Needs can
                  help with food/housing resources and support.
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
                <h3>Health Education (wellness workshops)</h3>
                <p>
                  Workshops and education on wellness habits (sleep, stress, nutrition) that
                  support long-term health.
                </p>
                <a
                  className="topic-link"
                  href="https://healthcenter.ucsc.edu/health-education/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCSC Health Education
                </a>
              </div>
            </div>
          </section>

          {/* TRUSTED RESOURCES */}
          <section className="topic-section" id="resources">
            <h2 className="section-title">Trusted resources</h2>

            <div className="link-box">
              <h3>Learn more</h3>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.endocrine.org/patient-engagement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Endocrine Society: Patient resources
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cdc.gov/pcos/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CDC: PCOS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nia.nih.gov/health/menopause"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    National Institute on Aging: Menopause
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.niddk.nih.gov/health-information/endocrine-diseases"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NIDDK: Endocrine diseases (thyroid & more)
                  </a>
                </li>
              </ul>
              <p className="muted">
                If a site promises a “quick hormone detox” or discourages medical care,
                treat it as a red flag.
              </p>
            </div>
          </section>

          {/* CLOSING */}
          <section className="topic-section closing">
            <h2 className="section-title">Your symptoms are real</h2>
            <p>
              Hormonal symptoms are common and treatable. Tracking patterns, supporting your
              body with healthy habits, and seeking care when needed can make a big difference
              in your energy, mood, and long-term health.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
