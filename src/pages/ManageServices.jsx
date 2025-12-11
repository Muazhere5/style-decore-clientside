import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Trash2, Edit } from "lucide-react";

const ManageServices = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axiosSecure.get("/services").then(res => setServices(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this service?")) return;
    await axiosSecure.delete(`/services/${id}`);
    setServices(services.filter(s => s._id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Manage Services</h2>
        <Link to="/dashboard/add-service" className="btn btn-primary">Add Service</Link>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {services.map(service => (
          <div key={service._id} className="card bg-base-200 shadow-xl">
            <figure>
              <img src={service.image} alt="" className="h-40 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-sm opacity-75">{service.description}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/dashboard/edit-service/${service._id}`} className="btn btn-sm btn-info">
                  <Edit size={16} /> Edit
                </Link>
                <button className="btn btn-sm btn-error" onClick={() => handleDelete(service._id)}>
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
