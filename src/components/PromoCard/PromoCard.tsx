import { ReactElement } from 'react';

import { PromoHeader } from '../PromoHeader';
import { CardIcons } from './components/CardIcons';

export const PromoCard = (): ReactElement => {
  return (
    <section className="about mt-8">
      <div className="lg:flex">
        <div className="about-header flex flex-col mb-8 pb-5 ">
          <PromoHeader>
            <h2
              className="section-header__title 
            text-5xl
            mt-2.5 pl-10 pr-12 py-4
            text-white font-rex 
            leading-tight 
            drop-shadow-[-3px_2px_0_rgba(137,99,34)]"
            >
              О нашем <br /> барбершопе
            </h2>
          </PromoHeader>
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
        <div className="about-caption pl-10 w-auto  bg-[url('/images/bg/about-bg.jpeg')] bg-border-white pr-10">
          <div className="py-5 pr-10">
            <h1 className="about-headline font-rex text-3xl leading-7">
              Oldboy — Барбершоп с твоим характером
            </h1>
            <p className="about-subtitle font-button_font text-base leading-8 mt-4 text-orange-bg font-semibold	">
              У НАС ЕСТЬ ВСЁ, ЧТО ТРЕБУЕТСЯ НАСТОЯЩЕМУ МУЖЧИНЕ: АТМОСФЕРА БРУТАЛЬНОСТИ И МУЖСКОГО
              ДУХА, ПРОФЕССИОНАЛИЗМ БАРБЕРОВ И СОХРАНЕНИЕ ЕВРОПЕЙСКИХ ТРАДИЦИЙ БАРБЕРИНГА, А ТАКЖЕ
              ОТЛИЧНЫЙ КОФЕ И ХОРОШАЯ КОМПАНИЯ
            </p>
          </div>
          <p className="about-subtitle text-lg font-button_font leading-7 my-4">
            OldBoy Barbershop — намного больше, чем просто мужская парикмахерская. Это место, где
            Вам помогут найти свой собственный, неповторимый стиль. Стоит довериться мастерам OldBoy
            один раз, и, поверьте, новый образ не оставит Вас равнодушным. Мужские стрижки и опасное
            бритье — это наш профиль, и мы уверены, что наши барберы делают это лучше всех. Как
            сказал однажды знаменитый Ральф Лорен: «Какой бы Вы образ жизни ни вели, у вас должен
            быть свой собственный стиль, свой собственный мир». Обещать, конечно, что мы сделаем из
            Вас Кэри Гранта мы не будем, но Вы можете быть уверены в 3-х вещах:
          </p>
          <div className="flex text-center p-8 xl:grid xl:grid-cols-3 -mt-18">
            <CardIcons variant="firstIcon" image="/images/icons/about-icon1.svg">
              ВАМ ОБЯЗАТЕЛЬНО ПРЕДЛОЖАТ ЧАШЕЧКУ АРОМАТНОГО КОФЕ ИЛИ ЧАЯ
            </CardIcons>
            <CardIcons variant="secondIcon" image="/images/icons/about-icon2.svg">
              МЫ ПОСТРИЖЕМ И ПОБРЕЕМ ВАС НА ВЫСШЕМ УРОВНЕ ПО ВСЕМ ЕВРОПЕЙСКИМ ТРАДИЦИЯМ
            </CardIcons>
            <CardIcons variant="thirdIcon" image="/images/icons/about-icon3.svg">
              ВЫ НЕ УСПЕЕТЕ ЗАМЕТИТЬ, КАК СНОВА ЗАХОТИТЕ ВЕРНУТЬСЯ В НАШ БАРБЕРШОП
            </CardIcons>
          </div>
        </div>
      </div>
    </section>
  );
};
