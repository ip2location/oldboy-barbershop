import { PromoBanner } from '../../../../components/PromoBanner/PromoBanner';
import { Cosmetics } from '../../../promo/components/Cosmetics';

import { MobileApplicationPromo } from '../MobileApplicationPromo/MobileApplicationPromo';

interface PromoProps {
  branchesTotal: number;
}

export const Promo = ({ branchesTotal }: PromoProps) => {
  return (
    <>
      <PromoBanner branchesTotal={branchesTotal} />;
      <Cosmetics />
      <MobileApplicationPromo />
    </>
  );
};
