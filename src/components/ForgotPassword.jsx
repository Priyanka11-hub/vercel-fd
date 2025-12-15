import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/auth/forgot-password",
        { email }
      );

      if (res.data.resetToken) {
        navigate(`/reset-password/${res.data.resetToken}`);
      } else {
        alert("If the email exists, a reset link will be sent 📩");
      }
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="form-box fade-in">
        <h2>🔑 Forgot Password</h2>
        <p className="subtitle">
          Enter your registered email to reset your password ✉️
        </p>

        <form onSubmit={submit}>
          <input
            name="email"
            type="email"
            placeholder="📧 Registered Email"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
