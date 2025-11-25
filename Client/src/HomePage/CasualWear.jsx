import React from 'react'
import Card from '../Resuable/Card'
import NavigationBar from '../Resuable/NavigationBar'

function CasualWear() {
  return (

   <div>
    <NavigationBar/>
    
    <div className=' max-w-6xl mx-auto px-10 py-10'>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

               <Card 
                title='neacklace'
                oldprice='456'
                newprice='423'
                image='/src/assets/CasualNeacklace/casualwear1.webp'
                hoverImage='/src/assets/CasualNeacklace/casualwear2.webp'
                />

                
               <Card 
                title='neacklace'
                oldprice='456'
                newprice='423'
                image='/src/assets/CasualNeacklace/casualwear3.webp'
                hoverImage='/src/assets/CasualNeacklace/casualwear4.webp'
                />

                
               <Card 
                title='neacklace'
                oldprice='456'
                newprice='423'
                image='/src/assets/CasualNeacklace/casualwear5.webp'
                hoverImage='/src/assets/CasualNeacklace/casualwear6.webp'
                />

                
               <Card 
                title='neacklace'
                oldprice='456'
                newprice='423'
                image='/src/assets/CasualNeacklace/casualwear7.webp'
                hoverImage='/src/assets/CasualNeacklace/casualwear8.webp'
                />

                
               <Card 
                title='neacklace'
                oldprice='456'
                newprice='423'
                image='/src/assets/CasualNeacklace/casualwear9.webp'
                hoverImage='/src/assets/CasualNeacklace/casualwear10.jpg'
                />

                
               <Card 
                title='neacklace'
                oldprice='456'
                newprice='423'
                image='/src/assets/CasualNeacklace/casualwear11.webp'
                hoverImage='/src/assets/CasualNeacklace/casualwear12.webp'
                />

                
               <Card 
                title='neacklace'
                oldprice='456'
                newprice='423'
                image='/src/assets/CasualNeacklace/casualwear13.webp'
                hoverImage='/src/assets/CasualNeacklace/casualwear14.webp'
                />

                
               <Card 
                title='neacklace'
                oldprice='456'
                newprice='423'
                image='/src/assets/CasualNeacklace/casualwear15.webp'
                hoverImage='/src/assets/CasualNeacklace/casualwear16.webp'
                />

                
                <Card 
                title='neacklace'
                oldprice='456'
                newprice='423'
                image='/src/assets/CasualNeacklace/casualwear17.webp'
                hoverImage='/src/assets/CasualNeacklace/casualwear18.webp'
                />
               
            
        </div>
    </div>
     </div>
  )
}

export default CasualWear