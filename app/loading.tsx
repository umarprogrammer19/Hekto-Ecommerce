// components/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-gray-100">
      <div className="w-16 h-16 border-[7px] border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;