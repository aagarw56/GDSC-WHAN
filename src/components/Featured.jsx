export default function Featured() {
  return (
    <section className="featured">
      <div className="featured__container">
        <header className="featured__header">
          <h2 className="featured__title">Featured Articles</h2>
          <p className="featured__subtitle">
            Stay informed with our latest health insights and expert advice
          </p>
        </header>

        <div className="featured__grid">
          {/* Card 1 */}
          <a
        href="https://health.osu.edu/expert-guides/healthy-pregnancy-guide"
        target="_blank"
        rel="noopener noreferrer"
        class="card-link"
      >
        <article class="card">
          <div class="card__media">
            <img
              src="images/article-1.jpg"
              alt="Mother holding baby"
              loading="lazy"
            />
          </div>

          <div class="card__content">
            <div class="card__meta">
              <span class="pill">Reproductive Health</span>
              <span class="readtime">8 min read</span>
            </div>

            <h3 class="card__title">Your Guide to a Healthy Pregnancy</h3>
            <p class="card__desc">
              Essential information for expecting mothers on prenatal care,
              nutrition, and wellness.
            </p>
          </div>
        </article>
      </a>

          {/* Card 2 */}
          <a
        href="https://www.desotosheriff.com/community/tips_for_women_on_staying_safe!.php"
        target="_blank"
        rel="noopener noreferrer"
        class="card-link"
      >
        <article class="card">
          <div class="card__media">
            <img
              src="images/article-2.jpg"
              alt="Woman standing confidently"
              loading="lazy"
            />
          </div>

          <div class="card__content">
            <div class="card__meta">
              <span class="pill">Safety</span>
              <span class="readtime">6 min read</span>
            </div>

            <h3 class="card__title">Personal Safety Tips for Women</h3>
            <p class="card__desc">
              Essential strategies and resources to help you stay safe and
              empowered in daily life.
            </p>
          </div>
        </article>
      </a>


          {/* Card 3 */}
          <a
        href="https://www.cdc.gov/mental-health/living-with/index.html"
        target="_blank"
        rel="noopener noreferrer"
        class="card-link"
      >
        <article class="card">
          <div class="card__media card__media--bw">
            <img
              src="images/article-3.jpg"
              alt="Woman relaxing outdoors"
              loading="lazy"
            />
          </div>

          <div class="card__content">
            <div class="card__meta">
              <span class="pill">Mental Wellness</span>
              <span class="readtime">6 min read</span>
            </div>

            <h3 class="card__title">Managing Stress in Daily Life</h3>
            <p class="card__desc">
              Practical techniques for reducing stress and improving mental
              health.
            </p>
          </div>
        </article>
      </a>
    </div>
  </div>
</section>
  );
}
