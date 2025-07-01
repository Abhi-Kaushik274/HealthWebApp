// import React from "react";

// function GridView() {
//     return (
//         <div>Hello</div>
//     )
// }

// export default GridView;



// FancyBottomNavBar.jsx
import React, { useState } from 'react';
import { Book, ScanLine, Store } from 'lucide-react';

const GridView = () => {
  const [active, setActive] = useState("center");

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative bg-white px-8 py-4 rounded-full shadow-xl flex items-center justify-between gap-12 min-w-[280px]">
        
        {/* Left Icon */}
        <button
          onClick={() => setActive("left")}
          className={`flex flex-col items-center transition-all duration-300 ${
            active === "left" ? "text-black" : "text-gray-400"
          }`}
        >
          <Book size={24} />
        </button>

        {/* Center Elevated Button */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => setActive("center")}
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 rounded-full shadow-xl transform transition-transform duration-300 active:scale-95"
          >
            <ScanLine size={24} />
          </button>
        </div>

        {/* Right Icon */}
        <button
          onClick={() => setActive("right")}
          className={`flex flex-col items-center transition-all duration-300 ${
            active === "right" ? "text-black" : "text-gray-400"
          }`}
        >
          <Store size={24} />
        </button>
      </div>

      {/* Indicator Line */}
      <div className="mt-4 flex justify-center">
        <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default GridView;
