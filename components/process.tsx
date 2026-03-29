const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deep-dive into your goals, users, and competitive landscape. You get a clear scope, timeline, and project roadmap.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our designers craft wireframes and high-fidelity prototypes. Every pixel is intentional — usability and aesthetics work together.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Engineers write clean, tested, documented code using modern stacks. Weekly demos keep you in the loop throughout.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We deploy to production with zero downtime, monitor performance, and iterate based on real user data.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-foreground text-balance leading-tight">
            From idea to launch —{" "}
            <span className="text-primary">a proven process.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border z-0" />
              )}
              <div className="relative z-10">
                <div className="text-4xl font-extrabold text-primary font-mono mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
