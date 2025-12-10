import React from 'react'
import { Link } from 'react-router-dom'
 
function Shopbygen() {
  const collections = [
    { title: "Women's Collection", img: 'src/assets/womencollection.webp', link: '/womenscollection' },
    { title: "Men's Collection", img: 'src/assets/menscollection.jpg', link: '/menscollection' },
    { title: "Kids Collection", img: '/src/assets/kidscollection.webp', link: '/kidscollection' },
  ];
 
  return (
    <div className='py-12 bg-gray-50'>
      <p className='text-center py-4 text-4xl font-bold text-gray-900 tracking-wide'>Curated for You</p>
 
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4'>
 
        {collections.map((item, i) => (
          <Link key={i} to={item.link}>
            <div className='relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105'>
             
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className='w-full h-64 sm:h-80 md:h-96 lg:h-[550px] object-cover transition-all duration-500 group-hover:scale-110'
              />
 
              {/* Gradient overlay on hover */}
              <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
 
              {/* Text */}
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center px-4'>
                <p className='text-white text-lg sm:text-2xl md:text-3xl font-serif font-bold uppercase tracking-wide drop-shadow-lg group-hover:underline'>
                  {item.title}
                </p>
                <p className='text-sm sm:text-base text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  Explore our exclusive {item.title.toLowerCase()}
                </p>
              </div>
 
            </div>
          </Link>
        ))}
 
      </div>
    </div>
  )
}
 
export default Shopbygen