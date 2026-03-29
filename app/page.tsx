import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Work from "@/components/work";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
