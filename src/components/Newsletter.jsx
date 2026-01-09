import { useState } from "react";

export default function Newsletter() {
  const [message, setMessage] = useState(
    "We respect your privacy. Unsubscribe at any time."
  );

  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Something went wrong");
        return;
      }

      setMessage("Thanks! You’re subscribed 🎉");
      setEmail("");
    } catch {
      setMessage("Server error. Try again later.");
    }
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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button className="newsletter__button">Subscribe</button>
        </form>

        <p className="newsletter__note">{message}</p>
      </div>
    </section>
  );
}
