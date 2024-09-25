import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Icon from '../Icon/Icon';
import { UserCard } from './UserCard';

const cardItems = [
  {
    icon: { name: 'Zoomerr', width: 133, height: 32 },
    comment: `Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
        viverra turpis lorem. Varius a turpis urna id porttitor.`,
    user: {
      src: '/images/theyloveus/thumb1.jpg',
      name: 'Hellen Jummy',
      title: 'Team Lead',
    },
  },
  {
    icon: { name: 'Shells', width: 124.4, height: 32 },
    comment: `Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.`,
    user: {
      src: '/images/theyloveus/thumb2.jpg',
      name: 'Hellena John',
      title: 'Co-founder',
    },
  },
  {
    icon: { name: 'ArtVenue', width: 165.81, height: 32 },
    comment: `A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.`,
    user: {
      src: '/images/theyloveus/thumb3.jpg',
      name: 'David Oshodi',
      title: 'Manager',
    },
  },
  {
    icon: { name: 'Waves', width: 109.3, height: 32 },
    comment: `Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.`,
    user: {
      src: '/images/theyloveus/thumb4.jpg',
      name: 'Charolette Hanlin',
      title: 'CEO',
    },
  },
];

export function CardCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="sm:w-[120%] sm:-translate-x-10"
    >
      <CarouselContent>
        {Array.from({ length: 2 }).map(() =>
          cardItems.map((item, index) => (
            <CarouselItem key={index} className="w-[400px] basis-auto py-4">
              <Card user={item.user} icon={item.icon} comment={item.comment} />
            </CarouselItem>
          ))
        )}
      </CarouselContent>
      <CarouselPrevious className="invisible 2xl:visible bg-transparent border-2 border-amber-900 h-12 w-12" />
      <CarouselNext className="invisible 2xl:visible bg-transparent border-2 border-amber-900 h-12 w-12" />
    </Carousel>
  );
}

interface CardProps {
  icon: {
    name: string;
    width: number;
    height: number;
  };
  comment: string;
  user: {
    src: string;
    name: string;
    title: string;
  };
}

function Card({ icon, comment, user }: CardProps) {
  return (
    <div className="flex flex-col items-start p-8 gap-2 md:gap-4 shadow-dark-lg bg-white border border-gray-200 rounded-2xl-plus select-none">
      <span className="py-4">
        <Icon name={icon.name} width={icon.width} height={icon.height} />
      </span>
      <p className="font-normal md:text-2xl md:leading-[160%]">{comment}</p>
      <UserCard src={user.src} name={user.name} title={user.title} />
    </div>
  );
}
