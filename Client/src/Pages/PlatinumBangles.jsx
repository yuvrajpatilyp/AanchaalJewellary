import React, { useState } from 'react'
import Card from '../Reusable/Card'
import Bangle1 from "../assets/Platinum/PlatinumBangles/Classic Kada Platinum Bracelet.jpg"
import Bangle2 from "../assets/Platinum/PlatinumBangles/Contemporary Platinum Bracelet.jpg"
import Bangle3 from "../assets/Platinum/PlatinumBangles/Geometric Platinum Link Bracelet.jpg"
import Bangle4 from "../assets/Platinum/PlatinumBangles/Platinum Bracelet with Mixed Elements.jpg"
import Bangle5 from "../assets/Platinum/PlatinumBangles/Refined Curb Platinum Bracelet.jpg"
import Bangle6 from "../assets/Platinum/PlatinumBangles/Sleek Platinum Bracelet.jpg"
import Bangle7 from "../assets/Platinum/PlatinumBangles/Striped Platinum Kada Bracelet.jpg"
import Bangle8 from "../assets/Platinum/PlatinumBangles/Timeless Linked Platinum Bracelet.jpg"



function PlatinumBangles() {
    const [cart, setCart] = useState([]);

        const addToCart = (product) => {
            setCart((prev) => [...prev, product]);
            console.log("Added to cart:", product);
        };

  return (
    <div className="container mx-auto px-4 py-8">

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card
                 image={Bangle1}
                  title="Classic Kada Platinum Bracelet" 
                  newprice="96,000" 
                  oldprice="1,20,000" 
                  discount="20%" 
                  onAddToCart={addToCart}
                   />
                <Card 
                image={Bangle2} 
                title="Contemporary Platinum Bracelet" 
                newprice="1,20,000" 
                oldprice="1,50,000" 
                discount="20%" 
                onAddToCart={addToCart}
                 />
                <Card 
                image={Bangle3} 
                title="Geometric Platinum Link Bracelet" 
                newprice="85,500" 
                oldprice="95,000" 
                discount="10%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Bangle4} 
                title="Platinum Bracelet with Elements"
                 newprice="1,20,000" 
                 oldprice="1,86,000" 
                 discount="30%" 
                 onAddToCart={addToCart} 
                 />
                <Card 
                image={Bangle5} 
                title="Refined Curb Platinum Bracelet" 
                newprice="1,76,000" 
                oldprice="2,20,000" 
                discount="20%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Bangle6} 
                title="Sleek Platinum Bracelet" 
                newprice="67,500" 
                oldprice="75,000" 
                discount="10%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Bangle7} 
                title="Striped Platinum  Bracelet " 
                newprice="98,000" 
                oldprice="1,40,000" 
                discount="30%" 
                onAddToCart={addToCart} 
                />
                <Card 
                image={Bangle8} 
                title="Timeless Linked Platinum Bracelet" 
                newprice="2,00,000" 
                oldprice="2,50,000" 
                discount="20%" 
                onAddToCart={addToCart} 
                />
            </div>

        </div>
  )
}

export default PlatinumBangles