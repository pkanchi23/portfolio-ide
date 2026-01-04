import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PixelGrid from '@/components/PixelGrid';

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <PixelGrid />
      <Header />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <HeroSection />
      </main>
    </div>
  );
}
