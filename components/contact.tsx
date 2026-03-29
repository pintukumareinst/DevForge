"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-foreground text-balance leading-tight mb-6">
            Ready to build{" "}
            <span className="text-primary">something great?</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-10">
            Tell us about your project and we'll get back to you within 24 hours with a detailed proposal and next steps.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { label: "Email", value: "hello@devforge.dev" },
              { label: "Phone", value: "+1 (555) 012-3456" },
              { label: "Office", value: "San Francisco, CA · Remote-first" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-foreground text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="rounded-xl border border-border bg-card p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 h-64 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-xl font-sans">Message received!</h3>
              <p className="text-muted-foreground text-sm">
                We'll be in touch within 24 hours. Talk soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-muted-foreground uppercase tracking-wider" htmlFor="budget">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
                >
                  <option value="">Select a range</option>
                  <option value="under5k">Under $5,000</option>
                  <option value="5-15k">$5,000 – $15,000</option>
                  <option value="15-50k">$15,000 – $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-muted-foreground uppercase tracking-wider" htmlFor="message">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
