export default function Featured() {
  return (
    <section id="articles" className="featured">
      <div className="featured__container">
        <header className="featured__header">
          <h2 className="featured__title">Featured Articles</h2>
          <p className="featured__subtitle">
            Stay informed with our latest health insights and expert advice
          </p>
        </header>

        <div className="featured__grid">
          {/* Card 1 */}
          <article className="card">
            <div className="card__media">
              <img
                src="/images/article-1.jpg"
                alt="Mother holding baby"
              />
            </div>
            <div className="card__content">
              <div className="card__meta">
                <span className="pill">Reproductive Health</span>
                <span className="readtime">8 min read</span>
              </div>
              <h3 className="card__title">
                Your Guide to a Healthy Pregnancy
              </h3>
              <p className="card__desc">
                Essential information for expecting mothers on prenatal care,
                nutrition, and wellness.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="card">
            <div className="card__media">
              <img
                src="/images/article-2.jpg"
                alt="Personal safety tips"
              />
            </div>
            <div className="card__content">
              <div className="card__meta">
                <span className="pill">Safety</span>
                <span className="readtime">6 min read</span>
              </div>
              <h3 className="card__title">
                Personal Safety Tips for Women
              </h3>
              <p className="card__desc">
                Essential strategies and resources to help you stay safe and
                empowered in daily life.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="card">
            <div className="card__media card__media--bw">
              <img
                src="/images/article-3.jpg"
                alt="Managing stress"
              />
            </div>
            <div className="card__content">
              <div className="card__meta">
                <span className="pill">Mental Wellness</span>
                <span className="readtime">6 min read</span>
              </div>
              <h3 className="card__title">
                Managing Stress in Daily Life
              </h3>
              <p className="card__desc">
                Practical techniques for reducing stress and improving mental
                health.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

