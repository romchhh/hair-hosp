import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { StatsAndAdvisor } from "@/components/StatsAndAdvisor";
import { Surgeons } from "@/components/Surgeons";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { PackageCard } from "@/components/PackageCard";
import { AdditionalServices } from "@/components/AdditionalServices";
import { FAQ } from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-6">
        <Hero />
        <StatsAndAdvisor />
        <section id="gallery">
          <Gallery />
        </section>
        <section id="surgeons">
          <Surgeons />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="packages" className="px-4 mt-8">
          <h2 className="text-[30px] leading-[1.1] font-extrabold text-center mb-4">
            Pakiet łączony<br />
            Sapphire FUE / Multi DHI
          </h2>
          <PackageCard />
        </section>
        <AdditionalServices />
        <FAQ />
        <ContactForm />
      </main>
    </div>
  );
}
