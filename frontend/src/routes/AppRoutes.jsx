import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Menus from "../pages/public/Menus";
import Contact from "../pages/public/Contact";
import MenuDetails from "../pages/public/MenuDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Apropos from "../pages/public/Apropos";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menus" element={<Menus />} />
        <Route path="/Menus/:id" element={<MenuDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Apropos" element={<Apropos />} />
      </Routes>
    </BrowserRouter>
  );
}
