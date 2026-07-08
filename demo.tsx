import { createRoot } from "react-dom/client";
import { ConstructionExplorer, type ConstructionActivity } from "./ConstructionExplorer";
import "./construction-explorer.css";

const activities: ConstructionActivity[] = [
  { id: "earthwork", zone: "earthwork", title: "Earthwork", description: "Establish ground levels and prepare the site for construction.", services: ["Excavation", "Grading", "Foundation trenches"], href: "#earthwork" },
  { id: "connections", zone: "connections", title: "Site connections", description: "Coordinate the access routes and utility connections serving a building.", services: ["Service trenches", "Access planning", "Utility connections"], href: "#connections" },
  { id: "drainage", zone: "drainage", title: "Drainage", description: "Collect and convey wastewater and surface water through suitable infrastructure.", services: ["Drain pipes", "Inspection chambers", "Surface drainage"], href: "#drainage" },
  { id: "road", zone: "road", title: "Access & paving", description: "Provide stable surfaces for vehicle access, parking and circulation.", services: ["Driveways", "Parking areas", "Kerbs"], href: "#road" },
  { id: "utilities", zone: "utilities", title: "Utilities", description: "Route water, power and communication services beneath the ground.", services: ["Cable ducts", "Water supply", "Telecommunications"], href: "#utilities" },
  { id: "landscaping", zone: "landscaping", title: "Outdoor spaces", description: "Organise the areas around the building and finish the external surfaces.", services: ["Courtyards", "Footpaths", "Boundary treatments"], href: "#landscaping" }
];

function Demo() {
  return <main style={{ maxWidth: "1120px", margin: "auto", padding: "36px 16px 48px", fontFamily: "system-ui,sans-serif", color: "#262626" }}>
    <header style={{ display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center", marginBottom: "24px", fontSize: "12px", color: "#666" }}><span>Component preview</span><span>React / SVG</span></header>
    <ConstructionExplorer activities={activities} />
    <footer style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "18px 4px", fontSize: "12px", color: "#737373" }}><span>Independent reference component</span><span>MIT license</span></footer>
    <details style={{ marginTop: "16px", borderTop: "1px solid #dedede", paddingTop: "16px", fontSize: "13px", color: "#555" }}>
      <summary style={{ cursor: "pointer", minHeight: "44px" }}>Example link destinations</summary>
      <p>These sections are demonstration targets. Replace their URLs when integrating the component.</p>
      {activities.map(activity => <article id={activity.id} key={activity.id} style={{ paddingBlock: "12px", borderTop: "1px solid #e3e3e3", scrollMarginTop: "16px" }}><h3>{activity.title}</h3><p>{activity.description}</p></article>)}
    </details>
  </main>;
}

createRoot(document.getElementById("root")!).render(<Demo />);
