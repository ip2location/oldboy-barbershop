import { PromoBanner, barbsershopData } from '../../../../components/PromoBanner';

export const Promo = () => {
  return (
    <>
      <PromoBanner barbershopCount={barbsershopData.barbershopCount} />
      <div
        className="block bg-[url('/images/hero_overlay.png')]
              w-full h-f bg-no-repeat
              bg-[center_bottom] bg-[length:85%]
              z-10"
      />
    </>
  );
};
