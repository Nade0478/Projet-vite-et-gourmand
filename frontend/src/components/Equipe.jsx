// components/Equipe.jsx
export default function Equipe() {
  return (
    <section className="equipe">
      <h2>L’équipe Vite & Gourmand</h2>

      <div className="equipe-container">
        <div className="membre">
          <img src="/images/julie.jpg" alt="Julie - gestion et logistique" />
          <h3>Julie</h3>
          <p>Gestion, logistique, relation client</p>
        </div>

        <div className="membre">
          <img src="/images/jose.jpg" alt="José - chef cuisinier" />
          <h3>José</h3>
          <p>Cuisine, création des menus</p>
        </div>
      </div>

      <div className="valeurs">
        <h3>Nos valeurs</h3>
        <ul>
          <li>Qualité</li>
          <li>Réactivité</li>
          <li>Tradition culinaire</li>
        </ul>
      </div>
    </section>
  );
}
