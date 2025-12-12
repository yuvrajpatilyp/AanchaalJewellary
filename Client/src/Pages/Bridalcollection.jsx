import React, { useState } from 'react'
import Bridalimg1 from "../assets/Bridal/Bridal jewellery set.jpg"
import Bridalimg2 from "../assets/Bridal/Golden bridal jewellery set.jpg"
import Bridalimg3 from "../assets/Bridal/Kundan bridal necklace.jpg"
import Bridalimg4 from "../assets/Bridal/Kundan semi bridal set.jpg"
import Card from '../Reusable/Card'

function Bridalcollection() {

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
                //  hoverImage={hoverimg1}
                  title="Bridal jewellery set" 
                  newprice="75000" 
                  oldprice="100000"                
                  Bestseller="Bestseller"
                  onAddToCart={addToCart}
                   />

                <Card 
                image={Bridalimg2} 
                // hoverImage={hoverimg2}
                title="Golden bridal jewellery" 
                newprice="120000" 
                oldprice="150000"                
                onAddToCart={addToCart}
                 />

                <Card 
                image={Bridalimg3} 
                // hoverImage={hoverimg3}
                title="kundan bridal necklace" 
                newprice="11650" 
                oldprice="10800"                 
                onAddToCart={addToCart} 
                />

                <Card 
                image={Bridalimg4} 
                // hoverImage={hoverimg4}
                title="Kundan semi bridal set"
                 newprice="85000" 
                 oldprice="65000"                 
                 onAddToCart={addToCart} 
                 />

               
            </div>

        </div>

    </>
  )
}

export default Bridalcollection
