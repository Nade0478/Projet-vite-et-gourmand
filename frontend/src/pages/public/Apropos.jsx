// pages/Apropos.jsx
import PresentationEntreprise from "../components/PresentationEntreprise";
import Equipe from "../components/Equipe";
import Engagements from "../components/Engagements";
import AvisClients from "../components/AvisClients";
import PourquoiApplication from "../components/PourquoiApplication";
import MentionsEtCGV from "../components/MentionsEtCGV";

export default function Apropos() {
  const avis = [
    { id: 1, note: 5, commentaire: "Excellent service !", date: "12/09/2026" },
    { id: 2, note: 4, commentaire: "Menus délicieux.", date: "10/09/2026" },
  ];

  return (
    <main className="page-apropos">
      <PresentationEntreprise />
      <Equipe />
      <Engagements />
      <AvisClients avis={avis} />
      <PourquoiApplication />
      <MentionsEtCGV />
    </main>
  );
}
