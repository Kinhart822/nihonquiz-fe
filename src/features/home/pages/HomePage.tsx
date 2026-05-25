import { useOutletContext } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { StatsLineSection } from '../components/StatsLineSection';
import { CTASection } from '../components/CTASection';
import { HomeFooter } from '../components/HomeFooter';

interface HomeContext {
  openAuth: (mode: 'login' | 'register') => void;
}

const HomePage = () => {
  const { openAuth } = useOutletContext<HomeContext>();

  return (
    <>
      <HeroSection onOpenAuth={openAuth} />
      <FeaturesSection />
      <StatsLineSection />
      <CTASection onOpenAuth={openAuth} />
      <HomeFooter />
    </>
  );
};

export default HomePage;
