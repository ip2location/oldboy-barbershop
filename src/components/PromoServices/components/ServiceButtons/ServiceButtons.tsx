import { Button } from '@/components/Button';
import { PropsWithChildren, ReactElement } from 'react';

type ServiceVariant = 'style' | 'forFans' | 'masters' | 'complexCare';

export interface ServiceButtonsProps extends PropsWithChildren {
  variant: ServiceVariant;
  title: string;
  header: string;
  buttonText: string;
  subtitle: string;
}

export const ServiceButtons = ({
  variant,
  header,
  title,
  subtitle,
  buttonText,
}: ServiceButtonsProps): ReactElement => {
  const classes: Record<ServiceVariant, string> = {
    style: "bg-[url('/images/bg/services-icon1.svg')]",
    forFans: " bg-[url('/images/bg/services-icon2.svg')] ",
    masters: "bg-[url('/images/bg/services-icon3.svg')] ",
    complexCare: "bg-[url('/images/bg/services-icon4.png')] ",
  };
  return (
    <article
      className={`${classes[variant]}
bg-no-repeat py-3.5 px-1 bg-[length:100px] bg-right basis-[23%]	`}
    >
      <div className="font-rex">
        <p className="text-sm text-orange-title">{header}</p>
        <h3 className="text-lg lg:2xl">
          <strong className="text-2xl lg:text-4xl">{title}</strong>
          <br />
          {subtitle}
        </h3>
      </div>
      <div className="block text-right ">
        <Button variant="serviceLink">{buttonText}</Button>
      </div>
    </article>
  );
};
