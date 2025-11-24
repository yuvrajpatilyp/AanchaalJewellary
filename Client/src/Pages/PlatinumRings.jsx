import React, { useState } from 'react'
import Card from '../Reusable/Card'
import PlatinumRing1 from '../assets/Platinum/PlatinumRings/Classic Flow Platinum Ring.jpg'
import PlatinumRing2 from '../assets/Platinum/PlatinumRings/Classic Groove Platinum Ring.jpg'
import PlatinumRing3 from '../assets/Platinum/PlatinumRings/Elegant Edge Platinum Ring.jpg'
import PlatinumRing4 from '../assets/Platinum/PlatinumRings/Linear Spark Platinum Ring.jpg'
import PlatinumRing5 from '../assets/Platinum/PlatinumRings/Matte and Glossy Star Design Platinum Ring.jpg'
import PlatinumRing6 from '../assets/Platinum/PlatinumRings/Premium And Single Stone Platinum Ring.jpg'
import PlatinumRing7 from '../assets/Platinum/PlatinumRings/Refined Line Platinum Ring.jpg'
import PlatinumRing8 from '../assets/Platinum/PlatinumRings/Refined Spark Platinum Ring.jpg'

function PlatinumRings() {
     const [cart, setCart] = useState([]);

                const addToCart = (product) => {
                    setCart((prev) => [...prev, product]);
                    console.log("Added to cart:", product);
                };
return (
     <div className="container mx-auto px-4 py-8">

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card
                 image={PlatinumRing1}
                  title="Classic Flow Platinum Ring" 
                  newprice="42,000" 
                  oldprice="52,000" 
                  discount="20%" 
                  onAddToCart={addToCart}
                   />
                <Card 
                image={PlatinumRing2} 
                title="Classic Groove Platinum Ring" 
                newprice="75,000" 
                oldprice="1,00,00" 
                discount="25%" 
                onAddToCart={addToCart}
                 />
                <Card 
                image={PlatinumRing3} 
                title="Elegant Edge Platinum Ring" 
                newprice="28,000" 
                oldprice="35,000" 
                discount="20%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumRing4} 
                title="Linear Spark Platinum Ring"
                 newprice="60,000" 
                 oldprice="75,000" 
                 discount="20%" 
                 onAddToCart={addToCart} 
                 />
<Card 
                image={PlatinumRing5} 
                title="Matte Design Platinum Ring" 
                newprice="1,10,00" 
                oldprice="1,50,00" 
                discount="26%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumRing6} 
                title="Premium Stone Platinum Ring" 
                newprice="38,000" 
                oldprice="47,500" 
                discount="20%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumRing7} 
                title="Refined Line Platinum Ring " 
                newprice="95,000" 
                oldprice="1,20,000" 
                discount="20%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumRing8} 
                title="Refined Spark Platinum Ring" 
                newprice="70,000" 
                oldprice="1,00,000" 
                discount="30%" 
                onAddToCart={addToCart} 
                />
            </div>

        </div>
  )
}

export default PlatinumRings