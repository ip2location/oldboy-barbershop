import { PromoBanner } from '../../../../components/PromoBanner/PromoBanner';
import { Cosmetics } from '../../../promo/components/Cosmetics/Cosmetics';

interface PromoProps {
  barbershopCount: number;
}

export const Promo = ({ barbershopCount }: PromoProps) => {
  return (
    <>
      <PromoBanner barbershopCount={barbershopCount} />;
      <Cosmetics />
    </>
  );
};
