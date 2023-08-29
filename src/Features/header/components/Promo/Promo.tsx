import { PromoBanner } from '../../../../components/PromoBanner/PromoBanner';
import { Cosmetics } from '../../../promo/components/Cosmetics/Cosmetics';

import { MobileApplicationPromo } from '../MobileApplicationPromo/MobileApplicationPromo';

interface PromoProps {
  barbershopCount: number;
}

export const Promo = ({ barbershopCount }: PromoProps) => {
  return (
    <>
      <PromoBanner barbershopCount={barbershopCount} />;
      <Cosmetics />
      <MobileApplicationPromo />
    </>
  );
};
