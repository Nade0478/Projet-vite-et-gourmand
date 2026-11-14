import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Home from "../pages/public/Home";
import Menus from "../pages/public/Menu";
import Contact from "../pages/public/Contact";
import MenuDetails from "../pages/public/MenuDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Apropos from "../pages/public/Apropos";
import MentionsLegales from "../pages/public/MentionsLegales";
import Conditions from "../pages/public/Conditions";
import Profile from "../pages/Auth/client/Profile";
import Commandes from "../pages/Auth/client/Commandes";
import Avis from "../pages/Auth/client/Avis";
import DashboardSalarie from "../pages/salarie/DashboardSalarie";
import CommandeSalarie from "../pages/salarie/Commandes";
import AvisSalarie from "../pages/salarie/Avis";
import HorairesSalarie from "../pages/salarie/Horaires";
import AllergenesSalarie from "../pages/salarie/Allergenes";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import MenusAdmin from "../pages/admin/Menus";
import PlatsAdmin from "../pages/admin/Plats";
import RegimesAdmin from "../pages/admin/Regimes";
import AllergenesAdmin from "../pages/admin/Allergenes";
import UsersAdmin from "../pages/admin/Users";
import ThemesAdmin from "../pages/admin/Themes";
import SettingsAdmin from "../pages/admin/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/menus/:id" element={<MenuDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route path="/conditions" element={<Conditions />} />

        {/* Profil : accessible aux trois rôles */}
        <Route
          element={
            <ProtectedRoute
              allowedRoles={["client", "salarie", "administrateur"]}
            />
          }
        >
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Espace client */}
        <Route element={<ProtectedRoute allowedRoles={["client"]} />}>
          <Route path="/commandes" element={<Commandes />} />
          <Route path="/commandes/nouvelle" element={<Commandes />} />
          <Route path="/avis" element={<Avis />} />
        </Route>

        {/* Espace salarié (le salarié et l'administrateur) */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["salarie", "administrateur"]} />
          }
        >
          <Route path="/salarie" element={<DashboardSalarie />} />
          <Route path="/salarie/commandes" element={<CommandeSalarie />} />
          <Route path="/salarie/avis" element={<AvisSalarie />} />
          <Route path="/salarie/horaires" element={<HorairesSalarie />} />
          <Route path="/salarie/menus" element={<MenusAdmin />} />
          <Route path="/salarie/plats" element={<PlatsAdmin />} />
          <Route path="/salarie/allergenes" element={<AllergenesSalarie />} />
        </Route>

        {/* Espace administrateur */}
        <Route element={<ProtectedRoute allowedRoles={["administrateur"]} />}>
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/menus" element={<MenusAdmin />} />
          <Route path="/admin/plats" element={<PlatsAdmin />} />
          <Route path="/admin/regimes" element={<RegimesAdmin />} />
          <Route path="/admin/allergenes" element={<AllergenesAdmin />} />
          <Route path="/admin/users" element={<UsersAdmin />} />
          <Route path="/admin/themes" element={<ThemesAdmin />} />
          <Route path="/admin/settings" element={<SettingsAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
