import React from 'react';
import AppStore from '../../public/images/footer/app-store.svg';
import GooglePlay from '../../public/images/footer/google-play.svg';
import Youtube from '../../public/images/footer/jam-icons/youtube.svg';
import Facebook from '../../public/images/footer/jam-icons/facebook.svg';
import Instagram from '../../public/images/footer/jam-icons/instagram.svg';
import Linkedin from '../../public/images/footer/jam-icons/linkedin.svg';
import Twitter from '../../public/images/footer/jam-icons/twitter.svg';
import World from '../../public/images/footer/jam-icons/world.svg';
import Ellipses from '../../public/images/shoes-collected/Ellipses.svg';
import Map from '../../public/images/shoes-collected/Map.svg';
import PlayCircle from '../../public/images/sneakers/play-circle.svg';
import { IconoirProvider, MenuScale, Trophy, Tunnel, Tv } from 'iconoir-react';
import Rectangle25 from '../../public/images/sneakers/Rectangle-25.svg';
import Rectangle26 from '../../public/images/sneakers/Rectangle-26.svg';
import Rectangle27 from '../../public/images/sneakers/Rectangle-27.svg';
import Rectangle31 from '../../public/images/sneakers/Rectangle-31.svg';
import ShoppingCart from '../../public/images/best/shopping-cart.svg';
import Zoomerr from '../../public/images/theyloveus/Zoomerr.svg';
import Shells from '../../public/images/theyloveus/Shells.svg';
import ArtVenue from '../../public/images/theyloveus/ArtVenue.svg';
import Waves from '../../public/images/theyloveus/Waves.svg';

const icons: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} = {
  appstore: AppStore,
  googleplay: GooglePlay,
  youtube: Youtube,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  world: World,
  map: Map,
  ellipses: Ellipses,
  MenuScale: MenuScale,
  PlayCircle: PlayCircle,
  Trophy,
  Tunnel,
  Tv,
  Rectangle25,
  Rectangle26,
  Rectangle27,
  Rectangle31,
  ShoppingCart,
  Zoomerr,
  Shells,
  ArtVenue,
  Waves,
};

interface IconProps {
  name: keyof typeof icons;
  width?: string | number;
  height?: string | number;
  className?: string;
  strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({
  name,
  width = '',
  height = '',
  className,
  strokeWidth,
}) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    return null;
  }

  return strokeWidth ? (
    <IconoirProvider iconProps={{ strokeWidth, className }}>
      <SvgIcon width={width} height={height} />
    </IconoirProvider>
  ) : (
    <SvgIcon width={width} height={height} className={className} />
  );
};

export default Icon;
