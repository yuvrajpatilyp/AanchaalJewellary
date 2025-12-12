import React from "react";
// import NavigationBar from "./Reusable/NavigationBar";
import CategoryBar from "./Reusable/CategoryBar";
import Login from "./Login/Login";
// import Footer from "./Reusable/Footer";
import { Route, Routes } from "react-router-dom";
import Forgotpassword from "./Login/Forgotpassword";
import Verifyotp from "./Login/Verifyotp";
import Resetpassword from "./Login/Resetpassword";

function App() {
  return (
    <div>
      {/* <NavigationBar /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/verify-otp" element={<Verifyotp />} />
        <Route path="/reset-password" element={<Resetpassword />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
