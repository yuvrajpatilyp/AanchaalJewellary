
import React, { useState } from 'react';
import Card from '../Reusable/Card';
import Earring1 from "../assets/Gold/Earrings/Blooming Floral Gold Earrings.jpg"
import Earring2 from "../assets/Gold/Earrings/Dewdrop Floral Gold Earrings.jpg"
import Earring3 from "../assets/Gold/Earrings/Garden Charm Gold Earrings.jpg"
import Earring4 from "../assets/Gold/Earrings/Gorgeous Floret Design Gold Earrings.jpg"
import Earring5 from "../assets/Gold/Earrings/Minimalist Floret Gold Earrings.jpg"
import Earring6 from "../assets/Gold/Earrings/Star Sparkle Gold Earrings.jpg"
import Earring7 from "../assets/Gold/Earrings/Starlight Harmony Gold Earrings.jpg"
import Earring8 from "../assets/Gold/Earrings/Triple Petal Gold Earrings.jpg"


function GoldEarrings() {

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
                  title="Blooming Floral Gold Earrings"
                  newprice="25000"
                  oldprice="30000"
                  discount="17%"
                  onAddToCart={addToCart}
                   />
                <Card
                image={Earring2}
                title="Dewdrop Floral Gold Earrings"
                newprice="12000"
                oldprice="15000"
                discount="20%"
                onAddToCart={addToCart}
                 />
                <Card
                image={Earring3}
                title="Garden Charm Gold Earrings"
                newprice="8500"
                oldprice="10000"
                discount="15%"
                onAddToCart={addToCart}
                />
                <Card
                image={Earring4}
                title="Gorgeous Floret Design Gold Earrings"
                 newprice="9000"
                 oldprice="12000"
                 discount="25%"
                 onAddToCart={addToCart}
                 />
                <Card
                image={Earring5}
                title="Minimalist Floret Gold Earrings"
                newprice="11000"
                oldprice="14000"
                discount="21%"
                onAddToCart={addToCart}
                />
                <Card
                image={Earring6}
                title="Star Sparkle Gold Earrings"
                newprice="18000"
                oldprice="23000"
                discount="22%"
                onAddToCart={addToCart}
                />
                <Card
                image={Earring7}
                title="Starlight Harmony Gold Earrings"
                newprice="7000"
                oldprice="10000"
                discount="30%"
                onAddToCart={addToCart}
                />
                <Card
                image={Earring8}
                title="Triple Petal Gold Earrings"
                newprice="15000"
                oldprice="20000"
                discount="25%"
                onAddToCart={addToCart}
                />
            </div>
 
        </div>

    </>
  )
}

export default GoldEarrings
