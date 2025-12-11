import { FaStar } from "react-icons/fa";

const DecoratorCard = ({ decorator }) => {
  const { name, photo, rating, experience } = decorator;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 rounded-xl p-4 border border-base-300">
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full border-2 border-primary object-cover"
        />

        <div>
          <h3 className="font-bold text-lg">{name}</h3>

          <p className="text-sm opacity-70">{experience} years experience</p>

          <div className="mt-1 flex items-center text-warning">
            <FaStar className="text-yellow-400" />
            <span className="ml-1 font-semibold text-black dark:text-white">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecoratorCard;
