import { PromoBanner } from '../../../../components/PromoBanner/PromoBanner';
import { Cosmetics } from '../../../promo/components/Cosmetics/Cosmetics';

interface PromoProps {
  branchesTotal: number;
}

export const Promo = ({ branchesTotal }: PromoProps) => {
  return (
    <>
      <PromoBanner branchesTotal={branchesTotal} />;
      <Cosmetics />
    </>
  );
};
