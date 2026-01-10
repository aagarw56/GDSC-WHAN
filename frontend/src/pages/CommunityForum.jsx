import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "whan_forum_posts_v1";

const TOPICS = [
  "Safety",
  "Mental Wellness",
  "Hormonal Health",
  "Reproductive Health",
  "Pregnancy Care",
  "Sexual Wellness",
  "Campus Resources",
  "General Support",
];

function formatDate(ts) {
  try {
    return new Date(ts).toLocaleString();
  } catch {
    return "";
  }
}

export default function CommunityForum() {
  const [posts, setPosts] = useState([]);
  const [topic, setTopic] = useState("General Support");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // Load posts from localStorage (demo-friendly)
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setPosts(parsed);
    } catch {
      // ignore
    }
  }, []);

  // Persist posts
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const pinned = useMemo(
    () => [
      {
        id: "pinned-1",
        pinned: true,
        topic: "Campus Resources",
        title: "Need immediate help at UCSC?",
        message:
          "If you’re in crisis or need urgent support: CAPS crisis line is available 24/7. You can also reach 988 (US) for crisis support. If there’s immediate danger, call 911.",
        ts: Date.now(),
      },
      {
        id: "pinned-2",
        pinned: true,
        topic: "General Support",
        title: "Community Guidelines",
        message:
          "Be respectful. Don’t share personal identifying info. This forum is not for emergencies or medical diagnoses. Share resources, ask questions, and support each other kindly.",
        ts: Date.now(),
      },
    ],
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanTitle = title.trim();
    const cleanMessage = message.trim();

    if (!cleanTitle || !cleanMessage) return;

    const newPost = {
      id: crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      topic,
      title: cleanTitle,
      message: cleanMessage,
      ts: Date.now(),
    };

    setPosts((prev) => [newPost, ...prev]);
    setTitle("");
    setMessage("");
    setTopic("General Support");
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const clearAll = () => {
    if (!confirm("Clear all forum posts saved in this browser?")) return;
    setPosts([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>

      <main className="topic-page">
        <section className="topic-hero">
          <div className="topic-container">
            <span className="topic-kicker">Community</span>
            <h1 className="topic-title">Community Forum</h1>
            <p className="topic-subtitle">
              A supportive space to share resources, ask questions, and learn from others.
              This forum is designed for wellbeing, safety, and community — not emergencies.
            </p>

            <div className="topic-note">
              <strong>Important:</strong> This space does not provide professional medical advice.
              If you or someone else is in immediate danger, call <strong>911</strong>. If you need
              crisis support in the U.S., call or text <strong>988</strong>.
            </div>
          </div>
        </section>

        <div className="topic-container topic-body">
          {/* Quick resources */}
          <section className="topic-section">
            <h2 className="section-title">Quick Help & Resources</h2>

            <div className="resource-grid">
              <a
                className="resource-card"
                href="https://caps.ucsc.edu/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="resource-title">UCSC CAPS</div>
                <div className="resource-meta">Counseling & crisis support</div>
              </a>

              <a
                className="resource-card"
                href="https://care.ucsc.edu/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="resource-title">UCSC CARE</div>
                <div className="resource-meta">Support for sexual assault / relationship violence</div>
              </a>

              <a
                className="resource-card"
                href="https://transportation.ucsc.edu/buses-shuttles/safe-ride/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="resource-title">UCSC Safe Ride</div>
                <div className="resource-meta">Night transportation options</div>
              </a>

              <a
                className="resource-card"
                href="https://988lifeline.org/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="resource-title">988 Lifeline</div>
                <div className="resource-meta">U.S. crisis support (call/text/chat)</div>
              </a>
            </div>
          </section>

          {/* Create post */}
          <section className="topic-section">
            <h2 className="section-title">Create a Post</h2>

            <form className="forum-form" onSubmit={handleSubmit}>
              <label className="field">
                <span className="label">Topic</span>
                <select
                  className="input"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="label">Title</span>
                <input
                  className="input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Example: Looking for UCSC resources for stress management"
                  maxLength={80}
                />
              </label>

              <label className="field">
                <span className="label">Message</span>
                <textarea
                  className="input textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a question, a helpful resource, or a supportive message. Avoid personal identifying info."
                  rows={5}
                  maxLength={800}
                />
              </label>

              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  Post
                </button>
                <button className="btn btn-secondary" type="button" onClick={clearAll}>
                  Clear saved posts
                </button>
              </div>

              <p className="muted" style={{ marginTop: 10 }}>
                Demo note: Posts are saved in your browser (localStorage). There’s no backend.
              </p>
            </form>
          </section>

          {/* Feed */}
          <section className="topic-section">
            <h2 className="section-title">Recent Posts</h2>

            <div className="forum-feed">
              {pinned.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}

              {posts.length === 0 ? (
                <p className="muted">
                  No posts yet. Be the first to share a resource or ask a question.
                </p>
              ) : (
                posts.map((p) => (
                  <PostCard key={p.id} post={p} onDelete={() => handleDelete(p.id)} />
                ))
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function PostCard({ post, onDelete }) {
  return (
    <article className={`post ${post.pinned ? "post--pinned" : ""}`}>
      <div className="post-top">
        <span className="post-topic">{post.topic}</span>
        <span className="post-date">{formatDate(post.ts)}</span>
      </div>

      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.message}</p>

      {onDelete && (
        <button className="post-delete" onClick={onDelete} type="button">
          Delete
        </button>
      )}
    </article>
  );
}
