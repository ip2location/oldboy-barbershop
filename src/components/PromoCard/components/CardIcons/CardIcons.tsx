import Image from 'next/image';
import { PropsWithChildren, ReactElement } from 'react';

type CardIconsVariant = 'firstIcon' | 'secondIcon' | 'thirdIcon';

export interface CardIconsProps extends PropsWithChildren {
  variant: CardIconsVariant;
  image: string;
}
export const CardIcons = ({ variant, image, children }: CardIconsProps): ReactElement => {
  const classes: Record<CardIconsVariant, string> = {
    firstIcon: 'xl:col-start-1 xl:col-span-1',
    secondIcon: 'xl:col-start-2 xl:col-span-1',
    thirdIcon: 'xl:col-start-3 xl:col-span-1',
  };
  return (
    <article className={`${classes[variant]} items-center mb-10 flex flex-col lg:basis-1/3`}>
      <Image src={image} width={80} height={100} alt="Coffee icon" />
      <p className="p-5 text-sm leading-8 tracking-wider text-orange-bg">{children}</p>
    </article>
  );
};
