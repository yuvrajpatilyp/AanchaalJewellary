import React from 'react'
import Card from '../Resuable/Card'
import NavigationBar from '../Resuable/NavigationBar'

function PartyWear() {
  return (

    <div>
      <NavigationBar/>
        <div className=' max-w-6xl mx-auto px-10 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

          <Card  
          title='party wear '
          oldprice='434'
          newprice='345'
          image='/src/assets/Partywear/partywear3.webp'
          hoverImage='/src/assets/Partywear/partywear4.webp'
          />

           <Card  
          title='party wear '
          oldprice='434'
          newprice='345'
          image='/src/assets/Partywear/partywear5.webp'
          hoverImage='/src/assets/Partywear/partywear6.webp'
          />

           <Card  
          title='party wear '
          oldprice='434'
          newprice='345'
          image='/src/assets/Partywear/partywear11.webp'
          hoverImage='/src/assets/Partywear/partywear12.webp'
          />

                    <Card  
          title='party wear '
          oldprice='434'
          newprice='345'
          image='/src/assets/Partywear/partywear9.webp'
          hoverImage='/src/assets/Partywear/partywear10.jpg'
          />

           <Card  
          title='party wear '
          oldprice='434'
          newprice='345'
          image='/src/assets/Partywear/partywear7.webp'
          hoverImage='/src/assets/Partywear/partywear8.webp'
          />

           <Card  
          title='party wear '
          oldprice='434'
          newprice='345'
          image='/src/assets/Partywear/partywear13.webp'
          hoverImage='/src/assets/Partywear/partywear14.webp'
          />

          <Card  
          title='party wear '
          oldprice='434'
          newprice='345'
          image='/src/assets/Partywear/partywear15.webp'
          hoverImage='/src/assets/Partywear/partywear16.jpg'
          />

           <Card  
          title='party wear '
          oldprice='434'
          newprice='345'
          image='/src/assets/Partywear/partywear17.webp'
          hoverImage='/src/assets/Partywear/partywear18.webp'
          />

           <Card  
          title='party wear '
          oldprice='434'
          newprice='345'
          image='/src/assets/Partywear/partywear1.webp'
          hoverImage='/src/assets/Partywear/partywear2.webp'
          />
        
       </div>
       </div>
    </div>
    
  )
}

export default PartyWear