import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, title, image, price, category } = service;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 rounded-xl border border-base-300">
      <figure className="h-56 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{title}</h2>
        <p className="text-sm opacity-70">{category}</p>

        <p className="font-semibold text-primary text-lg mt-2">
          ${price.toLocaleString()}
        </p>

        <div className="card-actions justify-end mt-4">
          <Link
            to={`/service/${_id}`}
            className="btn btn-primary btn-sm flex items-center gap-2"
          >
            Details <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
