import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [role, setRole] = useState("student");

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    console.log("Selected Role:", role);
    // Here you can call backend API to login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-6">
          {["student", "college", "ngo"].map((r) => (
            <button
              key={r}
              className={`px-4 py-2 rounded ${
                role === r ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRole(r)}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="border p-2 rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="border p-2 rounded"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <button type="submit" className="bg-green-600 text-white py-2 rounded mt-2">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
