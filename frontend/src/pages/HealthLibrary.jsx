import { Link } from "react-router-dom";

export default function HealthLibrary() {
  return (
    <>

      <main
        style={{
          padding: "96px 24px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Health Library
        </h1>

        <p style={{ color: "#6b7280", maxWidth: 700, marginBottom: "48px" }}>
          The WHAN Health Library is a curated collection of trusted resources
          designed to support women through every stage of life. Explore
          evidence-based information, campus-specific support, and global
          resources across key health topics.
        </p>

        {/* Sections */}
        <div style={{ display: "grid", gap: "32px" }}>
          <LibraryItem
            title="Safety"
            desc="Personal safety strategies, emergency resources, and UCSC-specific support."
            link="/topics/safety"
          />

          <LibraryItem
            title="Mental Wellness"
            desc="Mental health education, coping tools, and crisis resources for women."
            link="/topics/mental-wellness"
          />

          <LibraryItem
            title="Hormonal Health"
            desc="Understanding hormonal balance, life-stage changes, and common conditions."
            link="/topics/hormonal-health"
          />

          <LibraryItem
            title="Reproductive Health"
            desc="Information on fertility, menstrual health, contraception, and care access."
            link="/topics/reproductive-health"
          />

          <LibraryItem
            title="Pregnancy Care"
            desc="Prenatal, postpartum, and maternal health resources."
            link="/topics/pregnancy-care"
          />

          <LibraryItem
            title="Sexual Wellness"
            desc="Education on sexual health, consent, screenings, and overall wellbeing."
            link="/topics/sexual-wellness"
          />
        </div>
      </main>
    </>
  );
}

function LibraryItem({ title, desc, link }) {
  return (
    <Link
      to={link}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "24px",
        display: "block",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <h2 style={{ marginBottom: "8px", color: "#7c3aed" }}>{title}</h2>
      <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{desc}</p>
    </Link>
  );
}
