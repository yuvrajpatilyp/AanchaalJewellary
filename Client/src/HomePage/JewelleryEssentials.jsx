import React from 'react'

function JewelleryEssentials() {
  return (
    <div className='flex  flex-row '>
        <div>
            <div className='h-[250px] w-[400px] '>
                <img src='/src/assets/casualwear.jpg' className=' '></img>
                
            </div>
            <div className='flex-2 object-contain h-[250px] w-[400px] '>
                <img src='/src/assets/tradditionalwear.jpg' className=''></img>
            </div>
            <div className='object-contain h-[250px] w-[400px] '>
                <img src='/src/assets/partwear.jpg' className=''></img>
            </div>
        </div>

    </div>
  )
}

export default JewelleryEssentials