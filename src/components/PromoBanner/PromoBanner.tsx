import Image from 'next/image';
import promoScissors from '../../assets/promo/promoScissors.svg';
import { PromoBannerProps } from './PromoData';

export const PromoBanner = ({ barbershopCount }: PromoBannerProps): JSX.Element => {
  return (
    <div className="tracking-tigh sm:text-4xl uppercase font-rex w-48 mt-7 text-transform: skew-y-15">
      <h1 className="text-3xl text-white leading-8">
        Oldboy <br /> barbershop
      </h1>
      <div className="text-orange-title text-base relative">
        <p className="w-1/2 bg-orange-title h-1 absolute bottom-3 left-24" />
        Крупнейшая сеть
        <br /> барбершопов
      </div>
      <div className="flex">
        <span className="text-6xl text-white font-rex_inline leading-10 mt-4 ">
          {barbershopCount}
        </span>
        <p className="text-base text-white ml-2 mt-1">
          открытых <span>филиала</span>
        </p>
      </div>
      <p className="w-auto bg-orange-title h-1 mb-2.5 mt-6" />
      <p className="text-base text-white">намного больше чем просто мужская парихмахерская</p>
      <Image src={promoScissors} alt="Logo" width={61} height={33} />
    </div>
  );
};
