import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { Projects } from "@/components/ui/projects";
import { About } from "@/components/ui/about";
import { Features } from "@/components/ui/features";
import { CTA } from "@/components/ui/cta";
import { Footer } from "@/components/ui/footer";


export default function Home() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Features />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}