import { PropsWithChildren, ReactElement } from 'react';

export const PromoHeader = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <header
      className="section-header z-10 max-w-[23rem] w-11/12 flex relative skew-y-15 bg-orange-title 
            shadow-[-15px_10px_40px_-10px_rgba(19,19,19,.5)]
            after:absolute
            after:top-0
            after:-right-5
            after:bg-[url('/images/bg/gold-v-grunge.svg')]
            after:bg-repeat-x
            after:bg-[position:center_center]
            after:bg-cover
            after:w-10
            after:h-full
            after:content-['']
            "
    >
      {children}
    </header>
  );
};
