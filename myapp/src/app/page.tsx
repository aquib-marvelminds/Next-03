import Background from "./components/Background";
import Hero from "./components/Hero";
import Stickyscroll from "./components/Stickyscroll";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiazed bg-grid-white/[0.02]">
        <Hero />
        <Background />
        <Stickyscroll />
      </main>
    </>
  );
}
