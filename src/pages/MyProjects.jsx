import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyProjects = () => {
  const axiosSecure = useAxiosSecure();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosSecure.get("/decorator/projects").then(res => setProjects(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Assigned Projects</h2>

      {projects.map(p => (
        <div key={p._id} className="bg-base-200 p-4 rounded-lg mb-3">
          <p><strong>Service:</strong> {p.serviceName}</p>
          <p><strong>Date:</strong> {p.date}</p>
          <p><strong>Status:</strong> {p.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
