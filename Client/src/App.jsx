import React from "react";
import NavigationBar from "./Reusable/NavigationBar"
import MyAccount from "./components/MyAccount";
import Footer from "./Reusable/Footer";
import CategoryBar from "./Reusable/CategoryBar";
import SortDropDown from "./Reusable/SortDropDown";

function App() {
return (
<div>
  <NavigationBar />
  <CategoryBar />
  <SortDropDown />
  <MyAccount />
  <Footer />
</div>
);
}
export default App;
