import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      await login(form.email.value, form.password.value);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        className="card w-96 bg-gray-100 p-6 space-y-4 shadow-xl"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />

        {/* ✅ Chocolate Button */}
        <button
          className="w-full py-2 rounded-lg font-semibold"
          style={{
            backgroundColor: "#7B3F00", // chocolate
            color: "#ffffff",
          }}
        >
          Login
        </button>

        {/* ✅ Register Link */}
        <p className="text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold underline"
            style={{ color: "#7B3F00" }}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
