import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF ,FaShareNodes} from "react-icons/fa6";
import { Link } from "react-router-dom";  
 
function Footer() {
  return (
    <footer className="bg-gray-200 text-black pt-14 pb-6">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-20 ">
           

          <div>
            <img src="src/assets/DesignLogo.png" className="shadow-gray-300 w-40 h-40 rounded-full -ml-6" />
          </div>
 
        <div>
          <h2 className="font-serif text-2xl mb-3 ">Support</h2>
          <p className="text-black text-sm leading-6">
            Bengaluru,Karnataka<br /> India.
          </p>
          <p className="text-black text-sm mt-2 break-all">****************@gmail.com</p>
          <p className="text-black text-sm mt-2">+919999999999</p>
        </div>
 
        <div>
          <h2 className="font-serif text-2xl mb-3">Account</h2>
          <ul className="text-black text-sm space-y-3">
            <li><Link to="/myAccount">My Account</Link></li>
            <li>
              <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
            </li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>
 
        <div>
           <h2 className="font-serif  mb-3 text-2xl">Quick Link</h2>
            <ul className="text-black text-sm space-y-3">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms Of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
           </div>
 
       
        <div>
          <h1 className="font-serif text-black text-2xl ">Follow Us</h1>
           <div className="flex  gap-6 text-xl mt-4 ">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
              <FaFacebookF />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors duration-300">
                        <FaTwitter />
                      </a>
                      <a href="https://instagram.com"target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
                        <FaInstagram />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
                        <FaLinkedinIn />
                      </a>
                    </div>
        </div>
      </div>
 
      <div className=" font-serif text-center text-gray-700 text-sm mt-12 pt-4">
        © Copyright Aanchal 2025. All right reserved
      </div>
    </footer>
  );
}
 
export default Footer;