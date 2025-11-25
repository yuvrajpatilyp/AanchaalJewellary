import React from 'react'
import { Link } from 'react-router-dom'

function Shopbygen() {
  return (
    <div>
        <p className='text-center py-4 text-4xl font-bold text-gray-900'>Curated for you</p>
        <div className='flex gap-3 max-w-7xl mx-auto px-4 py-5  '>
            {/*womens collection */}
            <Link to='/womenscollection'><div className=' place-items-center text-xl font-serif italic'>
            <img src='/src/assets/womencollection.webp'
                 className=' rounded-xl  shadow-xl h-[550px] w-[700px] '></img>
            <p className='py-4 text-3xl capitalize antialiased'> Women's collections </p> 
            
           </div></Link>
  
            {/*mens collection */}
           <Link to='/menscollection'>
           <div className=' place-items-center text-xl font-serif italic'>
             <img src='/src/assets/menscollection.jpg'
                 className=' rounded-xl shadow-xl h-[550px] w-[700px] '></img>
             <p className='py-4 text-3xl capitalize antialiased'> men's collection </p> 
          </div></Link>
           
           {/*kids collection */}

          <Link to='/kidscollection'>
           <div className=' place-items-center text-xl font-serif italic'>
               <img src='/src/assets/kidscollection.webp'
                 className=' rounded-xl  shadow-xl h-[550px] w-[700px] '></img>
                <p className='py-4 text-3xl capitalize'> kids collection </p> 
          </div>
          </Link>

    </div>
    </div>
  )
}

export default Shopbygen     