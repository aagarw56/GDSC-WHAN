import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // pretend login succeeded
    navigate("/#topics"); // scrolls to Health Topics
  };

  return (
    <div style={{ padding: "3rem" }}>
      <h1>Login</h1>
      <p>Access your personalized wellness resources.</p>

      <form
        onSubmit={handleSubmit}
        style={{ marginTop: "2rem", maxWidth: "400px" }}
      >
        <input
          type="email"
          placeholder="Email"
          style={{ width: "100%", padding: "0.8rem", marginBottom: "1rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: "0.8rem", marginBottom: "1rem" }}
        />
        <button className="primary-btn">Log In</button>
      </form>
    </div>
  );
}

export default Login;
