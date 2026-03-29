"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.22 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0 0) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.4,
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.75 0.18 195 / 0.12) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8 bg-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Now accepting projects for Q2 2026
          </div>

          <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance text-foreground mb-6">
            We build software{" "}
            <span className="text-primary">that scales</span> your business.
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
            From sleek landing pages to enterprise-grade platforms — DevForge delivers end-to-end development with speed, precision, and craft.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-6 py-3 rounded-full hover:bg-secondary transition-colors text-sm"
            >
              <Play className="w-4 h-4 text-primary" />
              View Our Work
            </a>
          </div>
        </div>

        {/* Right — code card */}
        <div className="hidden md:block">
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary">
              <span className="w-3 h-3 rounded-full bg-destructive opacity-70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
              <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">devforge/app — zsh</span>
            </div>
            <pre className="p-6 text-xs font-mono leading-6 text-foreground overflow-x-auto">
              <code>
                <span className="text-muted-foreground">$ </span>
                <span className="text-primary">npx</span>
                {" create-devforge-app my-project\n"}
                <span className="text-muted-foreground">
                  {"✔ Scaffolding project...\n"}
                  {"✔ Installing dependencies...\n"}
                  {"✔ Configuring CI/CD pipeline...\n"}
                  {"✔ Setting up database schema...\n"}
                </span>
                <span className="text-green-400">
                  {"✓ Project ready in 2.4s\n\n"}
                </span>
                <span className="text-muted-foreground">{"$ "}</span>
                <span className="text-primary">cd</span>
                {" my-project && "}
                <span className="text-primary">npm run dev</span>
                {"\n"}
                <span className="text-muted-foreground">
                  {"  ▲ DevForge v4.2.0\n"}
                  {"  - Local:   "}
                </span>
                <span className="text-primary underline">{"http://localhost:3000"}</span>
                {"\n"}
                <span className="text-green-400">{"  ✓ Ready "}</span>
                <span className="text-muted-foreground">{"in 312ms\n"}</span>
                <span className="text-foreground animate-pulse">{"█"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "200+", label: "Projects shipped" },
            { value: "98%", label: "Client satisfaction" },
            { value: "50ms", label: "Avg. load time" },
            { value: "8yrs", label: "In the industry" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-foreground font-sans">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
