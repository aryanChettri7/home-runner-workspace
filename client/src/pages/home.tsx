import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Pricing from "@/components/pricing";
import WhoWeHelp from "@/components/who-we-help";
import WhyItMatters from "@/components/why-it-matters";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <WhoWeHelp />
      <WhyItMatters />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
