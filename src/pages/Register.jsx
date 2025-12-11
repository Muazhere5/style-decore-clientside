import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    await createUser(form.email.value, form.password.value, form.name.value, form.photo.value);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="card w-96 bg-base-200 p-6 space-y-4" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input name="name" placeholder="Full Name" className="input input-bordered w-full" required />
        <input name="email" placeholder="Email" className="input input-bordered w-full" required />
        <input name="photo" placeholder="Profile Image URL" className="input input-bordered w-full" />
        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />

        <button className="btn btn-primary w-full">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
