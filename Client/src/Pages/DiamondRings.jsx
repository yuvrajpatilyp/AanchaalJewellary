import React, { useState } from 'react'
import Card from '../Reusable/Card';
import Ring1 from "../assets/Diamond/diamond rings/Charming Diamond Rings.jpg"
import Ring2 from "../assets/Diamond/diamond rings/Classic Opulent Diamond Rings.jpg"
import Ring3 from "../assets/Diamond/diamond rings/Dual Finish Design Diamond Ring.jpg"
import Ring4 from "../assets/Diamond/diamond rings/Glistening Classic Diamond Rings.jpg"
import Ring5 from "../assets/Diamond/diamond rings/Graceful Triple Layer Diamond Ring.jpg"
import Ring6 from "../assets/Diamond/diamond rings/Pretty Sleek Diamond Rings.jpg"
import Ring7 from "../assets/Diamond/diamond rings/Stylish Diamond Rings.jpg"
import Ring8 from "../assets/Diamond/diamond rings/Square Diamond Bracelet.jpg"

function DiamondRings() {
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
                 image={Ring1}
                  title="Charming Diamond Rings"
                  newprice="28000"
                  oldprice="35000"
                  discount="20%"
                  onAddToCart={addToCart}
                   />
                <Card
                image={Ring2}
                title="Classic Opulent Diamond Rings"
                newprice="70000"
                oldprice="100000"
                discount="30%"
                onAddToCart={addToCart}
                 />
                <Card
                image={Ring3}
                title="Dual Finish Design Diamond Ring"
                newprice="40000"
                oldprice="65000"
                discount="20%"
                onAddToCart={addToCart}
                />
                <Card
                image={Ring4}
                title="Glistening Classic Diamond Rings"
                 newprice="60000"
                 oldprice="75000"
                 discount="20%"
                 onAddToCart={addToCart}
                 />
                <Card
                image={Ring5}
                title="Graceful Diamond Ring"
                newprice="85000"
                oldprice="110000"
                discount="22%"
                onAddToCart={addToCart}
                />
                <Card
                image={Ring6}
                title="Pretty Sleek Diamond Rings"
                newprice="80000"
                oldprice="100000"
                discount="20%"
                onAddToCart={addToCart}
                />
                <Card
                image={Ring7}
                title="Stylish Diamond Rings"
                newprice="30000"
                oldprice="40000"
                discount="25%"
                onAddToCart={addToCart}
                />
                <Card
                image={Ring8}
                title="Square Diamond Bracelet"
                newprice="52000"
                oldprice="70000"
                discount="26%"
                onAddToCart={addToCart}
                />
            </div>
 
        </div>

    </>
  )
}

export default DiamondRings
