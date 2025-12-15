import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email: email.value,
        password: password.value,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login Successful 🎉");
      navigate("/dashboard");
;
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full border border-gray-300">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">🎨 Welcome Back</h1>
        <p className="text-gray-600 mb-6 text-center">Login to continue your sketching journey ✏️</p>

        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="📧 Email Address"
            className="border border-gray-400 p-3 rounded-lg placeholder-gray-500 text-gray-800 focus:ring-2 focus:ring-green-600 focus:outline-none"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="🔒 Password"
            className="border border-gray-400 p-3 rounded-lg placeholder-gray-500 text-gray-800 focus:ring-2 focus:ring-green-600 focus:outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-4 text-gray-600">
          <p>
            Don't have an account? <Link to="/register" className="text-green-700 font-semibold">Register</Link>
          </p>
          <p>
            <Link to="/forgot-password" className="text-green-700 font-semibold">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
