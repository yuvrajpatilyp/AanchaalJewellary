// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50">
//       <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        
//         <h1 className="text-3xl font-bold text-[#00df9a]">Navbar</h1>

        
//         <ul className="hidden md:flex">
//           <li className="p-4 hover:text-[#00df9a] cursor-pointer">Home</li>
//           <li className="p-4 hover:text-[#00df9a] cursor-pointer">Company</li>
//           <li className="p-4 hover:text-[#00df9a] cursor-pointer">Resource</li>
//           <li className="p-4 hover:text-[#00df9a] cursor-pointer">About</li>
//           <li className="p-4 hover:text-[#00df9a] cursor-pointer">Contact</li>
//         </ul>

       
//         <div className="md:hidden cursor-pointer" onClick={handleNav}cla>
//           {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
//         </div>
//       </div>

     
//       <div
//         className={`fixed top-0 left-0 w-[60%] h-full bg-gray-800 text-white p-4 ease-in-out duration-500 ${
//           nav ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <ul className="uppercase">
//           <li className="p-4 border-b border-gray-600 cursor-pointer">Home</li>
//           <li className="p-4 border-b border-gray-600 cursor-pointer">Company</li>
//           <li className="p-4 border-b border-gray-600 cursor-pointer">Resource</li>
//           <li className="p-4 border-b border-gray-600 cursor-pointer">About</li>
//           <li className="p-4 cursor-pointer">Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
