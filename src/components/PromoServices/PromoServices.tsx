import { ReactElement } from 'react';
import { Button } from '../Button';

import { PromoHeader } from '../PromoHeader';
import { ServiceButtons } from './components/ServiceButtons';

export const PromoServices = (): ReactElement => {
  return (
    <section className="mt-8">
      <div className="flex flex-col ">
        <div className="z-10 -mb-36">
          <PromoHeader>
            <h2
              className="section-header__title 
            text-5xl
            mt-2.5 pl-10 pr-12 py-4
            text-white font-rex 
            leading-tight 
            drop-shadow-[-3px_2px_0_rgba(137,99,34)]"
            >
              Услуги <br /> барбершопа
            </h2>
          </PromoHeader>
          <div
            className="section-header__image  
            bg-cover bg-[position:bottom_center] w-[25.5rem] 
            skew-y-15 -mt-10
            after:absolute
            after:top-0
            after:-right-5
           "
          >
            <p
              className="section-header__subtitle 
                relative flex flex-row pt-10 pl-28
                w-full m-0 
                decoration-[#896322] 
                text-3xl font-rex 
                text-orange-title
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
              Стрижем и бреем
            </p>
          </div>
        </div>
        <div className="px-10 py-12">
          <div className="lg:flex lg:justify-between z-0 justify-around">
            <article
              className="
            bg-[url('/images/bg/beard-section1.jpeg')] 
            relative
            w-full
          bg-orange-bg 
            bg-cover
            h-[calc(56.25vw-40px)]     
            lg:mr-5 
            rounded-md 
            box-border
            basis-2/4
            mb-10
            min-h-[180px]
            max-h-[22rem]	
          "
            >
              <div className="w-full grid grid-col-3 bottom-5 absolute mx-5 md:mx-10">
                <div className="font-rex leading-9 col-start-1 col-span-2">
                  <h3 className="text-2xl text-white">
                    Мужские <br /> <strong className="text-5xl">стрижки</strong>
                  </h3>
                  <p className="text-2xl text-orange-title">лучшее качество</p>
                </div>
                <div className="col-start-3 col-span-1 mt-12">
                  <Button variant="promoServiceLink">Все о стрижках</Button>
                </div>
              </div>
            </article>
            <article
              className="
            bg-[url('/images/bg/beard-section2.jpeg')] 
            bg-cover 
            relative
            basis-2/4 
            w-full
          bg-orange-bg 
            h-[calc(56.25vw-40px)] 
            lg:ml-5
            rounded-md 
            box-borde
            min-h-[180px]
            max-h-[22rem]
            "
            >
              <div className="w-full grid grid-col-3 mx-10 bottom-5 absolute">
                <div className="font-rex leading-9 col-start-1 col-span-2 w-4/6 sm:w-full">
                  <h3 className="text-2xl text-white">
                    Стрижка <br /> <strong className="text-5xl">усов и бороды</strong>
                  </h3>
                  <p className="text-2xl text-orange-title">наша специализация</p>
                </div>

                <div className="col-start-3 col-span-1 mt-12">
                  <Button variant="promoServiceLink">усы и борода</Button>
                </div>
              </div>
            </article>
          </div>
          <div className="flex flex-wrap justify-between">
            <ServiceButtons
              variant="style"
              header="СТИЛЬ И ПРОФЕССИОНАЛИЗМ"
              title="Бритьё"
              subtitle="бороды и головы"
              buttonText="Услуги бритья"
            />

            <ServiceButtons
              variant="forFans"
              header="ДЛЯ НАСТОЯЩИХ ЦЕНИТЕЛЕЙ"
              title="Королевское"
              subtitle="бритье"
              buttonText="для ценителей"
            />
            <ServiceButtons
              variant="masters"
              header="ЛУЧШИЕ МАСТЕРА"
              title="Нанесение"
              subtitle="татуировок"
              buttonText="Услуги тату салона"
            />

            <ServiceButtons
              variant="complexCare"
              header="Комплексный уход"
              title="Барбер-SPA"
              subtitle=" Услуги"
              buttonText="Coming soon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
