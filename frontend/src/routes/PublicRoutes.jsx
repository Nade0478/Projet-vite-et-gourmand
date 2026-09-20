import { Route } from "react-router-dom";

import Home from "../pages/public/Home";
import Menus from "../pages/public/Menus";
import MenuDetails from "../pages/public/MenuDetails";
import Contact from "../pages/public/Contact";
import Auth from "../pages/public/Auth";
import Apropos from "../pages/Apropos";

const PublicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="/menus" element={<Menus />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="/menus/:id" element={<MenuDetails />} />
    <Route path="/contact" element={<Contact />} />
  </>
);

export default PublicRoutes;
