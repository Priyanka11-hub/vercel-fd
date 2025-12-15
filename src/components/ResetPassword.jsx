import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `http://localhost:3000/api/auth/reset-password/${token}`,
        { password }
      );

      alert(res.data.message || "Password reset successful 🎉");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="form-box fade-in">
        <h2>🔐 Reset Password</h2>
        <p className="subtitle">
          Create a new strong password 🛡️
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="🔑 New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="🔁 Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
