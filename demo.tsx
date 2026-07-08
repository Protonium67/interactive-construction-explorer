import { createRoot } from "react-dom/client";
import { ConstructionExplorer, type ConstructionActivity } from "./ConstructionExplorer";
import "./construction-explorer.css";

const activities: ConstructionActivity[] = [
  { id: "terrassement", zone: "earthwork", title: "Terrassement", description: "Préparer les volumes et les niveaux du terrain avant la construction.", services: ["Décaissement", "Fouilles", "Plateformes"], href: "#terrassement" },
  { id: "vrd", zone: "connections", title: "VRD", description: "Organiser les accès et les raccordements nécessaires au fonctionnement du site.", services: ["Tranchées techniques", "Regards", "Raccordements"], href: "#vrd" },
  { id: "assainissement", zone: "drainage", title: "Assainissement", description: "Collecter et acheminer les eaux usées et les eaux pluviales.", services: ["Évacuations", "Caniveaux", "Drainage"], href: "#assainissement" },
  { id: "voirie", zone: "road", title: "Voirie", description: "Créer des surfaces adaptées aux déplacements et au stationnement.", services: ["Accès véhicules", "Parkings", "Bordures"], href: "#voirie" },
  { id: "reseaux", zone: "utilities", title: "Réseaux secs et humides", description: "Acheminer l’électricité, les télécommunications et l’eau jusqu’au bâtiment.", services: ["Fourreaux", "Télécom", "Eau potable"], href: "#reseaux" },
  { id: "amenagements", zone: "landscaping", title: "Aménagements extérieurs", description: "Mettre en forme les espaces autour du bâtiment et réaliser les finitions.", services: ["Cours", "Cheminements", "Abords"], href: "#amenagements" }
];

function Demo() {
  return <>
    <header style={{ color: "#cbd6de", padding: "1.5rem", fontFamily: "system-ui", borderBottom: "1px solid #344752" }}>Interactive Construction Explorer · démonstration générique</header>
    <ConstructionExplorer activities={activities} />
    <section aria-label="Exemples de destinations" style={{ color: "#cbd6de", fontFamily: "system-ui", padding: "2rem", maxWidth: "1280px", margin: "auto" }}>
      <h2>Pages de démonstration</h2>
      <p>Ces destinations illustrent les liens vers les prestations. Remplacez-les par les pages de votre site.</p>
      {activities.map(activity => <article id={activity.id} key={activity.id} style={{ paddingBlock: "1rem", borderTop: "1px solid #344752", scrollMarginTop: "1rem" }}><h3>{activity.title}</h3><p>{activity.description}</p></article>)}
    </section>
  </>;
}

createRoot(document.getElementById("root")!).render(<Demo />);
