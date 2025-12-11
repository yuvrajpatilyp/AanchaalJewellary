
import Card from '../Reusable/Card';
import React, { useState } from 'react'
import PlatinumNeckle1 from '../assets/Platinum/PlatinumNeckles/Elegant Blossom Platinum Necklace.jpg'
import PlatinumNeckle2 from '../assets/Platinum/PlatinumNeckles/Interlock Bead Platinum Chain.jpg'
import PlatinumNeckle3 from '../assets/Platinum/PlatinumNeckles/Platinum Geometric Link Chain.jpg'
import PlatinumNeckle4 from '../assets/Platinum/PlatinumNeckles/Rectangular Link Platinum Chain.jpg'
import PlatinumNeckle5 from '../assets/Platinum/PlatinumNeckles/Sleek Balance Platinum Chain.jpg'
import PlatinumNeckle6 from '../assets/Platinum/PlatinumNeckles/Textured Oval Link Platinum Chain.jpg'
import PlatinumNeckle7 from '../assets/Platinum/PlatinumNeckles/Twine Luxe Platinum Chain.jpg'
import PlatinumNeckle8 from '../assets/Platinum/PlatinumNeckles/Two-Layer Beaded Platinum Chain.jpg'


function PlatinumNecklace() {
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
                 image={PlatinumNeckle1}
                  title="Elegant Blossom Necklace" 
                  newprice="85,000" 
                  oldprice="1,00,000" 
                  discount="15%" 
                  onAddToCart={addToCart}
                   />
                <Card 
                image={PlatinumNeckle2} 
                title="Interlock Bead Platinum Chain" 
                newprice="1,20,000" 
                oldprice="1,50,00" 
                discount="20%" 
                onAddToCart={addToCart}
                 />
                <Card 
                image={PlatinumNeckle3} 
                title="Platinum Geometric Link Chain" 
                newprice="48,000" 
                oldprice="60,000" 
                discount="20%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumNeckle4} 
                title="Rectangular Platinum Chain"
                 newprice="70,000" 
                 oldprice="1,00,000" 
                 discount="30%" 
                 onAddToCart={addToCart} 
                 />
                <Card 
                image={PlatinumNeckle5} 
                title="Sleek Balance Platinum Chain" 
                newprice="1,05,000" 
                oldprice="1,20,000" 
                discount="12.5%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumNeckle6} 
                title="Textured Oval Platinum Chain" 
                newprice="90,000" 
                oldprice="1,00,000" 
                discount="10%" 
                onAddToCart={addToCart} 
                />
<Card 
                image={PlatinumNeckle7} 
                title="Twine Luxe Platinum Chain" 
                newprice="1,75,000" 
                oldprice="2,50,000" 
                discount="30%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={PlatinumNeckle8} 
                title=" Beaded Platinum Chain" 
                newprice="95,000" 
                oldprice="1,20,00" 
                discount="20%" 
                onAddToCart={addToCart} 
                />
            </div>

        </div>
    </>
  )
}

export default PlatinumNecklace
