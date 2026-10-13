import Menus1 from "../../assets/images/Menus1.png";
import Menus2 from "../../assets/images/Menus2.png";
import Menus3 from "../../assets/images/Menus3.png";
import Menus4 from "../../assets/images/Menus4.png";
import Menus5 from "../../assets/images/Menus5.png";
import Menus6 from "../../assets/images/Menus6.png";
import Menus7 from "../../assets/images/Menus7.png";

const images = [Menus1, Menus2, Menus3, Menus4, Menus5, Menus6, Menus7];

export default function CardMenu({ menu, onEdit, onDelete }) {
  // Utilise l'image de l'API si elle existe, sinon une image locale selon l'id
  const image = menu.image || images[(menu.id - 1) % images.length];

  return (
    <div className="card shadow-sm mb-4">
      <img
        src={image}
        alt={menu.nom}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h3 className="card-title">{menu.nom}</h3>
        <p className="card-text text-muted">{menu.description}</p>
        <p className="fw-bold fs-5">{menu.prix} €</p>

        {menu.regime && (
          <span className="badge bg-success mb-2">
            Régime : {menu.regime.nom}
          </span>
        )}

        {onEdit && onDelete && (
          <div className="d-flex justify-content-between mt-3">
            <button onClick={() => onEdit(menu)} className="btn btn-primary">
              Modifier
            </button>

            <button
              onClick={() => onDelete(menu.id)}
              className="btn btn-danger"
            >
              Supprimer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
