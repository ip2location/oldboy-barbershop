import { ReactElement, PropsWithChildren } from 'react';
import Image from 'next/image';

type ServiceDecorationVariant = 'razor' | 'scissors' | 'none';

interface ServiceAboutSectionProps extends PropsWithChildren {
  aboutSectionSrc: string;
  aboutSectionAlt: string;
  headline: string;
  decorationVariant: ServiceDecorationVariant;
}

export const ServiceAboutSection = ({
  aboutSectionSrc,
  aboutSectionAlt,
  headline,
  decorationVariant,
  children,
}: ServiceAboutSectionProps): ReactElement => {
  const classes: Record<ServiceDecorationVariant, string> = {
    razor:
      'absolute top-28 z-30 -right-4 w-[394px] h-[312px] bg-[url("/images/bg/razor-deco.png")] bg-no-repeat bg-center-right bg-contain',
    scissors:
      'absolute top-32 z-30 -left-10 w-[401px] h-[309px] bg-[url("/images/bg/scissors-deco.png")] bg-cover',
    none: 'hidden',
  };

  return (
    <section className="section service-about flex mb-16 p-10">
      <div className="service__header relative pr-10 pb-5">
        <div className="service__image w-80 overflow-hidden rounded-md">
          <Image
            src={aboutSectionSrc}
            alt={aboutSectionAlt}
            sizes="(width:100%)"
            width="1240"
            height="666"
            role="img"
          />
        </div>
        <div className={`service__decoration ${classes[decorationVariant]}`} />
      </div>
      <div className="service__content flex flex-col gap-y-4 text-lg text-header-bg leading-[1.75]">
        <h2 className="service__headline font-rex text-4xl leading-normal mb-1">{headline}</h2>
        {children}
      </div>
    </section>
  );
};
