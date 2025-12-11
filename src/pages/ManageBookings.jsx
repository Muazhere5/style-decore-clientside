import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axiosSecure.get("/bookings").then(res => setBookings(res.data));
  }, []);

  const assignDecorator = async (id) => {
    await axiosSecure.patch(`/bookings/assign/${id}`);
    alert("Decorator assigned!");
  };

  const verifyPayment = async (id) => {
    await axiosSecure.patch(`/bookings/verify/${id}`);
    alert("Payment verified!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Bookings</h2>

      <div className="space-y-4">
        {bookings.map(b => (
          <div key={b._id} className="p-4 rounded-lg bg-base-200 flex justify-between items-center">
            <div>
              <p><strong>Service:</strong> {b.serviceName}</p>
              <p><strong>User:</strong> {b.userEmail}</p>
              <p><strong>Status:</strong> {b.status}</p>
            </div>

            <div className="flex gap-3">
              <button className="btn btn-sm btn-info" onClick={() => assignDecorator(b._id)}>
                Assign Decorator
              </button>
              <button className="btn btn-sm btn-success" onClick={() => verifyPayment(b._id)}>
                Verify Payment
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ManageBookings;
