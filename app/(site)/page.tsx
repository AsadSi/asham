import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Support from "@/components/Support";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Asham Agha Nadeem - Kandidat til Kommunalvalget 2025",
  description: "Jeg brænder for at skabe en by, hvor københavner får bedre muligheder, og hvor fællesskab og lighed er i centrum. Til daglig arbejder jeg i NGO’en Turning Tables, jeg har stiftet organisationen Danish Youth in Action og står bag podcasten Gadens Parlament. Tidligere var jeg spidskandidat til folketingsvalget, hvor jeg sammen med mit hold skabte en af de mest succesfulde kampagner for Frie Grønne."
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Instagram />
      <Support />
      <Contact />
    </main>
  );
}
