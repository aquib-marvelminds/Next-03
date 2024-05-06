import Background from "./components/Background";
import Hero from "./components/Hero";
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
      </main>
    </>
  );
}
