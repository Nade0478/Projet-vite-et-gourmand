import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import useAuth from "../../../hooks/useAuth";

// À adapter : ces chemins doivent exister dans ton fichier de routes
const LIENS_SALARIE = [
  { label: "Tableau de bord", path: "/salarie" },
  { label: "Commandes", path: "/salarie/commandes" },
  { label: "Avis", path: "/salarie/avis" },
  { label: "Horaires", path: "/salarie/horaires" },
];

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container my-5">
          <p>Chargement...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="container my-5">
          <p>Vous n'êtes pas connecté.</p>
        </div>
        <Footer />
      </>
    );
  }

  const roleName = user.role?.name;
  const estSalarie = roleName === "salarie" || roleName === "administrateur";

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="fw-bold mb-4">Mon profil</h1>

        <div className="card shadow-sm p-4 mb-4">
          <p className="mb-2">
            <strong>Prénom :</strong> {user.prenom}
          </p>
          <p className="mb-2">
            <strong>Nom :</strong> {user.nom}
          </p>
          <p className="mb-2">
            <strong>Email :</strong> {user.email}
          </p>
          <p className="mb-2">
            <strong>Téléphone :</strong> {user.telephone}
          </p>
          <p className="mb-0">
            <strong>Rôle :</strong> {roleName}
          </p>
        </div>

        {estSalarie && (
          <div className="card shadow-sm p-4 mb-4">
            <h2 className="h5 fw-bold mb-3">Espace salarié</h2>
            <div className="d-flex flex-wrap gap-2">
              {LIENS_SALARIE.map((lien) => (
                <Link
                  key={lien.path}
                  to={lien.path}
                  className="btn btn-outline-dark"
                >
                  {lien.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        <button className="btn btn-dark" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
      <Footer />
    </>
  );
}
