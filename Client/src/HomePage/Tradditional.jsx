import React from 'react'
import Card from "../Resuable/Card"
import NavigationBar from '../Resuable/NavigationBar'
function Tradditional() {
  return (
    <> 
     <NavigationBar/>
     <div className=' max-w-6xl mx-auto px-10 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        
        <Card
        title='neaklace'
        newprice='234'
        oldprice='345'
        image='/src/assets/Tradditionalwear/Tradditionalwear1.webp'
        hoverImage='src/assets/Tradditionalwear/Tradditionalwear2.webp'
        />

         <Card
        title='neaklace'
        newprice='234'
        oldprice='345'
        image='/src/assets/Tradditionalwear/Tradditionalwear3.webp'
        hoverImage='src/assets/Tradditionalwear/Tradditionalwear4.webp'
        />

         <Card
        title='neaklace'
        newprice='234'
        oldprice='345'
        image='/src/assets/Tradditionalwear/Tradditionalwear15.jpg'
        hoverImage='src/assets/Tradditionalwear/Tradditionalwear16.webp'
        />

          <Card
        title='neaklace'
        newprice='234'
        oldprice='345'
        image='/src/assets/Tradditionalwear/Tradditionalwear5.webp'
        hoverImage='src/assets/Tradditionalwear/Tradditionalwear6.webp'
        />

         <Card
        title='neaklace'
        newprice='234'
        oldprice='345'
        image='/src/assets/Tradditionalwear/Tradditionalwear9.jpg'
        hoverImage='src/assets/Tradditionalwear/Tradditionalwear10.jpg'
        />

         <Card
        title='neaklace'
        newprice='234'
        oldprice='345'
        image='/src/assets/Tradditionalwear/Tradditionalwear13.webp'
        hoverImage='src/assets/Tradditionalwear/Tradditionalwear14.webp'
        />

          <Card
        title='neaklace'
        newprice='234'
        oldprice='345'
        image='/src/assets/Tradditionalwear/Tradditionalwear17.jpg'
        hoverImage='src/assets/Tradditionalwear/Tradditionalwear18.webp'
        />

         <Card
        title='neaklace'
        newprice='234'
        oldprice='345'
        image='/src/assets/Tradditionalwear/Tradditionalwear11.webp'
        hoverImage='src/assets/Tradditionalwear/Tradditionalwear12.webp'
        />

         <Card
        title='neaklace'
        newprice='234'
        oldprice='345'
        image='/src/assets/Tradditionalwear/Tradditionalwear7.webp'
        hoverImage='src/assets/Tradditionalwear/Tradditionalwear8.webp'
        />
       
        </div>
    </div>



    </>

  )
}

export default Tradditional