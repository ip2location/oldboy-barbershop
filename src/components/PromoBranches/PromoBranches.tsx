import { PromoHeader } from '../PromoHeader';

export const PromoBranches = () => {
  return (
    <section className="mt-24">
      <div>
        <PromoHeader>
          <h2
            className="section-header__title 
            text-5xl
            mt-1.5 pl-10 pr-12 py-4
            text-white font-rex 
            leading-tight 
            drop-shadow-[-3px_2px_0_rgba(137,99,34)]"
          >
            Филиалы
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
                text-[#5E5140]
                before:absolute
                before:top-[2.3rem]
                before:w-auto 
                before:h-[0.17rem] 
                before:mb-2.5 
                before:mt-6
                before:left-2.5
                before:mr-1.5
                before:pl-[5.4rem]
                before:bg-[#5E5140]
                before:content-['']"
          >
            Сеть oldboy
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-col-6 font-rex py-12">
        <article className="text-center md:col-start-4 md:col-span-1 leading-tight">
          <h1 className="text-6xl">Франшиза</h1>
          <h3 className="text-2xl">Oldboy barbershop</h3>
        </article>
        <article className="justify-center md:col-start-6 md:col-span-1 flex mt-12 md:mt-4">
          <p className="text-9xl font-rex_inline text-orange-title">294</p>
          <div className="ml-2 text-xl">
            <p className="w-12/12 bg-orange-title h-2  bottom-3 left-24" />
            <span className="text-4xl">филиала</span> <br /> в 11 странах и 7 столицах
            <p className="w-12/12 bg-orange-title h-2  bottom-3 left-24" />
          </div>
        </article>
      </div>
    </section>
  );
};
