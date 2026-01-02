import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex-col min-h-[90vh] items-center justify-center bg-zinc-50 font-sans ">
      <Hero />
      <About />
    </div>
  );
}
