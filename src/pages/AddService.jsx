import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddService = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const service = {
      name: form.name.value,
      price: form.price.value,
      image: form.image.value,
      description: form.description.value
    };

    await axiosSecure.post("/services", service);
    form.reset();
    setLoading(false);
    alert("Service added!");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Service</h2>

      <form className="space-y-4" onSubmit={handleAdd}>
        <input type="text" name="name" placeholder="Service Name" className="input input-bordered w-full" required />
        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" required />
        <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" rows="4"></textarea>

        <button className="btn btn-primary w-full">{loading ? "Adding..." : "Add Service"}</button>
      </form>
    </div>
  );
};

export default AddService;
