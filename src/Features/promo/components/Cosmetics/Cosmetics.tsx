import Link from 'next/link';
import { ReactElement } from 'react';

export const Cosmetics = (): ReactElement => {
  return (
    <aside className="hero__banner absolute top-20 right-0 z-30 block">
      <article className="hero-cosmetics relative flex flex-col justify-end w-[22.5rem] h-[19.188rem] font-bold font-rex text-right">
        <h2 className="hero-cosmetics__title text-white font-rex text-2xl leading-6">
          <span className="hero-cosmetics__span text-orange-title text-base font-rex">
            Спрашивайте косметику
          </span>
          <br />
          во всех барбершопах <br /> сети OldBoy
        </h2>
        <p className="hero-cosmetics__text m-0 text-orange-title text-xs font-rex">
          OLDBOY BARBERSHOP x barber wild
        </p>
        <Link
          href="/cosmetics"
          className="hero-cosmetics__link
            bg-transparent
            absolute
            -top-5
            -right-9
            z-10
            w-[25rem]
            h-[20rem]
            before:absolute
            before:right-0
            before:bottom-0
            before:w-full
            before:h-full
            before:bg-[url('/images/bg/cosmetics-deco-bg.png')]
            before:bg-no-repeat
            before:bg-[position:bottom_52px_right_30px]
            before:bg-[length:305px_auto]
            before:opacity-50
            before:transition duration-200 linear
            before:content-['']
            hover:before:opacity-100
            hover:before:delay-[300ms]

            after:absolute
            after:right-[-25px]
            after:bottom-[-20px]
            after:w-full
            after:h-full
            after:bg-[url('/images/bg/cosmetics-deco.png')]
            after:bg-[position:bottom_52px_right_30px]
            after:bg-contain
            after:bg-no-repeat
            after:transition duration-200 linear
            after:opacity-100 
            after:z-50
            after:content-['']
        "
        />
      </article>
    </aside>
  );
};
