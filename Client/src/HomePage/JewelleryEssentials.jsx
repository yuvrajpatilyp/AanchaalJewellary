import React from 'react'
import { Link } from 'react-router-dom'


function JewelleryEssentials() {
  return (
    <>
    <p className='text-center text-4xl py-5 text-gray-900 font-stretch- font-serif'>Explore our newly launched collection</p>
    <div className='flex  gap-5 max-w-5xl mx-auto px-4 py-9  '> 
           <Link to='/casual'> 
            <div className=' place-items-center font-serif text-xl italic '>
            <img src='/src/assets/casuale.jpg ' 
                 className=' rounded-xl border-4 border-[#eab676] shadow-xl h-[400px] w-[400px] transition delay-150 duration-200 ease-in hover:-translate-y-1 hover:scale-110'></img>
              <p className='py-4  text-2xl capitalize '> Casual wear </p>    
            </div> </Link>

         <Link to='/tradditional'>
         <div className=' place-items-center text-xl font-serif italic '>
            <img src='/src/assets/tradditionalwear.jpg'
                 className=' rounded-xl border-4 border-[#eab676]  shadow-xl h-[400px] w-[400px]  transition delay-150 duration-200 ease-in hover:-translate-y-1 hover:scale-110'></img>
            <p className='py-4 text-2xl capitalize'> Traddional wear </p>
         </div></Link>

        <Link to='/partywear'>
        <div className='  place-items-center text-xl font-serif italic grayscale-50'>
               <img src='/src/assets/partwear.jpg' 
                className='  rounded-xl border-4 border-[#eab676]  shadow-xl h-[400px] w-[400px]  transition delay-150 duration-200 ease-in hover:-translate-y-1 hover:scale-110'></img>
                <p className='py-4 text-2xl capitalize'> party wear </p>
        </div></Link>
        

    </div>
     </>
  )
}

export default JewelleryEssentials