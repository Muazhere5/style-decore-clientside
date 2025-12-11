import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const PaymentPage = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const loadPayment = async () => {
      const res = await axiosSecure.post("/create-payment-intent", {
        bookingId: id,
      });

      setClientSecret(res.data.clientSecret);
      setBooking(res.data.booking);
      setLoading(false);
    };

    loadPayment();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Payment</h1>

      <p className="mb-4">
        You are paying for <strong>{booking.serviceName}</strong>
      </p>

      {/* Stripe UI placeholder */}
      <div className="p-6 border rounded-xl">
        <p>Stripe Payment Form will render here…</p>
        <small>Client Secret: {clientSecret}</small>
      </div>
    </div>
  );
};

export default PaymentPage;
