import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Sneakers from '@/components/Sneakers/Sneakers';
import { ShoesCollected } from '@/components/ShoesCollected/ShoesCollected';
import { Best } from '@/components/Best/Best';
import { TheyLoveUs } from '@/components/TheyLoveUs/TheyLoveUs';

export default function Home() {
  return (
    <main className="isolate">
      <Header />
      <Sneakers />
      <Best />
      {/* <WhyJoinUs /> */}
      <TheyLoveUs />
      <ShoesCollected />
      <Footer />
    </main>
  );
}
