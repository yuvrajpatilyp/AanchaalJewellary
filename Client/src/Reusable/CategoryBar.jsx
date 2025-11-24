import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; 
  
const categories = [
  { name: "ALL JEWELLERY", key: "all", sub: ["FINGER RINGS","NOSE PIN","BANGLES","EARRINGS","MANGALSUTRA","NECKLACES","BRACELETS"] },
  { name: "GOLD", key: "gold", sub: ["ALL CREATION", "GOLD RINGS", "GOLD NOSE PIN", "GOLD EARRINGS", "GOLD MANGALSUTRA", "GOLD NECKLACES","GOLD BRACELETS"] },
  { name: "DIAMOND", key: "diamond", sub: ["ALL CREATION", "DIAMOND RINGS", "DIAMOND NOSE PIN", "DIAMOND EARRINGS", "DIAMOND MANGALSUTRA", "DIAMOND NECKLACES","DIAMOND BRACELETS"] },
  { name: "SILVER", key: "silver", sub: ["ALL CREATION", "SILVER RINGS", "SILVER NOSE PIN", "SILVER EARRINGS", "SILVER MANGALSUTRA", "SILVER NECKLACES","SILVER BRACELETS"] },
  { name: "PLATINUM", key: "platinum", sub: ["ALL CREATION", "PLATINUM RINGS", "PLATINUM NOSE PIN", "PLATINUM EARRINGS", "PLATINUM MANGALSUTRA", "PLATINUM NECKLACES","PLATINUM BRACELETS"] },
  { name: "WEDDING", key: "wedding", sub: [] },
  { name: "COLLECTIONS", key: "collections", sub: ["CASUAL WEAR","TRADDIONAL WEAR","PARTY WEAR"] },
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
        <div className="flex justify-between lg:justify-center items-center gap-3 lg:gap-8 py-3 text-[10px] sm:text-xs md:text-sm font-serif font-semibold text-black border-b overflow-x-auto whitespace-nowrap px-2">
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
  
          <div className="hidden sm:block border-l h-6"></div>
  
          <FaSearch 
            className="text-black text-base sm:text-lg cursor-pointer hover:text-black"
            onClick={() => setShowSearch(!showSearch)}
          />
        </div>
  
        {/* SUB MENU WITH LINKS 👇 */}
        {active !== null && categories[active].sub.length > 0 && (
          <div 
            className="flex justify-start lg:justify-center gap-4 lg:gap-10 py-3 border-b text-[9px] sm:text-xs md:text-xs font-semibold font-serif bg-white text-gray-700 overflow-x-auto whitespace-nowrap px-3"
          >
            {categories[active].sub.map((item, idx) => {
              const route = `/${categories[active].key}/${item.toLowerCase().replace(/\s+/g, "")}`;
              return (
                <Link
                  key={idx}
                  to={route}
                  className="hover:text-black cursor-pointer"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        )}
      </div>
  
      {showSearch && (
        <div className="flex flex-col sm:flex-row justify-center py-4 gap-3 px-4">
          <input 
            type="text" 
            placeholder="Search products" 
            className="border-b w-full sm:w-80 px-2 outline-none text-gray-600"
          />
          <button className="bg-black text-white px-4 py-2 text-sm w-full sm:w-auto">
            SEARCH
          </button>
        </div>
      )}
    </>
  );
}
