import React, { useState } from 'react'
import Card from '../Reusable/Card';
import Bridalimg1 from "../assets/Sangeet/pearl jewellery set.jpg"
import Bridalimg2 from "../assets/Sangeet/Diamond Bead Choker.jpg"
import Bridalimg3 from "../assets/Sangeet/Nevaeh Tops Polki Set.jpg"
import Bridalimg4 from "../assets/Sangeet/Laiba Polki Bead Choker.jpg"
import hoverimg1 from "../assets/Sangeet/Hoverimg1.jpg"
import hoverimg2 from "../assets/Sangeet/Hoverimg2.jpg"
import hoverimg3 from "../assets/Sangeet/Hoverimg3.jpg"
import hoverimg4 from "../assets/Sangeet/Hoverimg4.jpg"

function Sangeetcollection() {
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
                 image={Bridalimg1}
                 hoverImage={hoverimg1}
                  title="pearl jewellery set" 
                  newprice="75000" 
                  oldprice="100000"                
                  Bestseller="Bestseller"
                  onAddToCart={addToCart}
                   />

                <Card 
                image={Bridalimg2} 
                hoverImage={hoverimg2}
                title="Diamond Bead Choker" 
                newprice="120000" 
                oldprice="150000"                
                onAddToCart={addToCart}
                 />

                <Card 
                image={Bridalimg3} 
                hoverImage={hoverimg3}
                title="Nevaeh Tops Polki Set" 
                newprice="11650" 
                oldprice="10800"                 
                onAddToCart={addToCart} 
                />

                <Card 
                image={Bridalimg4} 
                hoverImage={hoverimg4}
                title="Laiba Polki Bead Choker"
                 newprice="85000" 
                 oldprice="65000"                 
                 onAddToCart={addToCart} 
                 />

               
            </div>

        </div>

    </>
  )
}

export default Sangeetcollection
