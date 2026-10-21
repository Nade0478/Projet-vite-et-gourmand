import React from "react";

export default function MenuFilters({ menus, filters, setFilters, onSubmit }) {
  const themes = [
    ...new Map(
      menus.filter((m) => m.theme).map((m) => [m.theme.id, m.theme])
    ).values(),
  ];
  const regimes = [
    ...new Map(
      menus.filter((m) => m.regime).map((m) => [m.regime.id, m.regime])
    ).values(),
  ];

  const change = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <form
      className="menu-filters p-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2 className="menu-filters-title">Filtres</h2>

      <label htmlFor="prixMax">Prix maximum</label>
      <input
        id="prixMax"
        name="prixMax"
        type="number"
        min="0"
        className="form-control mb-3"
        value={filters.prixMax}
        onChange={change}
      />

      <label htmlFor="theme">Thème</label>
      <select
        id="theme"
        name="theme"
        className="form-select mb-3"
        value={filters.theme}
        onChange={change}
      >
        <option value="">Tous</option>
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.nom}
          </option>
        ))}
      </select>

      <label htmlFor="regime">Régime</label>
      <select
        id="regime"
        name="regime"
        className="form-select mb-3"
        value={filters.regime}
        onChange={change}
      >
        <option value="">Tous</option>
        {regimes.map((r) => (
          <option key={r.id} value={r.id}>
            {r.nom}
          </option>
        ))}
      </select>

      <label htmlFor="nbMin">Nombre minimum</label>
      <input
        id="nbMin"
        name="nbMin"
        type="number"
        min="1"
        className="form-control mb-4"
        value={filters.nbMin}
        onChange={change}
      />

      <button type="submit" className="btn-orange w-100">
        Valider
      </button>
    </form>
  );
}
