// components/PresentationEntreprise.jsx
export default function PresentationEntreprise() {
  return (
    <section className="presentation-entreprise">
      <h2>Qui sommes-nous ?</h2>

      <p>
        Depuis plus de <strong>25 ans</strong>, Vite & Gourmand accompagne les
        habitants de Bordeaux dans leurs événements : repas familiaux, fêtes de
        Noël, Pâques, anniversaires et bien plus.
      </p>

      <p>
        Nous sommes spécialisés dans les{" "}
        <strong>prestations culinaires sur mesure</strong>, avec des menus
        évolutifs selon les saisons et les fêtes.
      </p>

      <div className="presentation-images">
        <img
          src="/images/entreprise.jpg"
          alt="Cuisine et ambiance culinaire de Vite & Gourmand"
        />
      </div>
    </section>
  );
}
