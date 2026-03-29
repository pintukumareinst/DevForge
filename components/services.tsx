import {
  Globe,
  Smartphone,
  Layers,
  ShieldCheck,
  BarChart3,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Blazing-fast, SEO-optimized websites and web apps built with Next.js, React, and modern tooling.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS & Android applications with React Native — one codebase, native performance.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "User-centric interfaces crafted in Figma with design systems that translate pixel-perfect to code.",
  },
  {
    icon: Cpu,
    title: "Backend & APIs",
    description:
      "Scalable REST and GraphQL APIs, microservices, and cloud infrastructure built for growth.",
  },
  {
    icon: ShieldCheck,
    title: "Security & DevOps",
    description:
      "CI/CD pipelines, container orchestration, and hardened security audits for production-ready software.",
  },
  {
    icon: BarChart3,
    title: "Analytics & SEO",
    description:
      "Data-driven insights, Core Web Vitals optimization, and organic growth strategy baked in from day one.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-foreground text-balance leading-tight">
            Full-spectrum development,{" "}
            <span className="text-primary">start to finish.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-background p-8 hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
