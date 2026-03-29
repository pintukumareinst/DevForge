import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "SaaS Platform",
    title: "Nexus Analytics",
    description: "Real-time data dashboard for enterprise teams with custom reporting and AI-driven insights.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    image: "https://placehold.co/600x400?text=Nexus+Analytics+dark+modern+SaaS+dashboard+with+charts+and+data+visualizations",
    alt: "Nexus Analytics SaaS platform showing a dark modern dashboard with real-time charts and data visualizations",
  },
  {
    tag: "E-Commerce",
    title: "Luminary Store",
    description: "High-conversion storefront with headless commerce, 3D product views, and sub-second load times.",
    tech: ["React", "Shopify", "Three.js", "Vercel"],
    image: "https://placehold.co/600x400?text=Luminary+Store+sleek+ecommerce+product+page+with+3D+viewer+and+dark+theme",
    alt: "Luminary Store e-commerce website showing a sleek product page with 3D product viewer and dark aesthetic",
  },
  {
    tag: "Mobile App",
    title: "PulseHealth",
    description: "Cross-platform health tracking app with wearable integrations and personalized coaching AI.",
    tech: ["React Native", "GraphQL", "Node.js", "AWS"],
    image: "https://placehold.co/600x400?text=PulseHealth+mobile+app+with+health+metrics+graphs+and+clean+dark+UI",
    alt: "PulseHealth mobile application displaying health metrics, graphs, and a clean dark user interface",
  },
  {
    tag: "Web Platform",
    title: "BuildSync",
    description: "Construction project management platform streamlining bids, timelines, and contractor communications.",
    tech: ["Vue.js", "Django", "Postgres", "Docker"],
    image: "https://placehold.co/600x400?text=BuildSync+construction+project+management+platform+with+timeline+and+task+board",
    alt: "BuildSync construction management platform showing project timelines, task boards, and contractor dashboards",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Case Studies
            </p>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-foreground text-balance leading-tight">
              Work we're{" "}
              <span className="text-primary">proud of.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {project.tag}
                </span>
                <h3 className="font-sans font-bold text-xl text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
