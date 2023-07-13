import Image from 'next/image';
import Link from 'next/link';

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

const Header = () => {
  return (
    <header className="hero relative pt-12 px-12 pb-17 overflow-hidden bg-header-bg text-white">
      <div className="hero__top relative flex mb-5">
        <div className="hero__logo"></div>
        <div className="hero__nav hero__nav--hidden left-0">
          <nav className="main-nav inset-0 flex items-center">
            <ul className="main-nav__list flex m-0">
              {mainNavItems.map((navItem) => {
                return (
                  <li key={navItem.title} className="main-nav__item float-left mr-4 text-center">
                    <Link
                      href={navItem.href}
                      className="main-nav__link font-rex mr-3.75 text-base hover:text-orange-400 transition delay-150"
                    >
                      {navItem.title}
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

export default Header;
