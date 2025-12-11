import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import BookingCard from "../components/BookingCard";

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/bookings/user/${user.email}`).then((res) => {
      setBookings(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">My Bookings</h1>

      <div className="space-y-4">
        {bookings.map((item) => (
          <BookingCard key={item._id} booking={item} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
