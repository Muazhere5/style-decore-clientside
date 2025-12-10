import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
    </div>
  );
};

export default Spinner;
