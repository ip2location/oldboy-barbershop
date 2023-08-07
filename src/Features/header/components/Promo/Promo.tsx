import { Cosmetics } from '@/Features/promo/components/Cosmetics';
import { PromoBanner, barbsershopData } from '../../../../components/PromoBanner';

export const Promo = () => {
  return (
    <>
      <PromoBanner barbershopCount={barbsershopData.barbershopCount} />
      <Cosmetics />
    </>
  );
};
