import React, { useState } from 'react'
import Card from '../Reusable/Card';
import Earring1 from "../assets/Diamond/diamond earrings/Captivating Floral Diamond Earrings.jpg"
import Earring2 from "../assets/Diamond/diamond earrings/Dainty Pear Diamond Earrings.jpg"
import Earring3 from "../assets/Diamond/diamond earrings/Golden  Rose Gold Diamond Earrings.jpg"
import Earring4 from "../assets/Diamond/diamond earrings/Modern  Suidhaga Diamond Earrings.webp"
import Earring5 from "../assets/Diamond/diamond earrings/Regal Elephant Diamond Earrings.jpg"
import Earring6 from "../assets/Diamond/diamond earrings/Star Threads Rose Diamond Earrings.webp"
import Earring7 from "../assets/Diamond/diamond earrings/Timeless Oval Drop Diamond Earrings.jpg"
import Earring8 from "../assets/Diamond/diamond earrings/Wondering Dangler Diamond Earrings.jpg"


function DiamondEarrings() {
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
                 image={Earring1}
                  title="Captivating  Diamond Earrings"
                  newprice="35000"
                  oldprice="45000"
                  discount="22%"
                  onAddToCart={addToCart}
                   />
                <Card
                image={Earring2}
                title="Dainty Pear Diamond Earrings"
                newprice="55000"
                oldprice="70000"
                discount="21%"
                onAddToCart={addToCart}
                 />
                <Card
                image={Earring3}
                title="Golden  Rose Diamond Earrings"
                newprice="28000"
                oldprice="35000"
                discount="28%"
                onAddToCart={addToCart}
                />
                <Card
                image={Earring4}
                title=" Suidhaga Diamond Earrings"
                 newprice="48000"
                 oldprice="60000"
                 discount="20%"
                 onAddToCart={addToCart}
                 />
                <Card
                image={Earring5}
                title="Regal Elephant Diamond Earrings"
                newprice="65000"
                oldprice="85000"
                discount="23%"
                onAddToCart={addToCart}
                />
                <Card
                image={Earring6}
                title="Star Threads Diamond Earrings"
                newprice="40000"
                oldprice="55000"
                discount="27%"
                onAddToCart={addToCart}
                />
                <Card
                image={Earring7}
                title="Timeless Oval Diamond Earring"
                newprice="22000"
                oldprice="28000"
                discount="21%"
                onAddToCart={addToCart}
                />
                <Card
                image={Earring8}
                title=" Dangler Diamond Earrings"
                newprice="75000"
                oldprice="100000"
                discount="25%"
                onAddToCart={addToCart}
                />
            </div>
 
        </div>

    </>
  )
}

export default DiamondEarrings
