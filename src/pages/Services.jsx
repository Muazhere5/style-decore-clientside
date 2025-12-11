import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loader from "../components/Loader";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const axiosPublic = useAxiosPublic();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic.get("/services").then((res) => {
      setServices(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">All Services</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item) => (
          <ServiceCard key={item._id} service={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
