import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NGORegister() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        name: e.target.ngoName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: "ngo",
      });

      alert("NGO Registered Successfully 🤝");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      <input
        type="text"
        name="ngoName"
        placeholder="NGO Name"
        className="border border-gray-400 p-3 rounded-lg placeholder-gray-500 text-gray-800 focus:ring-2 focus:ring-green-600 focus:outline-none"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Official Email"
        className="border border-gray-400 p-3 rounded-lg placeholder-gray-500 text-gray-800 focus:ring-2 focus:ring-green-600 focus:outline-none"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Create Password"
        className="border border-gray-400 p-3 rounded-lg placeholder-gray-500 text-gray-800 focus:ring-2 focus:ring-green-600 focus:outline-none"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
      >
        {loading ? "Registering..." : "Register NGO"}
      </button>
    </form>
  );
}

export default NGORegister;
