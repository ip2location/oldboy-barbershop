'use client';

import { Header } from '@/components/Header';
import { barbsershopData } from '@/components/PromoBanner/PromoData';
import { PromoBanner } from '@/components/PromoBanner';

export const Promo = () => {
  return (
    <>
      <Header />
      <PromoBanner barbershopCount={barbsershopData.barbershopCount} />
      <div
        className="block bg-[url('/images/hero_overlay.png')]
              w-full h-full bg-no-repeat
              bg-[center_bottom] bg-[length:85%]
              z-10 absolute"
      />
    </>
  );
};
