import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';
import { CityLanguageSelect } from '../../Features/header/components/CityLanguageSelect/CityLanguageSelect';
import { LinkOptions } from '../../types/link';

interface HeaderProps {
  mainNavList: LinkOptions;
}

export const Header = ({ mainNavList }: HeaderProps): ReactElement => {
  return (
    <header
      className="hero
        hero--main
        flex
        relative
        pt-14
        overflow-hidden
        text-white"
    >
      <div className="hero__top relative flex mb-5 w-full">
        <div className="hero__logo relative w-40 mr-4 flex align-top">
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
        <div className="hero__nav hero__nav--hidden -mt-0.5 w-full max-w-full">
          <nav className="main-nav inset-0 flex items-center">
            <ul className="main-nav__list flex m-0">
              {mainNavList.map(({ title, href }) => {
                return (
                  <li key={title} className="main-nav__item float-left text-center">
                    <Link
                      href={href}
                      className="main-nav__link font-rex mr-5 text-[14.6px] hover:text-orange-title transition delay-150"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <CityLanguageSelect />
      </div>
    </header>
  );
};
