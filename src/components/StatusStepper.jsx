import { FaCheckCircle } from "react-icons/fa";

const steps = [
  { id: "pending", label: "Pending" },
  { id: "accepted", label: "Accepted" },
  { id: "preparing", label: "Preparing" },
  { id: "on_the_way", label: "On The Way" },
  { id: "completed", label: "Completed" },
];

const StatusStepper = ({ status }) => {
  const currentIndex = steps.findIndex((s) => s.id === status);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between relative">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full border-t border-base-300 -z-0"></div>

        {steps.map((step, index) => {
          const active = index <= currentIndex;

          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center text-center w-full"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition duration-300
                ${
                  active
                    ? "bg-primary text-white border-primary"
                    : "bg-base-100 text-base-content border-base-300"
                }`}
              >
                {active ? <FaCheckCircle size={18} /> : index + 1}
              </div>

              <p
                className={`mt-2 text-xs ${
                  active ? "font-semibold text-primary" : "opacity-60"
                }`}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusStepper;
