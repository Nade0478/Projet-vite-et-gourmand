import { Link } from "react-router-dom";

export default function CardMenu({ menu, onEdit, onDelete }) {
  return (
    <div className="menu-card">
      <h2 className="menu-card-theme">{menu.theme?.nom}</h2>

      <div className="menu-card-title">{menu.titre}</div>

      <div className="menu-card-body">
        <p className="mb-1">{menu.description}</p>
        <p className="mb-1">À partir de {menu.nombre_personne_min} personnes</p>
        <p className="mb-0 fw-bold">{menu.prix_par_personne}€ / pers.</p>
        {menu.regime && (
          <span className="badge bg-success mt-2">
            Régime : {menu.regime.nom}
          </span>
        )}
      </div>

      <Link to={`/menus/${menu.id}`} className="btn-orange">
        Voir le détail
      </Link>

      {onEdit && onDelete && (
        <div className="d-flex justify-content-between mt-3">
          <button onClick={() => onEdit(menu)} className="btn btn-primary">
            Modifier
          </button>
          <button onClick={() => onDelete(menu.id)} className="btn btn-danger">
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
}
