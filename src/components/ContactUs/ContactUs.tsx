import { ReactElement } from 'react';

import { FullLogoImage } from '../FullLogoImage';

export interface ContactUsProps {
  onClick?: () => void;
}

export const ContactUs = ({ onClick }: ContactUsProps): ReactElement => {
  return (
    <button
      className="fixed right-[30px] bottom-[30px] z-30 h-24 w-24 inline-flex rounded-full bg-header-bg"
      type="button"
      onClick={onClick}
    >
      <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full border-2 border-orange-title border-solid opacity-90" />
      <span className="absolute top-5 uppercase font-rex_inline text-center text-white text-xl leading-none">
        Онлайн запись
      </span>
      <span className="absolute top-16 left-7 ">
        <FullLogoImage isWhite={false} width="40px" height="20px" />
      </span>
    </button>
  );
};
