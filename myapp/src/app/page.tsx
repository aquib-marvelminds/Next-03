import Background from "./components/Background";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Myteam from "./components/Myteam";

import Services from "./components/Services";
import Stickyscroll from "./components/Stickyscroll";
import Testmonial from "./components/Testmonial";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiazed bg-grid-white/[0.02]">
        <Hero />
        <Background />
        <Stickyscroll />
        <Testmonial />
        <Services />
        <Myteam />
        <Footer />
      </main>
    </>
  );
}
