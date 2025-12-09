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