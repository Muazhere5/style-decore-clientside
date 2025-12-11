import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;

    await signIn(form.email.value, form.password.value);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="card w-96 bg-base-200 p-6 space-y-4" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />

        <button className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
