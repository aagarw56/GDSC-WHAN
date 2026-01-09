export default function HealthTopics() {
  return (
    <section id="topics" className="topics">
      <h2 className="topics-title">Health Topics</h2>
      <p className="topics-subtitle">
        Explore comprehensive resources across various aspects of women's health
      </p>

      <div className="topics-grid">
        <div className="topic-card">
          <span className="topic-icon">🛡️</span>
          <h3>Safety</h3>
          <p>
            Essential resources for personal safety, protection strategies, and
            empowerment tools for women.
          </p>
        </div>

        <div className="topic-card">
          <span className="topic-icon">🧠</span>
          <h3>Mental Wellness</h3>
          <p>
            Resources for mental health, stress management, and emotional
            wellbeing.
          </p>
        </div>

        <div className="topic-card">
          <span className="topic-icon">⚖️</span>
          <h3>Hormonal Health</h3>
          <p>
            Understanding hormonal balance, menstrual health, menopause, PCOS,
            and thyroid health.
          </p>
        </div>

        <div className="topic-card">
          <span className="topic-icon">❤️</span>
          <h3>Reproductive Health</h3>
          <p>
            Comprehensive information about reproductive wellness, fertility,
            and family planning.
          </p>
        </div>

        <div className="topic-card">
          <span className="topic-icon">🤰</span>
          <h3>Pregnancy Care</h3>
          <p>
            Prenatal care, nutrition for expectant mothers, and postpartum
            support.
          </p>
        </div>

        <div className="topic-card">
          <span className="topic-icon">✨</span>
          <h3>Sexual Wellness</h3>
          <p>
            Sexual health resources, regular screenings, and preventive care.
          </p>
        </div>
      </div>
    </section>
  );
}
