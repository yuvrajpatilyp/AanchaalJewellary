import React, { useState } from 'react'
import Card from '../Reusable/Card';
import Ring1 from "../assets/Gold/Rings/Elegant Petal Harmony Gold Ring.jpg"
import Ring2 from "../assets/Gold/Rings/Garden Elegance Gold Ring.jpg"
import Ring3 from "../assets/Gold/Rings/Leafy Elegance Gold Ring.jpg"
import Ring4 from "../assets/Gold/Rings/Majestic Bloom Gold Ring.jpg"
import Ring5 from "../assets/Gold/Rings/Paisley Bloom Gold Ring.jpg"
import Ring6 from "../assets/Gold/Rings/Pink Whisper Gold Ring.jpg"
import Ring7 from "../assets/Gold/Rings/Rosy Bloom Leaf Gold Ring.jpg"
import Ring8 from "../assets/Gold/Rings/Twine Shine Gold Ring.jpg"


function GoldRings() {

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
                  title="Elegant Petal Harmony Gold Ring"
                  newprice="12000"
                  oldprice="15000"
                  discount="20%"
                  onAddToCart={addToCart}
                   />
                <Card
                image={Ring2}
                title="Garden Elegance Gold Ring"
                newprice="7000"
                oldprice="10000"
                discount="30%"
                onAddToCart={addToCart}
                 />
                <Card
                image={Ring3}
                title="Leafy Elegance Gold Ring"
                newprice="8500"
                oldprice="10000"
                discount="15%"
                onAddToCart={addToCart}
                />
                <Card
                image={Ring4}
                title="Majestic Bloom Gold Ring"
                 newprice="22000"
                 oldprice="28000"
                 discount="21%"
                 onAddToCart={addToCart}
                 />
                <Card
                image={Ring5}
                title="Paisley Bloom Gold Ring"
                newprice="6500"
                oldprice="8000"
                discount="19%"
                onAddToCart={addToCart}
                />
                <Card
                image={Ring6}
                title="Pink Whisper Gold Ring"
                newprice="8000"
                oldprice="10000"
                discount="20%"
                onAddToCart={addToCart}
                />
                <Card
                image={Ring7}
                title="Rosy Bloom Leaf Gold Ring"
                newprice="25000"
                oldprice="32000"
                discount="22%"
                onAddToCart={addToCart}
                />
                <Card
                image={Ring8}
                title="Twine Shine Gold Ring"
                newprice="10000"
                oldprice="12500"
                discount="20%"
                onAddToCart={addToCart}
                />
            </div>
 
        </div>
    </>
  )
}

export default GoldRings
