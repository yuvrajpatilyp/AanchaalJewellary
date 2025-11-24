import React, { useState } from 'react'
import Card from "../Resuable/Card";
import Ring1 from '../assets/Silver/SilverRings/Charming Silver Floral Adjustable Ring.jpg'
import Ring2 from '../assets/Silver/SilverRings/Dazzling Silver Square Stone Chain Ring.jpg'
import Ring3 from '../assets/Silver/SilverRings/Elegant Silver Round Stone Chain Ring.jpg'
import Ring4 from '../assets/Silver/SilverRings/Forever Hugs Adjustable Silver Ring.jpg'
import Ring5 from '../assets/Silver/SilverRings/Glossy Rectangular Stone Adjustable Silver Ring.jpg'
import Ring6 from '../assets/Silver/SilverRings/Graceful Linked Design Silver Ring.jpg'
import Ring7 from '../assets/Silver/SilverRings/Magical White Stone Silver Ring.jpg'
import Ring8 from '../assets/Silver/SilverRings/Perfect Twirl Adjustable Silver Ring.jpg'

function SilverRings() {
     const [cart, setCart] = useState([]);

        const addToCart = (product) => {
            setCart((prev) => [...prev, product]);
            console.log("Added to cart:", product);
        };
  return (
   <div className="container mx-auto px-4 py-8">

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card
                 image={Ring1}
                  title="Charming Silver Adjustable Ring" 
                  newprice="750" 
                  oldprice="1,000" 
                  discount="25%" 
                  onAddToCart={addToCart}
                   />
                <Card 
                image={Ring2} 
                title="Dazzling Silver Stone Chain Ring" 
                newprice="1,200" 
                oldprice="1,500" 
                discount="20%" 
                onAddToCart={addToCart}
                 />
                <Card 
                image={Ring3} 
                title="Elegant Silver Chain Ring" 
                newprice="650" 
                oldprice="800" 
                discount="18%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Ring4} 
                title="Adjustable Silver Ring"
                 newprice="500" 
                 oldprice="650" 
                 discount="18%" 
                 onAddToCart={addToCart} 
                 />
                <Card 
                image={Ring5} 
                title="Glossy Adjustable Silver Ring" 
                newprice="1,050" 
                oldprice="1,400" 
                discount="25%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Ring6} 
                title="Graceful Linked Design Silver Ring" 
                newprice="850" 
                oldprice="1,100" 
                discount="22%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Ring7} 
                title="Magical White Stone Silver Ring " 
                newprice="1,500" 
                oldprice="2,000" 
                discount="25%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Ring8} 
                title="Perfect Twirl Silver Ring" 
                newprice="900" 
                oldprice="1,200" 
                discount="25%" 
                onAddToCart={addToCart} 
                />
            </div>

        </div>
  )
}

export default SilverRings

