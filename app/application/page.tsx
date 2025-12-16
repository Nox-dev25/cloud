import HeroSection from "./components/HeroSection";
import Navbar from "../components/Navbar";
import ApplicationSection from "./components/ApplicationSection";
import DifferentiationSection from "../paas/components/DifferentiationSection";
import ComparisonSection from "./components/ComparisonSection";
import ComparisonSection2 from "./components/ComparisonSection2";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function paas() {
  return (
  <main >
    <Navbar />
   
  <HeroSection />
  <ApplicationSection />
  <DifferentiationSection />
  <ComparisonSection />
  <ComparisonSection2 />
  <CTASection />
  <Footer />
 

</main>


  );
}