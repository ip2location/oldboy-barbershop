import { ReactElement } from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { LinkButton } from '../../../../components/LinkButton';
import { Icon } from '../../../../components/Icon';

export const MobileApplicationPromo = (): ReactElement => {
  return (
    <aside className="hero-app absolute top-[400px] right-2 z-20 lg:block hidden">
      <article
        className="app-promo 
      flex 
      flex-col 
      items-end 
      w-[22.5rem] 
      h-[19.188rem] 
      font-bold 
      font-rex 
      text-right
      px-12
      py-0
      
      after:absolute
      after:-right-0
      after:bottom-10
      after:w-[140%]
      after:h-1
      after:bg-gradient-to-l
      after:from-orange-title
      after:to-rgb(214 163 84 / 0.75)
      after:content-['']
      "
      >
        <header
          className="app-promo__header 
          relative 
          mb-5

          before:absolute
          before:right-44
          before:-bottom-[14.25rem]
          before:w-[211px]
          before:h-[320px]
          before:bg-[url('/images/bg/mobile-app.png')]
          before:z-30
          before:bg-contain
          before:bg-no-repeat
          before:content-['']
        "
        >
          <h2 className="app-promo__title text-white font-rex text-2xl leading-6">
            <span className="text-orange-title text-base font-rex">Установите специальное</span>
            <br />
            <strong>
              Мобильное <br /> приложение
            </strong>
          </h2>
          <p className="app-promo__title m-0 text-white text-base font-rex">
            Для удобной онлайн-записи
          </p>
        </header>
        <div className="app-promo__buttons flex flex-col justify-end gap-4">
          <LinkButton
            variant="linkButton"
            link="https://play.google.com/store/apps/details?id=biz.app.apps.salon.app109144"
          >
            <Icon value={{ className: 'text-base' }}>
              <FaGooglePlay />
            </Icon>
            Google Play
          </LinkButton>
          <LinkButton variant="linkButtonThin" link="https://appsto.re/ru/dlxTgb.i">
            <Icon value={{ className: 'text-base' }}>
              <FaApple />
            </Icon>
            App Store
          </LinkButton>
        </div>
      </article>
    </aside>
  );
};
