import React, { useState } from 'react'
import Card from '../Reusable/Card';
import HaldiSet1 from "../assets/Haldi/shell jewellery set.jpg"
import Hoverimg1 from "../assets/Haldi/Hoverimg1.jpg"
import HaldiSet2 from "../assets/Haldi/Haldi pink and yellow jewellery set.jpg"
import Hoverimg2 from "../assets/Haldi/Hoverimg2.jpg"
import HaldiSet3 from "../assets/Haldi/Haldi jewellery  set.jpg"
import Hoverimg3 from "../assets/Haldi/Hoverimg3.jpg"
import HaldiSet4 from "../assets/Haldi/Hathphool flower jewellery.jpg"
import HaldiSet5 from "../assets/Haldi/Jewellery for Haldi Mehndi.jpg"
import HaldiSet6 from "../assets/Haldi/Pearl haldi & mehndi set.jpg"
import HaldiSet7 from "../assets/Haldi/Pink flower jewellery set.jpg"
import HaldiSet8 from "../assets/Haldi/Stunning yellow jewellery set.jpg"

function Haldicollection() {
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
                     image={HaldiSet1}
                       hoverImage={Hoverimg1}
                      title="shell jewellery set" 
                      newprice="8000" 
                      oldprice="10000"                       
                      onAddToCart={addToCart}
                       />

                    <Card 
                    image={HaldiSet2} 
                    hoverImage={Hoverimg2}
                    title="Haldi pink,yellow jewellery set" 
                    newprice="1,250" 
                    oldprice="1,600"                  
                    onAddToCart={addToCart}
                     />

                    <Card 
                    image={HaldiSet3} 
                    hoverImage={Hoverimg3}
                    title="Dazzling Floral Silver Necklace" 
                    newprice="2,400" 
                    oldprice="3,000"                    
                    onAddToCart={addToCart} 
                    />

                    <Card 
                    image={HaldiSet4} 
                    title="Hathphool flower jewellery"
                     newprice="900" 
                     oldprice="1,100"                  
                     onAddToCart={addToCart} 
                     />

                    <Card 
                    image={HaldiSet5} 
                    title="Jewellery for Haldi Mehndi" 
                    newprice="1,600" 
                    oldprice="2,000"                      
                    onAddToCart={addToCart} 
                    />

                    <Card 
                    image={HaldiSet6} 
                    title="Pearl haldi & mehndi set" 
                    newprice="2,800" 
                    oldprice="3,500"                      
                    onAddToCart={addToCart} 
                    />

                    <Card 
                    image={HaldiSet7} 
                  
                    title="Pink flower jewellery set" 
                    newprice="3,200" 
                    oldprice="4,000"                   
                    onAddToCart={addToCart} 
                    />

                    <Card 
                    image={HaldiSet8} 
                    title="Stunning yellow jewellery set" 
                    newprice="1,050" 
                    oldprice="1,400"                  
                    onAddToCart={addToCart} 
                    />
                </div>

            </div>
    </>
  )
}

export default Haldicollection
