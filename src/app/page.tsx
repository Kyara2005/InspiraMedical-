import { Certificates } from "@/components/Certificates";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { TecnicaTurca } from "@/components/TecnicaTurca";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TecnicaTurca />
        <Specialties />
        <Gallery />
        <Certificates />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
