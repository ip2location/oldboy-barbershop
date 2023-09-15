import { ReactElement } from 'react';

type ServiceIconVariant = 'shavette' | 'scissors' | 'tattoo';

interface ServicePromoProps {
  titleTop: string;
  titleBottom: string;
  iconVariant: ServiceIconVariant;
}

export const ServicePromo = ({
  titleTop,
  titleBottom,
  iconVariant,
}: ServicePromoProps): ReactElement => {
  const classes: Record<ServiceIconVariant, string> = {
    shavette:
      'after:content-[""] after:absolute after:top-[4%] after:left-[135%] after:w-full after:h-[70%] after:bg-[url("/images/icons/shavette.svg")] after:bg-no-repeat after:bg-center-left after:bg-contain',
    scissors:
      'after:content-[""] after:absolute after:top-0 after:right-[-100%] after:w-full after:h-full after:bg-[url("/images/icons/scissors.svg")] after:bg-no-repeat after:bg-left after:bg-contain',
    tattoo:
      'after:content-[""] after:absolute after:top-0 after:right-[-100%] after:w-full after:h-full after:bg-[url("/images/icons/tattoo.svg")] after:bg-no-repeat after:bg-left after:bg-contain',
  };

  return (
    <div className="uppercase font-rex w-64 my-12 text-white text-transform: skew-y-15">
      <h1
        className={`inline-block text-6xl font-semibold leading-none align-top border-y-[3px] border-orange-title my-[7px] py-[7px] ${classes[iconVariant]}`}
      >
        {titleTop}
        <br />
        {titleBottom}
      </h1>
      <p className="text-lg leading-normal">
        Oldboy barbershop
        <br />
        только качество
      </p>
    </div>
  );
};
