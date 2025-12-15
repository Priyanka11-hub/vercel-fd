import { useState } from "react";
import { Link } from "react-router-dom";
import SchoolRegister from "./SchoolRegister";
import NGORegister from "./NGORegister";

function Register() {
  const [type, setType] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full border border-gray-300">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Register As ✏️</h1>
        <p className="text-gray-600 mb-6 text-center">Join our creative sketching events platform 🎨</p>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-400 p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-green-600 focus:outline-none mb-4 w-full"
          required
        >
          <option value="">Select Account Type</option>
          <option value="school">🏫 School</option>
          <option value="ngo">🤝 NGO</option>
        </select>

        <div className="form-area">
          {type === "school" && <SchoolRegister />}
          {type === "ngo" && <NGORegister />}
        </div>

        <div className="text-center mt-4 text-gray-600">
          <p>
            Already have an account? <Link to="/login" className="text-green-700 font-semibold">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
