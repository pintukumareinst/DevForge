import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "DevForge rebuilt our entire platform from scratch in 12 weeks. The new site loads 4× faster and our conversion rate jumped 38% in the first month.",
    name: "Sarah Mitchell",
    role: "CEO, Luminary Commerce",
    initials: "SM",
  },
  {
    quote:
      "The team didn't just write code — they thought deeply about our users and proposed improvements we hadn't even considered. True partners.",
    name: "James Okafor",
    role: "CTO, BuildSync",
    initials: "JO",
  },
  {
    quote:
      "From discovery to launch in 6 weeks. The quality of work is exceptional and communication was crystal clear throughout. Highly recommend.",
    name: "Priya Nair",
    role: "Founder, PulseHealth",
    initials: "PN",
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Client Voices
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-foreground text-balance leading-tight">
            Trusted by founders{" "}
            <span className="text-primary">and engineering teams.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-card p-8 flex flex-col gap-6"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {`"${t.quote}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
