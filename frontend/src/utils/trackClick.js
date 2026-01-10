import { useAuth } from "../context/AuthContext";

export function trackResourceClick(token, payload) {
  if (!token) return;

  fetch("http://localhost:8000/api/auth/resources/click", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).catch(() => {
    // fail silently – never block navigation
  });
}
