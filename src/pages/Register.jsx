import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = form.photo.files[0];

    try {
      // 1️⃣ Upload image to ImageBB
      const imageForm = new FormData();
      imageForm.append("image", imageFile);

      const imageRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
        imageForm
      );

      const photoURL = imageRes.data.data.display_url;

      // 2️⃣ Create Firebase user
      await createUser(email, password);

      // 3️⃣ Update Firebase profile
      await updateUserProfile(name, photoURL);

      // 4️⃣ Save user info to backend DB
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users`, {
        name,
        email,
        photo: photoURL,
        role: "user",
      });

      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <form
        onSubmit={handleRegister}
        className="card w-96 bg-base-200 p-6 space-y-4 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input input-bordered w-full"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />

        <input
          type="file"
          name="photo"
          accept="image/*"
          className="file-input file-input-bordered w-full"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />

        <button className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
