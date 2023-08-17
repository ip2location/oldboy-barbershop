import { barbsershopData } from './Promo.constants';
import { PromoBanner } from '../../../../components/PromoBanner/PromoBanner';
import { Cosmetics } from '../../../promo/components/Cosmetics/Cosmetics';

export const Promo = () => {
  return (
    <>
      <PromoBanner barbershopCount={barbsershopData.barbershopCount} />;
      <Cosmetics />
    </>
  );
};
