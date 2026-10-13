import React from "react";
import "./Form.css";
import "./MenuFilters.css";

export default function MenuFilters({ onFilter }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFilter) {
      const data = Object.fromEntries(new FormData(e.target));
      onFilter(data);
    }
  };

  return (
    <form className="menu-filters" onSubmit={handleSubmit}>
      <h3 className="menu-filters__title">Filtres</h3>

      <label>Prix maximum</label>
      <input type="number" name="prix" />

      <label>Thème</label>
      <select name="theme">
        <option value="">Tous</option>
      </select>

      <label>Régime</label>
      <select name="regime">
        <option value="">Tous</option>
      </select>

      <label>Nombre minimum</label>
      <input type="number" name="min" />

      <button type="submit">Valider</button>
    </form>
  );
}
