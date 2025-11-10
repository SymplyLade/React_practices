import React from "react";

const ButtonComponent = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      {/* Primary Button */}
      <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition">
        Primary
      </button>

      {/* Secondary Button */}
      <button className="bg-white text-green-600 border border-green-600 font-semibold py-2 px-4 rounded-md hover:bg-green-50 transition">
        Secondary
      </button>

      {/* Danger Button */}
      <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition">
        Danger
      </button>

      {/* Success Button */}
      <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition">
        Success
      </button>

      {/* Large Button */}
      <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-700 transition">
        Large Button
      </button>

      {/* Small Button */}
      <button className="bg-green-600 text-white font-semibold py-1 px-3 rounded-md hover:bg-green-700 transition text-sm">
        Small Button
      </button>
    </div>
  );
};

export default ButtonComponent;
