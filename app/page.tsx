import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FaqSection from "@/components/FaqSection";
import SkillsStats from "@/components/SkillsStats";
import Testimonials from "@/components/Testimonials";
import StatsBanner from "@/components/StatsBanner";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <FaqSection />
      <SkillsStats />
      <Testimonials />
      <StatsBanner />
      <CtaBanner />
      <Footer />
    </main>
  );
}
