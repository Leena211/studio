import { HeroSection } from '@/components/home/HeroSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { TopicsShowcase } from '@/components/home/TopicsShowcase';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <TopicsShowcase />
    </>
  );
}
