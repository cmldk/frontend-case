import { CardCarousel } from './CardCarousel';

export function TheyLoveUs() {
  return (
    <section className="flex flex-col relative py-20 gap-8 md:gap-20">
      <div className="absolute w-[1360px] h-[277px] sm:h-[421px] left-1/2 -translate-x-[680px] top-[165px] md:top-[182px] bg-amber-200 flex-none order-0 flex-grow-0 z-0"></div>
      <div className="container">
        <h2>Because they love us</h2>
      </div>
      <CardCarousel />
    </section>
  );
}
