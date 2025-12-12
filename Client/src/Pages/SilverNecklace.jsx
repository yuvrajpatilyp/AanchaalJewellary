import React, { useState } from 'react'
import Card from '../Reusable/Card'
import Neckles1 from '../assets/Silver/SilverNeckles/Charming Red stone Silver Necklace Set.jpg'
import Neckles2 from '../assets/Silver/SilverNeckles/Chic Hanging Bead Floral Silver Necklace Set.jpg'
import Neckles3 from '../assets/Silver/SilverNeckles/Dazzling Floral Silver Necklace.jpg'
import Neckles4 from '../assets/Silver/SilverNeckles/Elegant Pastel Pink Beaded Silver Necklace Set.jpg'
import Neckles5 from '../assets/Silver/SilverNeckles/Graceful Nature-Inspired Silver Necklace Set.jpg'
import Neckles6 from '../assets/Silver/SilverNeckles/Graceful Silver Serpent Wrapped Heart Necklace.jpg'
import Neckles7 from '../assets/Silver/SilverNeckles/Grandeur Pearl Drop Silver Necklace.jpg'
import Neckles8 from '../assets/Silver/SilverNeckles/Ornate Green Stone Drops Silver Necklace Set.jpg'
import hoverimg6 from "../assets/Silver/SilverNeckles/hoverimg6.jpg"
import hoverimg7 from '../assets/Silver/SilverNeckles/hoverimg7.jpg'
import hoverimg8 from '../assets/Silver/SilverNeckles/hoverimg8.jpg'

function SilverNecklace() {
    const [cart, setCart] = useState([]);

        const addToCart = (product) => {
            setCart((prev) => [...prev, product]);
            console.log("Added to cart:", product); 
        };

  return (
    <div className="container mx-auto px-4 py-8">

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Card
                     image={Neckles1}
                      title="Charming Red stone Silver Necklace Sett" 
                      newprice="1,800" 
                      oldprice="2,200"                       
                      onAddToCart={addToCart}
                       />

                    <Card 
                    image={Neckles2} 
                    title="Chic Hanging Bead Floral Silver Necklace Set" 
                    newprice="1,250" 
                    oldprice="1,600"                  
                    onAddToCart={addToCart}
                     />

                    <Card 
                    image={Neckles3} 
                    title="Dazzling Floral Silver Necklace" 
                    newprice="2,400" 
                    oldprice="3,000"                    
                    onAddToCart={addToCart} 
                    />

                    <Card 
                    image={Neckles4} 
                    title="Elegant Pastel Pink Beaded Silver Necklace Set"
                     newprice="900" 
                     oldprice="1,100"                  
                     onAddToCart={addToCart} 
                     />

                    <Card 
                    image={Neckles5} 
                    title="Graceful Nature-Inspired Silver Necklace Set" 
                    newprice="1,600" 
                    oldprice="2,000"                      
                    onAddToCart={addToCart} 
                    />

                    <Card 
                    image={Neckles6} 
                    hoverImage={hoverimg6}
                    title="Graceful Silver Serpent Wrapped Heart Necklace" 
                    newprice="2,800" 
                    oldprice="3,500"                      
                    onAddToCart={addToCart} 
                    />

                    <Card 
                    image={Neckles7} 
                    hoverImage={hoverimg7}
                    title="Grandeur Pearl Drop Silver Necklace " 
                    newprice="3,200" 
                    oldprice="4,000"                   
                    onAddToCart={addToCart} 
                    />

                    <Card 
                    image={Neckles8} 
                    hoverImage={hoverimg8}
                    title="Ornate Green Stone Drops Silver Necklace Set" 
                    newprice="1,050" 
                    oldprice="1,400"                  
                    onAddToCart={addToCart} 
                    />
                </div>

            </div>
  )
}

export default SilverNecklace