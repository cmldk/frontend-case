import Image from 'next/image';
import Icon from '../Icon/Icon';

export function ShoesCollected() {
  return (
    <section className="overflow-hidden bg-amber-900">
      <section className="container mx-auto">
        <div className="relative" style={{ height: '717px', width: '100%' }}>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-amber-50">
            <h1 className="md:text-8xl font-bold text-white">11,658,467</h1>
            <p className="text-[32px] md:text-[56px] font-bold">
              Shoes Collected
            </p>
          </div>
          <Image
            src="/images/shoes-collected/col.png"
            width={256}
            height={200}
            alt="col"
            className="absolute z-10 top-20 left-24 sm:left-36"
          />
          <Icon
            name="map"
            width={1049}
            height={633}
            className="absolute opacity-[0.5px] top-1/2 left-[-14%] md:left-1/2 transform -translate-x-[-14%] md:-translate-x-1/2 -translate-y-1/2"
          />
          <Icon
            name="ellipses"
            width={724}
            height={455}
            className="absolute top-28 left-72 md:left-80"
          />
        </div>
      </section>
    </section>
  );
}
