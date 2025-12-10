import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="flex flex-col items-center space-y-3">
        {/* Outer ring animation */}
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>

        <p className="text-primary text-lg font-semibold tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loader;
