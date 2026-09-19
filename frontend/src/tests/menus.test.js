import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MenusPage from "../pages/public/Menus";
import MenuDetail from "../pages/public/MenuDetails";
// import AdminMenuForm from "../pages/admin/Menus";
import CardMenu from "../components/menus/CardMenu";

// Données fictives
const fakeMenus = [
  {
    id: 1,
    nom: "Menu Midi Express",
    description: "Entrée + plat + dessert",
    prix: 12.5,
  },
  {
    id: 2,
    nom: "Menu Cocktail",
    description: "Buffet froid et chaud",
    prix: 25.0,
  },
];

// Helper : mock fetch avec une réponse JSON
function mockFetch(data, ok = true) {
  global.fetch = jest.fn().mockResolvedValue({
    ok,
    json: jest.fn().mockResolvedValue(data),
  });
}

describe("Menus", () => {
  afterEach(() => {
    jest.clearAllMocks();
    global.fetch = undefined;
  });

  test("Affichage – la liste des menus est visible", async () => {
    mockFetch(fakeMenus);

    render(
      <MemoryRouter>
        <MenusPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Menu Midi Express")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Menu Cocktail")).toBeInTheDocument();
    });
  });

  test("Détail – les informations du menu sont affichées", async () => {
    mockFetch(fakeMenus[0]);

    render(
      <MemoryRouter initialEntries={["/menus/1"]}>
        <MenuDetail />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Menu Midi Express")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Entrée + plat + dessert")).toBeInTheDocument();
    });
  });

test("Suppression – un menu est supprimé après clic sur Supprimer", async () => {
  const onDelete = jest.fn();
  const onEdit = jest.fn();

  render(
    <MemoryRouter>
      <CardMenu menu={fakeMenus[0]} onDelete={onDelete} onEdit={onEdit} />
    </MemoryRouter>
  );

  const deleteButton = screen.getByRole("button", { name: /supprimer/i });
  fireEvent.click(deleteButton);

  expect(onDelete).toHaveBeenCalledWith(1);
});
});
