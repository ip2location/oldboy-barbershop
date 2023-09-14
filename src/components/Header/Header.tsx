import Link from 'next/link';
import { ReactElement, useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CityLanguageSelect } from '../../Features/header/components/CityLanguageSelect/CityLanguageSelect';

const mainNavItems = [
  { title: 'Главная', href: '#' },
  { title: 'Услуги', href: '#' },
  { title: 'Косметика', href: '#' },
  { title: 'Блог', href: '#' },
  { title: 'Франшиза', href: '#' },
  { title: 'Инвестиции', href: '#' },
  { title: 'Вакансии', href: '#' },
  { title: 'Барберы', href: '#' },
  { title: 'Контакты', href: '#' },
  { title: 'Филиалы', href: '#' },
];

export const Header = (): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="hero
        hero--main
        flex
        relative
        lg:pt-14
        pt-5
        overflow-hidden
        text-white"
    >
      <div className="hero__top relative flex mb-16 sm:mb-5 w-full">
        <div
          className="hero__logo relative
          w-36 mr-4 flex align-top 
          md:w-48 sm:block sm:w-24 hidden 
        "
        >
          <Link href="/">
            <Image
              src="/images/logo/logo.svg"
              alt="Oldboy Barbershop vector logo"
              sizes="(width:100%)"
              width="1240"
              height="666"
            />
          </Link>
        </div>
        <div className="hero__nav hero__nav--hidden w-full max-w-full">
          <div
            onClick={() => setOpen(!open)}
            className="burger-menu fixed right-4 top-4 z-50 bg-[rgba(19,19,19,.5)] text-3xl cursor-pointer flex items-center content-center justify-center h-12 w-12 border-2 
        border-orange-title rounded-full lg:hidden"
          >
            {!open ? <AiOutlineMenu /> : <AiOutlineClose />}
          </div>
          <div className="fixed right-0 top-0 bottom-0 z-40 w-full max-w-[400px] transition-all ease-out duration-300 lg:static lg:flex lg:-mt-1.5 lg:flex-wrap lg:max-w-auto">
            <nav
              className={`main-nav items-center absolute top-0 bottom-0 left-0 flex justify-center bg-header-bg/[.9] lg:bg-header-bg/[0] lg:static transition-all ease-in duration-500 ${
                open ? 'right-0 opacity-100' : 'right-[-400px] opacity-0'
              }`}
            >
              <ul className="main-nav__list flex flex-col lg:flex-row m-0">
                {mainNavItems.map(({ title, href }) => {
                  return (
                    <li key={title} className="main-nav__item float-left text-center m-5 lg:m-0">
                      <Link
                        href={href}
                        className="main-nav__link font-rex text-2xl lg:mr-5 lg:text-[14.6px] hover:text-orange-title transition delay-150"
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <CityLanguageSelect />
      </div>
    </header>
  );
};
