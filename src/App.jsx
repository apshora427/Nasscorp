

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
