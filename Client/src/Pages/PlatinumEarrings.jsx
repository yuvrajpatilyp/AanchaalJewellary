import React, { useState } from 'react'
import Card from '../Reusable/Card'
import PlatinumEarring1 from '../assets/Platinum/PlatinumEarring/Classic Swing Platinum Earrings.jpg'
import PlatinumEarring2 from '../assets/Platinum/PlatinumEarring/Curved Drop-Shaped Platinum Earrings.jpg'
import PlatinumEarring3 from '../assets/Platinum/PlatinumEarring/Elegant Bloom Platinum Stud Earrings.jpg'
import PlatinumEarring4 from '../assets/Platinum/PlatinumEarring/Elegant Dual Tone Platinum Earrings.jpg'
import PlatinumEarring5 from '../assets/Platinum/PlatinumEarring/Elegant Infinity Heart Platinum Earrings.jpg'
import PlatinumEarring6 from '../assets/Platinum/PlatinumEarring/Elegant Sparkle Platinum Earrings.jpg'
import PlatinumEarring7 from '../assets/Platinum/PlatinumEarring/Petal Spark Platinum Earrings.jpg'
import PlatinumEarring8 from '../assets/Platinum/PlatinumEarring/Platinum Circular Stud Earrings.jpg'



function PlatinumEarrings() {
    const [cart, setCart] = useState([]);

        const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
        console.log("Added to cart:", product);
            };

  return (
    <>
      
 <div className="container mx-auto px-4 py-8">

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card
                 image={PlatinumEarring1}
                  title="Classic Swing Platinum Earrings" 
                  newprice="36,000" 
                  oldprice="45,000" 
                  discount="20%" 
                  onAddToCart={addToCart}
                   />
                <Card 
                image={PlatinumEarring2} 
                title="Curved Platinum Earrings" 
                newprice="56,000" 
                oldprice="70,000" 
                discount="20%" 
                onAddToCart={addToCart}
                 />
                <Card 
                image={PlatinumEarring3} 
                title="Elegant Platinum Earrings" 
                newprice="28,800" 
                oldprice="32,000" 
                discount="10%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumEarring4} 
                title="Elegant Tone Platinum Earrings"
                 newprice="38,500" 
                 oldprice="55,000" 
                 discount="30%" 
                 onAddToCart={addToCart} 
                 />
                <Card 
                image={PlatinumEarring5} 
                title="Elegant Heart Platinum Earrings" 
                newprice="64,000" 
                oldprice="80,000" 
                discount="20%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumEarring6} 
                title=" Sparkle Platinum Earrings" 
                newprice="54,000" 
                oldprice="60,000" 
                discount="40%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumEarring7} 
                title="Petal Spark Platinum Earrings " 
                newprice="76,000" 
                oldprice="95,000" 
                discount="30%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumEarring8} 
                title="Platinum Circular Stud Earrings" 
                newprice="84,000" 
                oldprice="1,20,00" 
                discount="40%" 
                onAddToCart={addToCart} 
                />
            </div>

        </div>

    </>
  )
}

export default PlatinumEarrings
