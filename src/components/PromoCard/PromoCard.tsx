import { ReactElement } from 'react';
import { PromoHeader } from '../PromoOrangeHeader';

export const PromoCard = (): ReactElement => {
  return (
    <section className="about mt-8">
      <div className="about-header flex flex-col mb-8 pb-5">
        <PromoHeader />
        <div
          className="section-header__image bg-[url('/images/bg/about.jpg')] 
            bg-cover bg-[position:bottom_center] w-[25.5rem] 
            h-[18.75rem] skew-y-15 -mt-10
            after:absolute
            after:top-0
            after:-right-5
            after:bg-[url('/images/bg/white-grunge-90.svg')]
            after:bg-repeat-y
            
            after:bg-cover
            after:w-10
            after:h-full
            after:content-['']"
        >
          <p
            className="section-header__subtitle 
                relative flex flex-row pt-10 pl-28
                w-full m-0 
                decoration-[#896322] 
                text-3xl font-rex 
                text-white
                before:absolute
                before:top-[2.3rem]
                before:w-auto 
                before:h-[0.17rem] 
                before:mb-2.5 
                before:mt-6
                before:left-2.5
                before:mr-1.5
                before:pl-[5.4rem]
                before:bg-[#896322]
                before:content-['']"
          >
            Oldboy barbershop
          </p>
        </div>
      </div>
    </section>
  );
};
