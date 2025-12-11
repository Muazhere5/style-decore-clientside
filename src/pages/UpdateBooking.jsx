import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../components/Loader";

const UpdateBooking = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [booking, setBooking] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/bookings/${id}`).then((res) => {
      setBooking(res.data);
      setStatus(res.data.status);
      setLoading(false);
    });
  }, [id]);

  const updateBooking = async () => {
    await axiosSecure.patch(`/bookings/${id}`, { status });
    alert("Booking updated");
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-semibold mb-4">
        Update Booking Status
      </h1>

      <select
        className="select select-bordered w-full"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="preparing">Preparing</option>
        <option value="on_the_way">On the way</option>
        <option value="completed">Completed</option>
      </select>

      <button className="btn btn-primary w-full mt-4" onClick={updateBooking}>
        Update
      </button>
    </div>
  );
};

export default UpdateBooking;
