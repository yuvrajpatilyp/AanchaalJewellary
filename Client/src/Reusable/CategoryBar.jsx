import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const categories = [
  { name: "ALL JEWELLERY", sub: ["FINGER RINGS","NOSE PIN","BANGLES","EARRINGS","MANGALSUTRA","NECKLACES","BRACELETS"] },
  { name: "GOLD", sub: ["ALL CREATION", "GOLD RINGS", "GOLD NOSE PIN", "GOLD EARRINGS", "GOLD MANGALSUTRA", "GOLD NECKLACES","GOLD BRACELETS"] },
  { name: "DIAMOND", sub: ["ALL CREATION", "DIAMOND RINGS", "DIAMOND NOSE PIN", "DIAMOND EARRINGS", "DIAMOND MANGALSUTRA", "DIAMOND NECKLACES","DIAMOND BRACELETS"] },
  { name: "SILVER", sub: ["ALL CREATION", "SILVER RINGS", "SILVER NOSE PIN", "SILVER EARRINGS", "SILVER MANGALSUTRA", "SILVER NECKLACES","SILVER BRACELETS"] },
  { name: "PLATINUM", sub: ["ALL CREATION", "PLATINUM RINGS", "PLATINUM NOSE PIN", "PLATINUM EARRINGS", "PLATINUM MANGALSUTRA", "PLATINUM NECKLACES","PLATINUM BRACELETS"] },
  { name: "WEDDING", sub: [] },
  { name: "COLLECTIONS", sub: [] },
];

export default function CategoryBar() {
  const [active, setActive] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <div 
        className="relative"
        onMouseLeave={() => setActive(null)}
      >
        <div className="flex justify-center items-center gap-8 py-4 text-sm font-medium text-gray-700 border-b">

          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="relative cursor-pointer"
              onMouseEnter={() => cat.sub.length > 0 && setActive(i)}
            >
              <span className={`hover:text-black ${active === i ? "font-bold" : ""}`}>
                {cat.name}
              </span>

              {active === i && (
                <div className="absolute left-0 right-0 h-0.5 bg-red-600 mt-1"></div>
              )}
            </div>
          ))}

          <div className="border-l h-6"></div>

          <FaSearch 
            className="text-gray-700 text-lg cursor-pointer hover:text-black"
            onClick={() => setShowSearch(!showSearch)}
          />
        </div>

        {/* SUB MENU HOLDS NOW 👇 */}
        {active !== null && categories[active].sub.length > 0 && (
          <div 
            className="flex justify-center gap-10 py-4 border-b text-xs font-medium bg-white"
          >
            {categories[active].sub.map((item, idx) => (
              <span key={idx} className="hover:text-black cursor-pointer">{item}</span>
            ))}
          </div>
        )}
      </div>

      {showSearch && (
        <div className="flex justify-center py-6">
          <input 
            type="text" 
            placeholder="Search products" 
            className="border-b w-80 px-2 outline-none text-gray-600"
          />
          <button className="bg-black text-white px-4 py-2 ml-2 text-sm">
            SEARCH
          </button>
        </div>
      )}
    </>
  );
}
