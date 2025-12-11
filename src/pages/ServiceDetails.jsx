import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic.get(`/services/${id}`).then((res) => {
      setService(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <img
        src={service.image}
        alt={service.name}
        className="rounded-xl shadow-lg"
      />

      <h1 className="text-4xl font-bold">{service.name}</h1>
      <p className="opacity-80">{service.description}</p>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Price: ${service.price}</h2>

        <Link to={`/booking/${service._id}`}>
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
