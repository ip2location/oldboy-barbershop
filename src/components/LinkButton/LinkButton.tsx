import { ReactElement, PropsWithChildren } from 'react';

type LinkButtonVariant = 'linkButton' | 'linkButtonThin';

export interface LinkButtonProps extends PropsWithChildren {
  variant: LinkButtonVariant;
  link: string;
}

export const LinkButton = ({ variant, link, children }: LinkButtonProps): ReactElement => {
  const classes: Record<LinkButtonVariant, string> = {
    linkButton:
      'box-border rounded-3xl border-2 border-white bg-transparent w-[195px] flex flex-row items-center justify-center gap-1 font-button_font text-white text-sm font-bold leading-10 text-center hover:bg-white hover:text-header-bg',
    linkButtonThin:
      'box-border rounded-3xl border-2 border-white bg-transparent w-[195px] flex flex-row items-center justify-center gap-1 font-button_font text-white text-xs font-normal leading-10 text-center uppercase hover:bg-white hover:text-header-bg',
  };

  return (
    <a className={`${classes[variant]}`} href={link} target="_blank" role="button" rel="noreferrer">
      {children}
    </a>
  );
};
