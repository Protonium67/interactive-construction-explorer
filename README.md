# Interactive Construction Explorer

A reusable React component for exploring construction trades through an interactive SVG cutaway: earthwork, site connections, drainage, access and paving, utilities, and outdoor spaces.

Custom-built with AI assistance. The illustration is vector-based: no 3D library, downloaded model, or external service is required.

![Interactive construction explorer preview](preview.jpg)

## Features

- Select a construction layer using explicit controls or numbered points on the illustration.
- Highlight the relevant parts of the site.
- Display a description, three examples, a detail link, and an optional photograph.
- Neutral reference theme: light surfaces, a monochrome illustration, horizontal controls, and a side panel.
- Desktop: controls above the diagram, illustration on the left, details on the right.
- Mobile: two-column controls followed by the illustration and details.
- Native keyboard-operable buttons, `aria-pressed` state, an announced detail panel, and visible focus indicators.
- Support for `prefers-reduced-motion`.
- Instance-specific SVG and ARIA identifiers generated with `useId`.
- No client photographs, company branding, private data, or API keys in this repository.

The illustration is a schematic, not an engineering drawing. The accessibility features described here do not constitute a compliance certification.

## Run the demo

Requirements: Node.js 22.12+ or 24+, and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. The demo links lead to example sections on the same page.

```sh
npm run check
npm run build
```

The build produces a static demo in `dist/`. It does not deploy anything automatically.

## Use in a React project

Copy `ConstructionExplorer.tsx` and `construction-explorer.css` into your project, then import the component and stylesheet. The `demo.tsx` file includes six activities you can customise.

```tsx
import { ConstructionExplorer, type ConstructionActivity } from "./ConstructionExplorer";
import "./construction-explorer.css";

const activities: ConstructionActivity[] = [
  {
    id: "earthwork",
    zone: "earthwork",
    title: "Earthwork",
    description: "Prepare the ground levels and layout of your site.",
    services: ["Excavation", "Grading", "Foundation trenches"],
    href: "/services/earthwork"
  }
];

export function Services() {
  return <ConstructionExplorer activities={activities} />;
}
```

This repository distributes source code; it is not published as an npm package. React and React DOM are the runtime dependencies. Vite and TypeScript are used to develop and build the demo.

### Available zones

| `zone` | Highlighted area |
| --- | --- |
| `earthwork` | Ground and platform |
| `connections` | Access surfaces and utilities, showing site connections together |
| `drainage` | Drain pipes and inspection chamber |
| `road` | Access route and paving |
| `utilities` | Buried services |
| `landscaping` | Courtyard and surrounding spaces |

Use one activity per zone and a unique `id` for each activity. The order can be customised. The first activity is selected initially. An empty array renders no component.

### Component props

| Prop | Description |
| --- | --- |
| `activities` | Activities, descriptions, examples, and links |
| `heading` | Custom heading |
| `introduction` | Custom introductory text |
| `allActivitiesHref` | Optional link to all services |

An activity can include an optional photograph:

```tsx
photo: {
  src: "/photos/construction-site.jpg",
  alt: "Service trenches and ducts during construction",
  caption: "Example construction project",
  href: "/projects/construction-site"
}
```

Use photographs you have permission to use. The generic demo does not include any. Text and links are passed as React props rather than injected HTML.

## Customisation

Colours, dimensions, responsive breakpoints, and point positions are defined in `construction-explorer.css`. The ground, building, and utility shapes are defined in `ConstructionExplorer.tsx`. The perspective is drawn in 2D SVG; there is no WebGL scene.

## License

MIT — see [LICENSE](LICENSE). The license covers the code and illustration supplied here, not any additional content you provide.
