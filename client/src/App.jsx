import React, {useEffect} from "react";

//componenents
import HeaderNav from './components/navigation/HeaderNav/HeaderNav';
import FooterNav from "./components/navigation/FooterNav/FooterNav";
import Home from "./components/pages/Home/Home";
import DashBoard from "./components/pages/Dashboard/Dashboard"
import Product from "./components/pages/Products/Products"

//React-Router
import { Routes, Route} from "react-router-dom"




function App() {
  return (
    <>
    {/* '/(Control-Panel|index.html)/' */}
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Product/>}/>
        <Route path="/Dashboard" element={<DashBoard/>}/>
      </Routes>
      <FooterNav/>
    </>
  );
}

export default App;