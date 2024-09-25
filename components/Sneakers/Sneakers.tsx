import Image from 'next/image';
import Icon from '../Icon/Icon';
import { SneakersInfo } from './SneakersInfo';

const Sneakers = () => {
  return (
    <>
      <section className="container mx-auto relative flex flex-col 2xl:flex-row items-center justify-between">
        <Icon
          name="Rectangle31"
          width={1428}
          height={806}
          className="absolute z-[-1] right-[-16%] top-[120%] sm:top-[52%] 2xl:top-[20%]"
        />
        <div className="flex flex-col items-center text-center 2xl:text-start 2xl:items-start space-y-8 w-4/6">
          <h1>Collectible Sneakers</h1>
          <p className="text-lg text-slate-900">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div className="flex items-center text-amber-900 space-x-4">
            <button className="box-border border-2 rounded-lg border-amber-900 p-3">
              <span className="px-4 text-xl font-medium text-nowrap">
                Sign up now
              </span>
            </button>
            <button className="flex items-center py-3 px-2">
              <Icon name="PlayCircle" width={24} height={24} />
              <span className="px-2 font-medium text-nowrap">Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="relative flex items-center z-1 py-20">
          <div className="flex justify-center items-center p-0 gap-2.5 absolute w-3/4 h-3/5 rounded-[50px] left-[11%] top-[26%] bg-amber-400 z-[-1]"></div>
          <Image
            src="/images/sneakers/piedra.png"
            width={486}
            height={388}
            alt="Pexels Photo by Ray Piedra"
          />
        </div>
      </section>

      <SneakersInfo />
    </>
  );
};
export default Sneakers;
