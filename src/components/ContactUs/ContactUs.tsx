import React, { ReactElement } from 'react';

import { FullLogoImage } from '../FullLogoImage';

interface ContactUsProps {
  onClick?: () => void;
}

export const ContactUs = ({ onClick }: ContactUsProps): ReactElement => {
  return (
    <button
      className="hidden lg:flex fixed right-[30px] bottom-[30px] z-30 h-24 w-24 inline-flex rounded-full bg-header-bg"
      type="button"
      onClick={onClick}
    >
      <div className="animate-ping-slow absolute inline-flex h-full w-full rounded-full border-2 border-orange-title border-solid opacity-90" />
      <div className="absolute top-5 uppercase font-rex_inline text-center text-white text-xl leading-none">
        Онлайн запись
      </div>
      <div className="absolute top-16 left-7 ">
        <FullLogoImage isWhite={false} width="40px" height="20px" />
      </div>
    </button>
  );
};
