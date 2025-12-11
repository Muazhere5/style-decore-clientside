import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const BookingPage = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");

  useEffect(() => {
    axiosPublic.get(`/services/${id}`).then((res) => {
      setService(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleBooking = async () => {
    const booking = {
      serviceId: id,
      userEmail: user.email,
      date,
      status: "pending",
    };

    const res = await axiosSecure.post("/bookings", booking);

    if (res.data.insertedId) {
      navigate(`/payment/${res.data.insertedId}`);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">
        Book: {service.name}
      </h1>

      <input
        type="date"
        className="input input-bordered w-full mb-4"
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="btn btn-primary w-full" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
