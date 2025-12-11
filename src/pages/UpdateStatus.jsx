import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const UpdateStatus = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [status, setStatus] = useState("");

  const update = async () => {
    await axiosSecure.patch(`/decorator/status/${id}`, { status });
    alert("Status Updated!");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Update Status</h2>

      <select className="select select-bordered w-full mb-4" onChange={e => setStatus(e.target.value)}>
        <option value="">Select Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button className="btn btn-primary w-full" onClick={update}>Update</button>
    </div>
  );
};

export default UpdateStatus;
