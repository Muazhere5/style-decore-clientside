import ServiceCard from "../components/ServiceCard";
import DecoratorCard from "../components/DecoratorCard";
import MapComponent from "../components/MapComponent";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [services, setServices] = useState([]);
  const [decorators, setDecorators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const serviceRes = await axiosPublic.get("/services");
        const decoratorRes = await axiosPublic.get("/decorators/top");

        // ✅ HARD GUARANTEE ARRAY
        setServices(Array.isArray(serviceRes.data) ? serviceRes.data : []);
        setDecorators(Array.isArray(decoratorRes.data) ? decoratorRes.data : []);

      } catch (err) {
        console.error("Home load error:", err);
        setServices([]);
        setDecorators([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [axiosPublic]);

  if (loading) return <Loader />;

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary text-white rounded-xl">
        <h1 className="text-5xl font-bold">Make Your Events Memorable</h1>
        <p className="mt-4 text-lg opacity-90">
          Hire professional decorators and event services with ease
        </p>
      </section>

      {/* SERVICES */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Popular Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(item => (
            <ServiceCard key={item._id} service={item} />
          ))}
        </div>
      </section>

      {/* DECORATORS */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Top Decorators</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {decorators.map(item => (
            <DecoratorCard key={item._id} decorator={item} />
          ))}
        </div>
      </section>

      {/* MAP */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Coverage Areas</h2>
        <MapComponent height="450px" popupText="EventMaster Service Area" />
      </section>
    </div>
  );
};

export default Home;
