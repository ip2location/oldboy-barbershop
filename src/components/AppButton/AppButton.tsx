import { ReactElement, PropsWithChildren } from 'react';

type AppButtonVariant = 'appButton' | 'appButton_thin';

export interface AppButtonProps extends PropsWithChildren {
  variant: AppButtonVariant;
}

export const AppButton = ({ variant, children }: AppButtonProps): ReactElement => {
  const classes: Record<AppButtonVariant, string> = {
    appButton:
      'box-border rounded-3xl border-2 border-white bg-transparent w-[195px] flex flex-row items-center justify-center gap-1 font-button_font text-white text-sm font-bold leading-10 text-center hover:bg-white hover:text-header-bg',
    appButton_thin:
      'box-border rounded-3xl border-2 border-white bg-transparent w-[195px] flex flex-row items-center justify-center gap-1 font-button_font text-white text-xs font-normal leading-10 text-center uppercase hover:bg-white hover:text-header-bg',
  };

  return (
    <a
      className={`${classes[variant]}`}
      href="https://play.google.com/store/apps/details?id=biz.app.apps.salon.app109144"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
