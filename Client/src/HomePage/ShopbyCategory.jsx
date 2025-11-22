import React from 'react'

function ShopbyCategory() {
  return (
    <>
    <div className=' flex gap-2 pt-30 max-w-6xl'>
        <div className='h-[330px] w-[300px] '>
            <img src='/src/assets/goldenring.jpg ' className='h-full'></img>
           
        </div>
         <div className='  h-[330px] w-[300px]  '>
            <img src='/src/assets/earring.jpg' className='h-full'></img>
        </div>
         <div className=' h-[330px] w-[300px]'>
            <img src='/src/assets/bangles.jpg' className='h-full'></img>
        </div>
         <div className=' h-[330px] w-[300px] '>
             <img src='/src/assets/neacklace.jpg' className='h-full'></img>
        </div>
         <div className='  h-[330px] w-[300px]'>
           <img src='/src/assets/earring.jpg' className='h-full'></img>
        </div>
    </div>
   
    </>
  )
}

export default ShopbyCategory