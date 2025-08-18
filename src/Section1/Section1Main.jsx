import { Hero } from "./Hero";

export function Section1Main() {
  return (
    <div
      id="section-1"
      className="relative pt-[80px] h-[100vh] w-full flex flex-col items-center justify-start bg-black overflow-hidden"
    >
      <Hero />
    </div>
  );
}