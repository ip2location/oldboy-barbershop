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
      className="
        hero
        hero--branch
        flex
        h-screen
        bg-[url('/images/bg/hero.jpg')]
        relative
        pt-14
        px-12
        pb-16
        overflow-hidden
        text-white
        after:bg-[url('/images/bg/white-grunge.svg')]
        after:block
        after:-bottom-10
        after:z-10
        after:absolute
        after:h-20
        after:bg-repeat-x
        after:bg-[top_0.125rem_center]
        after:bg-[length:50rem]
        after:left-0
        after:w-full"
    >
      <div className="hero__top  relative flex mb-5 mt-1.3">
        <div className="hero__logo relative w-36 mr-6 flex align-top">
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
        <div className="hero__nav hero__nav--hidden left-0">
          <nav className="main-nav inset-0 flex items-center">
            <ul className="main-nav__list flex m-0">
              {mainNavItems.map(({ title, href }) => {
                return (
                  <li key={title} className="main-nav__item float-left mr-4 text-center">
                    <Link
                      href={href}
                      className="main-nav__link font-rex mr-3.75 text-base hover:text-orange-400 transition delay-150"
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
