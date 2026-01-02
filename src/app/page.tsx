import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NavigationCards from '@/components/NavigationCards';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <NavigationCards />
      </main>
    </>
  );
}
