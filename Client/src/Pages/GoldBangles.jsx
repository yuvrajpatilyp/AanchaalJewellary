import React, { useState } from 'react'
import Card from '../Reusable/Card'
import Bangle1 from "../assets/Gold/Bangles/Dazzling Heritage Bead Bangle.jpg"
import Bangle2 from "../assets/Gold/Bangles/Elegnat Swril Floral Gold Bangles.jpg"
import Bangle3 from "../assets/Gold/Bangles/Sacrosanct Floral Radiance Gold Bangles.jpg"
import Bangle4 from "../assets/Gold/Bangles/Textured Swirl Gold Bangles.jpg"
import Bangle5 from "../assets/Gold/Bangles/Timeless White Accent Gold Bangles.jpg"

function GoldBangles() {
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
                 image={Bangle1}
                 id="Dress1"
                  title="Dazzling Heritage Bead Bangle"
                  newprice="38000"
                  oldprice="45000"
                  discount="15%"
                  onAddToCart={addToCart}
                   />
                <Card
                 id="Dress2"
                image={Bangle2}
                title="Elegnat Floral Gold Bangles"
                newprice="52000"
                oldprice="65000"
                discount="20%"
                onAddToCart={addToCart}
                 />
                <Card
                 id="Dress3"
                image={Bangle3}
                hoverImage={Bangle1}
                title="Sacrosanct Floral Gold Bangles"
                newprice="44000"
                oldprice="55000"
                discount="20%"
                onAddToCart={addToCart}
                />
                <Card
                 id="Dress4"
                image={Bangle4}
                title="Textured Swirl Gold Bangles"
                 newprice="60000"
                 oldprice="75000"
                 discount="20%"
                 onAddToCart={addToCart}
                 />
                 <Card
                  id="Dress5"
                image={Bangle5}
                title="Timeless Accent Gold Bangless"
                newprice="28000"
                oldprice="35000"
                discount="20%"
                onAddToCart={addToCart}
                />
                
                {/* <Card
                image={Bangle6}
                title="Resilient Link Silver Bracelet"
                newprice="$102"
                oldprice="$170"
                discount="40%"
                onAddToCart={addToCart}
                />
                <Card
                image={Bangle7}
                title="Rich Amethyst Color Silver Bangles "
                newprice="$98"
                oldprice="$140"
                discount="30%"
                onAddToCart={addToCart}
                />
                <Card
                image={Bangle8}
                title="Stunning Silver Bracelett"
                newprice="$120"
                oldprice="$160"
                discount="40%"
                onAddToCart={addToCart} 
                />  */}
            </div>
 
        </div>
    </>
  )
}

export default GoldBangles
