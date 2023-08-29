import { ReactElement, PropsWithChildren } from 'react';

type AppButtonVariant = 'appButton' | 'appButton_thin';

export interface AppButtonProps extends PropsWithChildren {
  variant: AppButtonVariant;
  link: string;
}

export const AppButton = ({ variant, link, children }: AppButtonProps): ReactElement => {
  const classes: Record<AppButtonVariant, string> = {
    appButton:
      'box-border rounded-3xl border-2 border-white bg-transparent w-[195px] flex flex-row items-center justify-center gap-1 font-button_font text-white text-sm font-bold leading-10 text-center hover:bg-white hover:text-header-bg',
    appButton_thin:
      'box-border rounded-3xl border-2 border-white bg-transparent w-[195px] flex flex-row items-center justify-center gap-1 font-button_font text-white text-xs font-normal leading-10 text-center uppercase hover:bg-white hover:text-header-bg',
  };

  return (
    <a className={`${classes[variant]}`} href={link} target="_blank" role="button" rel="noreferrer">
      {children}
    </a>
  );
};
