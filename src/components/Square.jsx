import React from "react";

const Square = ({ value, onClick, isWinning }) => {
  return (
    <button
      onClick={onClick}
      className={`w-24 h-24 sm:w-28 sm:h-28 text-3xl sm:text-4xl font-bold flex items-center justify-center 
        border border-gray-600 rounded-sm transition duration-300 relative
        ${
          isWinning
            ? "bg-green-500 text-white"
            : "bg-gray-800 hover:bg-gray-700 text-white"
        }
      `}
    >
      {value}
    </button>
  );
};

export default Square;
