import React, { useState } from 'react'
import Card from '../Reusable/Card'
import Earring1 from '../assets/Silver/SilverEarring/Elegant Minimalistic Beads Silver Earrings.jpg'
import Earring2 from '../assets/Silver/SilverEarring/Graceful Curved Floral Silver Earrings.jpg'
import Earring3 from '../assets/Silver/SilverEarring/Intricate Paisley Silver Jhumka Earrings.jpg'
import Earring4 from '../assets/Silver/SilverEarring/Luminous Hidden Bead Silver Studs Earrings.jpg'
import Earring5 from '../assets/Silver/SilverEarring/Luminous Peacock Designed Silver Jhumka Earrings.jpg'
import Earring6 from '../assets/Silver/SilverEarring/Sparkling Glint Stone Silver Earrings.jpg'
import Earring7 from '../assets/Silver/SilverEarring/Stylish Black Onyx Silver Earrings.jpg'
import Earring8 from '../assets/Silver/SilverEarring/Stylish Flower Drop Danglers Silver Earrings.jpg'

function SilverEarrings() {
    const [cart, setCart] = useState([]);

        const addToCart = (product) => {
            setCart((prev) => [...prev, product]);
            console.log("Added to cart:", product);
        };
  return (
       <div className="container mx-auto px-4 py-8">

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card
                 image={Earring1}
                  title="Minimalistic Silver Earrings" 
                  newprice="650" 
                  oldprice="800" 
                  discount="19%" 
                  onAddToCart={addToCart}
                   />
                <Card 
                image={Earring2} 
                title="Graceful Curved Silver Earrings" 
                newprice="1,100" 
                oldprice="1,400" 
                discount="21%" 
                onAddToCart={addToCart}
                 />
<Card 
                image={Earring3} 
                title="Paisley Silver Jhumka Earrings" 
                newprice="1,500" 
                oldprice="2,000" 
                discount="25%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Earring4} 
                title="Luminous Silver Studs Earrings"
                 newprice="850" 
                 oldprice="1,100" 
                 discount="23%" 
                 onAddToCart={addToCart} 
                 />
                <Card 
                image={Earring5} 
                title="Luminous Silver Jhumka Earrings" 
                newprice="1,250" 
                oldprice="1,600" 
                discount="22%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Earring6} 
                title="Sparkling Stone Silver Earrings" 
                newprice="1,800" 
                oldprice="2,400" 
                discount="25%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Earring7} 
                title="Stylish Black Silver Earrings " 
                newprice="1,400" 
                oldprice="1,800" 
                discount="22%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Earring8} 
                title="Stylish Flower Silver Earrings" 
                newprice="900" 
                oldprice="1,200" 
                discount="25%" 
                onAddToCart={addToCart} 
                />
            </div>

        </div>
  )
}

export default SilverEarrings