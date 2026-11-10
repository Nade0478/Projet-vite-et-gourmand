import { Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

import Profile from "../pages/client/Profile";
import Avis from "../pages/client/Avis";
import Commandes from "../pages/client/Commandes";

const ClientRoutes = (
  <>
    <Route
      path="/client/profile"
      element={
        <ProtectedRoutes role="client">
          <Profile />
        </ProtectedRoutes>
      }
    />

    <Route
      path="/client/avis"
      element={
        <ProtectedRoutes role="client">
          <Avis />
        </ProtectedRoutes>
      }
    />

    <Route
      path="/client/commandes"
      element={
        <ProtectedRoutes role="client">
          <Commandes />
        </ProtectedRoutes>
      }
    />

    <Route
      path="/client/commande/create"
      element={
        <ProtectedRoutes role="client">
          <Commandes />
        </ProtectedRoutes>
      }
    />
  </>
);

export default ClientRoutes;
