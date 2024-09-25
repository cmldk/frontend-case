import Image from 'next/image';
import Icon from '../Icon/Icon';

interface CardProps {
  src: string;
}

export function Card({ src }: CardProps) {
  return (
    <div className="box-border flex-1 flex flex-col p-0 bg-slate-900 border border-slate-900 rounded-lg-plus z-[1] shadow-light-xxl">
      <Image
        src={src}
        layout="responsive"
        width={394.67}
        height={220}
        alt="Picture1"
        className="rounded-t-[10px]"
      />
      <div className="flex flex-col items-start p-[32px_32px_0px] gap-[16px]">
        <h6>Title</h6>
        <p className="text-lg">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </p>
      </div>

      <div className="flex flex-row items-start p-8 gap-4">
        <button className="flex items-center justify-center w-full box-border border-2 rounded-lg border-white p-3">
          <Icon name="ShoppingCart" width={24} height={24} />
          <span className="px-4 text-xl font-medium text-nowrap">Buy Now</span>
        </button>
      </div>
    </div>
  );
}
