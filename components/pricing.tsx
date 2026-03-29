import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$4,999",
    period: "one-time",
    description: "Perfect for startups and small businesses needing a professional web presence.",
    features: [
      "Up to 8 pages",
      "Responsive design",
      "CMS integration",
      "Basic SEO setup",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$14,999",
    period: "one-time",
    description: "For growing companies that need a scalable platform with custom functionality.",
    features: [
      "Unlimited pages",
      "Custom web application",
      "API & third-party integrations",
      "Advanced SEO & Analytics",
      "Performance optimization",
      "5 rounds of revisions",
      "90-day post-launch support",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per project",
    description: "Full-cycle development for complex platforms, mobile apps, and ongoing partnerships.",
    features: [
      "Everything in Growth",
      "Mobile app development",
      "Dedicated engineering team",
      "Architecture consulting",
      "SLA-backed uptime",
      "Unlimited revisions",
      "Priority 24/7 support",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-foreground text-balance leading-tight">
            Simple plans.{" "}
            <span className="text-primary">No surprises.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Every plan includes a dedicated project manager, weekly check-ins, and a detailed handoff. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border flex flex-col p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-card relative"
                  : "border-border bg-background hover:border-muted-foreground/40"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-foreground font-sans">
                    {plan.price}
                  </span>
                  <span className="text-xs text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
