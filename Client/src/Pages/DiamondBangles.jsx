import React, { useState } from 'react'
import Card from '../Reusable/Card';
import Bangle1 from "../assets/Diamond/diamond bangles/Artistic Floral Diamond Cuff Bracelet.jpg"
import Bangle2 from "../assets/Diamond/diamond bangles/Charming Leaf Pattern Diamond Bracelet.jpg"
import Bangle3 from "../assets/Diamond/diamond bangles/Divine Lotus Centerpiece Bangle Bracelet.jpg"
import Bangle4 from "../assets/Diamond/diamond bangles/Gleaming Floral Diamond Bracelets.jpg"
import Bangle5 from "../assets/Diamond/diamond bangles/Lotus & Circle Diamond Bangle.jpg"
import Bangle6 from "../assets/Diamond/diamond bangles/Pristine Butterfly Diamond Cuff Bracelet.jpg"
import Bangle7 from "../assets/Diamond/diamond bangles/Shimmering Fancy Diamond Bracelet.jpg"
import Bangle8 from "../assets/Diamond/diamond bangles/Sparkling Interlock Circle Diamond Bracelet.jpg"


function DiamondBangles() {
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
                  title="Artistic Diamond Cuff Bracelet"
                  newprice="65000"
                  oldprice="90000"
                  discount="27%"
                  onAddToCart={addToCart}
                   />
                <Card
                image={Bangle2}
                title="Leaf Pattern Diamond Bracelet"
                newprice="80000"
                oldprice="100000"
                discount="20%"
                onAddToCart={addToCart}
                 />
                <Card
                image={Bangle3}
                title="Lotus Bangle Bracelet"
                newprice="70000"
                oldprice="100000"
                discount="30%"
                onAddToCart={addToCart}
                />
                <Card
                image={Bangle4}
                title="Gleaming Diamond Bracelets"
                 newprice="125000"
                 oldprice="160000"
                 discount="22%"
                 onAddToCart={addToCart}
                 />
                 <Card
                image={Bangle5}
                title="Lotus & Circle Diamond Bangle"
                newprice="55000"
                oldprice="70000"
                discount="21%"
                onAddToCart={addToCart}
                />
                
                <Card
                image={Bangle6}
                title="Pristine Diamond Bracelet"
                newprice="78000"
                oldprice="100000"
                discount="22%"
                onAddToCart={addToCart}
                />
                <Card
                image={Bangle7}
                title="Shimmering Diamond Bracelet"
                newprice="35000"
                oldprice="45000"
                discount="22%"
                onAddToCart={addToCart}
                />
                <Card
                image={Bangle8}
                title="Sparkling Interlock Bracelet"
                newprice="95000"
                oldprice="130000"
                discount="27%"
                onAddToCart={addToCart} 
                /> 
            </div>
 
        </div>
    </>
  )
}

export default DiamondBangles
