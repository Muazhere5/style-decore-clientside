import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const EditService = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [service, setService] = useState(null);

  useEffect(() => {
    axiosSecure.get(`/services/${id}`).then(res => setService(res.data));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      name: form.name.value,
      price: form.price.value,
      description: form.description.value,
      image: form.image.value
    };

    await axiosSecure.put(`/services/${id}`, updated);
    alert("Service updated!");
  };

  if (!service) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Service</h2>

      <form className="space-y-4" onSubmit={handleUpdate}>
        <input defaultValue={service.name} name="name" className="input input-bordered w-full" />
        <input defaultValue={service.price} name="price" className="input input-bordered w-full" />
        <input defaultValue={service.image} name="image" className="input input-bordered w-full" />
        <textarea defaultValue={service.description} name="description" className="textarea textarea-bordered w-full"></textarea>
        <button className="btn btn-primary w-full">Update</button>
      </form>
    </div>
  );
};

export default EditService;
