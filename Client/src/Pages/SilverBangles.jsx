import React, { useState } from 'react'
import Card from '../Reusable/Card';
import Bracelet1 from '../assets/Silver/SilverBangles/Charismatic Contrast Sterling Silver Bracelet.jpg';
import Bracelet2 from '../assets/Silver/SilverBangles/Fairytale Charm Floral Silver Bracelet.jpg';
import Bracelet3 from '../assets/Silver/SilverBangles/Fashionable Pearl Adjustable Silver Bracelet.jpg';
import Bracelet4 from '../assets/Silver/SilverBangles/Modern Harmony Silver Bracelet.jpg';
import Bracelet5 from '../assets/Silver/SilverBangles/Radiant Square Charm Silver Bangles.jpg';
import Bracelet6 from '../assets/Silver/SilverBangles/Resilient Link Silver Bracelet.jpg';
import Bracelet7 from '../assets/Silver/SilverBangles/Rich Amethyst Color Silver Bangles.jpg';
import Bracelet8 from '../assets/Silver/SilverBangles/Stunning Silver Bracelet.jpg';



function SilverBangles() {
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
                 image={Bracelet1}
                  title="Charismatic Sterling  Bracelet" 
                  newprice="1,200" 
                  oldprice="1,500" 
                  onAddToCart={addToCart}
                   />

                <Card 
                image={Bracelet2} 
                title="Fairytale Floral Silver Bracelet" 
                newprice="950" 
                oldprice="1,200"                  
                onAddToCart={addToCart}
                 />
                 
                <Card 
                image={Bracelet3} 
                title=" Pearl Adjustable Silver Bracelet" 
                newprice="1,500" 
                oldprice="2,000" 
                onAddToCart={addToCart} 
                />
                
                <Card 
                image={Bracelet4} 
                title="Modern Harmony Silver Bracele"
                 newprice="1,800" 
                 oldprice="2,400"                  
                 onAddToCart={addToCart} 
                 />

                <Card 
                image={Bracelet5} 
                title="Radiant Square Silver Bangles" 
                newprice="2,200" 
                oldprice="2,750"                 
                onAddToCart={addToCart} 
                />

                <Card 
                image={Bracelet6} 
                title="Resilient Link Silver Bracelet" 
                newprice="800" 
                oldprice="$1000"                
                onAddToCart={addToCart} 
                />

                <Card 
                image={Bracelet7} 
                title="Rich Amethyst Silver Bangles " 
                newprice="1,600" 
                oldprice="2,000"                 
                onAddToCart={addToCart} 
                />

                <Card 
                image={Bracelet8} 
                title="Stunning Silver Bracelett" 
                newprice="1,350" 
                oldprice="1,800"                
                onAddToCart={addToCart} 
                />
            </div>

        </div> 
    </>
  )
}

export default SilverBangles
