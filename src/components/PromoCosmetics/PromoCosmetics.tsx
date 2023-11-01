import { ReactElement } from 'react';

import { PromoHeader } from '../PromoHeader';
import { Button } from '../Button';

export const PromoCosmetics = (): ReactElement => {
  return (
    <section>
      <div className="-mb-32">
        <PromoHeader>
          <h2
            className="section-header__title 
            text-5xl
            leading-9
            mt-2.5 pl-10 pr-12 py-4
            text-white font-rex 
            drop-shadow-[-3px_2px_0_rgba(137,99,34)]"
          >
            Косметика <br /> <span className="text-2xl">Oldboy barbershop</span>
          </h2>
        </PromoHeader>
        <div
          className="section-header__image  
            bg-cover bg-[position:bottom_center] w-[25.5rem] 
            ml-3
            skew-y-15 -mt-10
            after:absolute
            after:top-0
            after:-right-5
           "
        >
          <p
            className="section-header__subtitle 
                relative flex flex-row pt-10
                w-full m-0 
                decoration-[#896322] 
                text-4xl font-rex 
                leading-9
                text-orange-title
                before:absolute
                before:top-[2.3rem]
                before:mb-2.5 
                before:mt-6
                before:left-2.5
                before:mr-1.5
                before:pl-[5.4rem]
                before:bg-[#896322]
                before:content-['']
                "
          >
            Для эксклюзивного <br /> ухода
          </p>
        </div>
      </div>
      <div className="">
        <article
          className="
            bg-[url('/images/bg/background-cosmetics.jpg')] 
            w-full
            bg-[position:center_top,_left_bottom_0.2rem]
            bg-[length:100%,_cover]
            min-h-[160px]
            max-h-[32rem]	
          "
        >
          <div className="relative w-12/12 pt-4 sm:pt-9 md:pt-12 px-12 mr-8 h-5/6 md:flex">
            <div className="basis-1/3	">
              <div
                className="
            bg-[url('/images/logo/cosmetics-logo.png'),_url('/images/logo/cosmetics-logo-crown.svg')]
            bg-[contain,auto]
            h-full
            w-full
            bg-no-repeat
            z-20
            mt-36
            ml-8 
           "
              />
            </div>

            <div className="basis-2/3">
              <h2 className="font-rex text-lg md:2xl lg:text-3xl text-white my-5 md:my-8 leading-7 md:leading-9">
                НОВАЯ ЛИНЕЙКА МУЖСКОЙ КОСМЕТИКИ ПРЕМИУМ-КЛАССА ОТ БРЕНДА С МИРОВЫМ ИМЕНЕМ <br />
                <span className="font-rex text-lg  md:2xl lg:text-2xl text-orange-light">
                  OLDBOY BARBERSHOP × BARBER WILD
                </span>
              </h2>
              <p className="text-white font-button_font text-sm md:text-base font-semibold lg:text-lg ">
                Спрашивайте во всех салонах сети OldBoy Barbershop нашу новую линейку стайлинговых
                средств, созданных для профессионального ухода
              </p>
              <div className="pt-2 sm:pt-6 md:pt-12">
                <Button variant="accentLink">Узнать подробнее</Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
