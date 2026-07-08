"use client";

import { useId, useState } from "react";
function ArrowRight({ size = 18 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>; }

export type ConstructionZone = "earthwork" | "connections" | "drainage" | "road" | "utilities" | "landscaping";
export type ConstructionActivity = {
  id: string;
  zone: ConstructionZone;
  title: string;
  description: string;
  services: string[];
  href: string;
  photo?: { src: string; alt: string; caption: string; href?: string };
};
export type ConstructionExplorerProps = {
  activities: ConstructionActivity[];
  heading?: string;
  introduction?: string;
  allActivitiesHref?: string;
};
const zones: ConstructionZone[] = ["earthwork", "connections", "drainage", "road", "utilities", "landscaping"];
const captions = ["Préparer le terrain", "Relier le chantier", "Évacuer les eaux", "Créer les accès", "Acheminer les réseaux", "Aménager les abords"];

export function ConstructionExplorer({ activities, heading = "Votre chantier, métier par métier.", introduction = "Sélectionnez une activité pour découvrir ce qui se passe sur le terrain, et sous vos pieds.", allActivitiesHref }: ConstructionExplorerProps) {
  const instanceId = useId().replace(/:/g, "");
  const titleId = instanceId + "-title";
  const detailId = instanceId + "-detail";
  const earthId = instanceId + "-earth";
  const pavingId = instanceId + "-paving";
  const [selected, setSelected] = useState(0);
  const activity = activities[selected] ?? activities[0];
  if (!activity) return null;
  const activeZone = zones.indexOf(activity.zone);
  const lit = (index: number) => activeZone === index || (activeZone === 1 && [3, 4].includes(index)) ? "is-lit" : "";

  return (
    <section className="trial-activities" aria-labelledby={titleId}>
      <div className="trial-container">
        <div className="trial-section-heading">
          <p className="trial-eyebrow">Nos activités</p>
          <h2 id={titleId}>{heading}</h2>
          <p>{introduction}</p>
        </div>
        <div className="trial-explorer">
          <div className="trial-activity-menu" role="group" aria-label="Choisir une activité">
            {activities.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === index} aria-controls={detailId} onClick={() => setSelected(index)}>
              <span className="trial-menu-index">{String(index + 1).padStart(2, "0")}</span><span>{item.title}</span><ArrowRight size={17} aria-hidden="true" />
            </button>)}
            {allActivitiesHref ? <a className="trial-all-activities" href={allActivitiesHref}>Toutes nos prestations <ArrowRight size={16} /></a> : null}
          </div>
          <div className="trial-visual-column">
            <div className="trial-diagram">
              <div className="trial-diagram-caption"><span>Un chantier en coupe</span><span>Illustration de principe</span></div>
              <div className="trial-diagram-drawing">
              <svg viewBox="0 0 800 480" aria-hidden="true" focusable="false">
                <defs>
                  <pattern id={earthId} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M4 6h3M15 17h2" stroke="#8d7460" strokeWidth="2" opacity=".4" /></pattern>
                  <pattern id={pavingId} width="24" height="16" patternUnits="userSpaceOnUse"><path d="M0 0h24v16H0ZM12 0v16" fill="none" stroke="#67807b" strokeWidth=".6" /></pattern>
                </defs>
                <path d="M65 293 425 144 745 265 385 427Z" fill="#1d2c36" />
                <g className={`trial-earth-layer ${lit(0)}`}>
                  <path d="m65 247 360-149 320 121v73L385 441 65 320Z" fill="#715d4d" />
                  <path d="m65 247 320 122v72L65 320Z" fill="#4f4238" />
                  <path d="m65 247 320 122v72L65 320Z" fill={`url(#${earthId})`} />
                  <path d="m385 369 360-150v73L385 441Z" fill="#61513f" />
                  <path d="m385 369 360-150v73L385 441Z" fill={`url(#${earthId})`} />
                </g>
                <g className={`trial-ground-layer ${lit(0)}`}><path d="m65 247 360-149 320 121-360 150Z" fill="#71826b" /><path d="m80 243 98-40 133 50-98 41Z" fill="#a28d71" /><path d="m101 243 64-26 90 34-64 27Z" fill="#69513d" /></g>
                <g className={`trial-garden-layer ${lit(5)}`}><path d="m213 215 212-88 120 46-213 89Z" fill="#819490" /><path d="m213 215 212-88 120 46-213 89Z" fill={`url(#${pavingId})`} /><path d="m121 211 44-18 30 11-44 19Z" fill="#ac9c80" /><path d="m121 211v16l30 12v-16" fill="#716d58" /><path d="m143 205v-42" stroke="#617456" strokeWidth="7" /><ellipse cx="143" cy="153" rx="28" ry="23" fill="#47664f" /><path d="M605 202v-46" stroke="#617456" strokeWidth="7" /><ellipse cx="605" cy="142" rx="26" ry="28" fill="#47664f" /></g>
                <g className={`trial-road-layer ${lit(3)}`}><path d="m330 302 237-98 140 53-237 99Z" fill="#404b55" /><path d="m330 302 140 54v10l-140-53Z" fill="#9ba4a6" /><path d="m470 356 237-99v10l-237 99Z" fill="#adb7b9" /><path d="m458 320 129-54" stroke="#f1e8c9" strokeWidth="3" strokeDasharray="16 13" /></g>
                <g strokeLinejoin="round"><path d="m294 196 130-54 111 42v-94l-111-42-130 54Z" fill="#c4c9c5" /><path d="m294 102 130 50v98l-130-50Z" fill="#a9b5b6" /><path d="m424 152 111-46v94l-111 50Z" fill="#d4d8d0" /><path d="m274 100 146-61 135 51-131 62Z" fill="#223543" /><path d="m324 142 36 14v48l-36-14Z" fill="#314c5c" /><path d="m382 167 24 9v62l-24-9Z" fill="#294858" /><path d="m448 164 25-10v32l-25 10Z" fill="#526e79" /><path d="m491 147 25-10v32l-25 10Z" fill="#526e79" /></g>
                <g className={`trial-water-layer ${lit(2)}`} fill="none" stroke="#76a5b7" strokeWidth="9" strokeLinejoin="round"><path d="M452 240v43l108 42-91 38v48" /><path d="m507 318 42-18" /><ellipse cx="560" cy="325" rx="18" ry="9" fill="#223543" strokeWidth="4" /><path d="M560 325v31" strokeWidth="5" /></g>
                <g className={`trial-network-layer ${lit(4)}`} fill="none" strokeWidth="6" strokeLinejoin="round"><path d="M371 243v45l-120 49v41" stroke="#dba466" /><path d="M389 249v48l-117 48v40" stroke="#8da8d2" /><path d="M402 256v51l-107 44v43" stroke="#899baf" /></g>
                <path d="m65 320 320 121 360-149" fill="none" stroke="#a9b9c3" strokeOpacity=".25" />
              </svg>
              {activities.map((item, index) => <button key={item.id} className={`trial-hotspot trial-hotspot-${zones.indexOf(item.zone)} ${selected === index ? "is-selected" : ""}`} type="button" aria-label={`Explorer : ${item.title}`} aria-pressed={selected === index} aria-controls={detailId} onClick={() => setSelected(index)}>{index + 1}</button>)}
              </div>
              <p className="trial-diagram-hint">Touchez un repère ou choisissez un métier dans la liste.</p>
            </div>
            <article id={detailId} className="trial-activity-detail" aria-live="polite" aria-atomic="true">
              {activity.photo ? <div className="trial-detail-photo"><img src={activity.photo.src} alt={activity.photo.alt} loading="lazy" /><span>{activity.photo.href ? <a href={activity.photo.href}>{activity.photo.caption}</a> : activity.photo.caption}</span></div> : null}
              <div className="trial-detail-copy"><p className="trial-detail-kicker">{captions[activeZone]}</p><h3>{activity.title}</h3><p>{activity.description}</p><ul>{activity.services.slice(0, 3).map(service => <li key={service}>{service}</li>)}</ul><a href={activity.href}>Découvrir cette prestation <ArrowRight size={18} /></a></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
