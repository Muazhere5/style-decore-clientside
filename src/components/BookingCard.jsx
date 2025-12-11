import { Link } from "react-router-dom";
import StatusStepper from "./StatusStepper";

const BookingCard = ({ booking }) => {
  const {
    _id,
    serviceName,
    image,
    userEmail,
    price,
    status,
    eventDate,
  } = booking;

  return (
    <div className="card bg-base-100 rounded-xl shadow-lg border border-base-300 hover:shadow-2xl transition p-4">
      <div className="flex gap-4">
        <img
          src={image}
          alt={serviceName}
          className="w-40 h-32 rounded-lg object-cover border"
        />

        <div className="flex-1">
          <h2 className="font-bold text-xl">{serviceName}</h2>
          <p className="text-sm opacity-70">User: {userEmail}</p>

          <p className="font-semibold text-primary mt-1">
            ${price.toLocaleString()}
          </p>

          <p className="text-sm mt-1">
            Event Date:{" "}
            <span className="font-medium">{new Date(eventDate).toDateString()}</span>
          </p>

          <div className="mt-3">
            <StatusStepper status={status} />
          </div>

          <div className="card-actions mt-4">
            <Link
              to={`/dashboard/booking/update/${_id}`}
              className="btn btn-outline btn-primary btn-sm"
            >
              Update Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
