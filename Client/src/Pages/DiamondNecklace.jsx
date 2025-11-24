import React, { useState } from 'react'
import Card from '../Reusable/Card';
import Necklace1 from "../assets/Diamond/diamond necklace/Elegant Lotus Cascade Diamond Necklace.jpg"
import Necklace2 from "../assets/Diamond/diamond necklace/Golden Lotus Charm Diamond Necklace.jpg"
import Necklace3 from "../assets/Diamond/diamond necklace/Hexagon Lotus Diamond Necklace.jpg"
import Necklace4 from "../assets/Diamond/diamond necklace/Lotus Lakshmi Circle Diamond Necklace.jpg"
import Necklace5 from "../assets/Diamond/diamond necklace/Radiant Lotus Layered Diamond Necklace.jpg"
import Necklace6 from "../assets/Diamond/diamond necklace/Rosy Bloom Diamond Mangalsutra.jpg"
import Necklace7 from "../assets/Diamond/diamond necklace/Sparkling Lotus Diamond Necklace.jpg"
import Necklace8 from "../assets/Diamond/diamond necklace/Sparkling Lotus Harmony Necklace.jpg"

function DiamondNecklace() {
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
                 image={Necklace1}
                  title="Elegant Lotus Cascade Diamond Necklace"
                  newprice="75000"
                  oldprice="100000"
                  discount="25%"
                  onAddToCart={addToCart}
                   />
                <Card
                image={Necklace2}
                title="Golden Lotus Charm Diamond Necklace"
                newprice="120000"
                oldprice="150000"
                discount="20%"
                onAddToCart={addToCart}
                 />
                <Card
                image={Necklace3}
                title="Hexagon Lotus Diamond Necklace"
                newprice="95000"
                oldprice="130000"
                discount="27%"
                onAddToCart={addToCart}
                />
                <Card
                image={Necklace4}
                title="Lotus Lakshmi Circle Diamond Necklace"
                 newprice="55000"
                 oldprice="70000"
                 discount="21%"
                 onAddToCart={addToCart}
                 />
                <Card
                image={Necklace5}
                title="Radiant Lotus Layered Diamond Necklace"
                newprice="180000"
                oldprice="240000"
                discount="25%"
                onAddToCart={addToCart}
                />
                <Card
                image={Necklace6}
                title="Rosy Bloom Diamond Mangalsutra"
                newprice="60000"
                oldprice="80000"
                discount="25%"
                onAddToCart={addToCart}
                />
                <Card
                image={Necklace7}
                title="Sparkling Lotus Diamond Necklace"
                newprice="140000"
                oldprice="175000"
                discount="20%"
                onAddToCart={addToCart}
                />
                <Card
                image={Necklace8}
                title="Sparkling Lotus Harmony Necklace"
                newprice="90000"
                oldprice="120000"
                discount="25%"
                onAddToCart={addToCart}
                />
            </div>
 
        </div>

    </>
  )
}

export default DiamondNecklace
