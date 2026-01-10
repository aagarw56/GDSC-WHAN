import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { user, isLoggedIn, logout } = useAuth();

  // Guard: not logged in
  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Your Profile</h2>

        <div style={{ marginTop: "1rem" }}>
          <p><strong>Name:</strong> {user.firstName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <button
          className="btn btn-secondary"
          style={{ marginTop: "1.5rem" }}
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Log Out
        </button>
      </div>
    </main>
  );
}
