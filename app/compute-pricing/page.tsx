import Navbar from "../components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { OSAccordion } from "./components/OSAccordion";
import { osCategories } from "@/data/serverPlans";

export default function ComputePricing() {
  return (
  <main >
    <Navbar />
    <div className="min-h-screen bg-background">
        <HeroSection />
        <section className="animate-fade-in pb-36" style={{ animationDelay: "200ms" }}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Flexible pricing options to match your workload. All plans include DDoS protection, 
              automated backups, and 24/7 support.
            </p>
          </div>

          <OSAccordion
            osCategories={osCategories}
            defaultOpen="linux"
          />
        </section>
    </div>
</main>
  );
}