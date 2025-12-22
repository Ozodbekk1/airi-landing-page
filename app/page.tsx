/** @format */
import Hero from "@/components/hero/hero";
import Stats from "@/components/stats/stats";
import Research from "@/components/research/research";
import Projects from "@/components/projects/projects";
import Partners from "@/components/partners/partners";
import CTA from "@/components/cta/cta";
import Footer from "@/components/footer/footer";
import AIRIWebsite from "@/components/hero/hero";

export default function HomePage() {
  return (
    <main className='overflow-hidden'>
      <AIRIWebsite />
      {/* <Hero /> */}
      {/* <Stats />
      <Research />
      <Projects />
      <Partners />
      <CTA />
      <Footer /> */}
    </main>
  );
}
