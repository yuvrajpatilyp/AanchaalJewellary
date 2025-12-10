<<<<<<< HEAD
// import { Contact } from "lucide-react";
import About from "./about/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./contact/Contact";


function App() {
  return (
    <div className="w-full overflow-x-hidden">
      
      <Routes>
        <Route path="/" element={<About />} />
       <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    );
}
 
export default App
=======
import React from "react";
import MyAccount from "./components/MyAccount";

function App() {
return (
<div>
  <MyAccount />
</div>
);
}
export default App;
>>>>>>> ae0b4b3d5b99a23cb0e1e6b3511b98e283471b28
