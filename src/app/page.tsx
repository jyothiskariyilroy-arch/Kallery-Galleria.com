import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import DemandProof from "@/components/DemandProof";
import StrategicEdge from "@/components/StrategicEdge";
import UseCases from "@/components/UseCases";
import TrustBuilders from "@/components/TrustBuilders";
import FloorBreakdown from "@/components/FloorBreakdown";
import Investment from "@/components/Investment";
import Gallery from "@/components/Gallery";
import Mockups from "@/components/Mockups";
import Urgency from "@/components/Urgency";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative bg-obsidian-950 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Positioning />
      <DemandProof />
      <StrategicEdge />
      <UseCases />
      <TrustBuilders />
      <FloorBreakdown />
      <Investment />
      <Gallery />
      <Mockups />
      <Urgency />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
