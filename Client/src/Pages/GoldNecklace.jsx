import React, { useState } from 'react'
import Card from '../Reusable/Card';
import Necklace1 from "../assets/Gold/Necklace/Dazzling Aquatic-Themed Gold Necklace.jpg"
import Necklace2 from "../assets/Gold/Necklace/Delicate Heart Accents Gold Necklace.jpg"
import Necklace3 from "../assets/Gold/Necklace/Elegant Diamond-Frame Gold Necklace.jpg"
import Necklace4 from "../assets/Gold/Necklace/Elegant Two-Layer Butterfly Gold Necklace.jpg"
import Necklace5 from "../assets/Gold/Necklace/Graceful Geometric Heart Gold Necklace.jpg"
import Necklace6 from "../assets/Gold/Necklace/Modern Geometry Gold Necklace.jpg"
import Necklace7 from "../assets/Gold/Necklace/Radiant Hanging Bead Gold Pendant Necklace.jpg"
import Necklace8 from "../assets/Gold/Necklace/Radiant Lakshmi Gold Necklace.jpg"

function GoldNecklace() {
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
                  title="Dazzling Aquatic Gold Necklace"
                  newprice="38000"
                  oldprice="45000"
                  discount="15%"
                  onAddToCart={addToCart}
                   />
                <Card
                image={Necklace2}
                title="Delicate Heart Gold Necklace"
                newprice="22000"
                oldprice="28000"
                discount="21%"
                onAddToCart={addToCart}
                 />
                <Card
                image={Necklace3}
                title="Elegant Gold Necklace"
                newprice="125000"
                oldprice="150000"
                discount="17%"
                onAddToCart={addToCart}
                />
                <Card
                image={Necklace4}
                title="Elegant Butterfly Gold Necklace"
                 newprice="18000"
                 oldprice="22000"
                 discount="18%"
                 onAddToCart={addToCart}
                 />
                <Card
                image={Necklace5}
                title="Graceful Heart Gold Necklace"
                newprice="32000"
                oldprice="40000"
                discount="20%"
                onAddToCart={addToCart}
                />
                <Card
                image={Necklace6}
                title="Modern Geometry Gold Necklace"
                newprice="90000"
                oldprice="120000"
                discount="25%"
                onAddToCart={addToCart}
                />
                <Card
                image={Necklace7}
                title="Radiant  Pendant Necklace"
                newprice="140000"
                oldprice="170000"
                discount="18%"
                onAddToCart={addToCart}
                />
                <Card
                image={Necklace8}
                title="Radiant Lakshmi Gold Necklace"
                newprice="15000"
                oldprice="18000"
                discount="17%"
                onAddToCart={addToCart}
                />
            </div>
 
        </div>


    </>
  )
}

export default GoldNecklace
