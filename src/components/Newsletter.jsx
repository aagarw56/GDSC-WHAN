import { useState } from "react";

export default function Newsletter() {
  const [message, setMessage] = useState(
    "We respect your privacy. Unsubscribe at any time."
  );

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Thanks! You’re subscribed (demo).");
  }

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <p className="newsletter__kicker">Stay Connected</p>
        <h2 className="newsletter__title">
          Get the latest health tips, articles, and wellness advice delivered to
          your inbox!
        </h2>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            className="newsletter__input"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button className="newsletter__button">Subscribe</button>
        </form>

        <p className="newsletter__note">{message}</p>
      </div>
    </section>
  );
}
