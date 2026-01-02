import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-zinc-50 font-sans ">
      <Hero />
    </div>
  );
}
