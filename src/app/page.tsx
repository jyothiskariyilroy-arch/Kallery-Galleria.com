import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloorBreakdown from "@/components/FloorBreakdown";
import Investment from "@/components/Investment";
import UseCases from "@/components/UseCases";
import Mockups from "@/components/Mockups";
import TrustBuilders from "@/components/TrustBuilders";
import Positioning from "@/components/Positioning";
import DemandProof from "@/components/DemandProof";
import StrategicEdge from "@/components/StrategicEdge";
import Gallery from "@/components/Gallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CallFloat from "@/components/CallFloat";

export default function Home() {
  return (
    <main className="relative bg-obsidian-950 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <FloorBreakdown />
      <Investment />
      <UseCases />
      <Mockups />
      <TrustBuilders />
      <Positioning />
      <DemandProof />
      <StrategicEdge />
      <Gallery />
      <FinalCTA />
      <Footer />
      <CallFloat />
      <WhatsAppFloat />
    </main>
  );
}
