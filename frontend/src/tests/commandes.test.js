import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Commandes from "../pages/Auth/client/Commandes";

// ─────────────────────────────────────────────
// 3. TESTS DES COMMANDES
// ─────────────────────────────────────────────
describe("Commandes", () => {
  // ── Affichage page création ──
  test("Création – la page de création de commande s'affiche", () => {
    render(
      <MemoryRouter>
        <Commandes />
      </MemoryRouter>
    );

    expect(screen.getByText(/créer une commande/i)).toBeInTheDocument();
  });

  // ── Affichage historique ──
  test("Historique – la page des commandes client s'affiche", () => {
    render(
      <MemoryRouter>
        <Commandes />
      </MemoryRouter>
    );

    expect(screen.getByText(/commandes client/i)).toBeInTheDocument();
  });
});
