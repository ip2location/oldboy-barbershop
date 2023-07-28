'use client';

import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

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
  return (
    <header
      className="hero
        hero--main
        flex
        relative
        pt-14
        px-12
        pb-16
        overflow-hidden
        text-white"
    >
      <div className="hero__top relative flex mb-5">
        <div className="hero__logo relative w-36 mr-4 flex align-top">
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
        <div className="hero__nav hero__nav--hidden -mt-0.5">
          <nav className="main-nav inset-0 flex items-center">
            <ul className="main-nav__list flex m-0">
              {mainNavItems.map(({ title, href }) => {
                return (
                  <li key={title} className="main-nav__item float-left text-center">
                    <Link
                      href={href}
                      className="main-nav__link font-rex mr-5 text-[14.6px] hover:text-orange-400 transition delay-150"
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
    </header>
  );
};
