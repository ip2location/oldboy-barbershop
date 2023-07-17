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

export const Header = (): JSX.Element => {
  return (
    <header className="hero after:bg-hero-after-bg after:-bottom-10 after:z-7 after:absolute after:content-[''] after:h-20 after:bg-repeat-x after:bg-[top_0.125rem_center] after:bg-[length:50rem] after:left-0 after:w-full hero--branch relative pt-12 px-12 pb-17 overflow-hidden bg-header-bg text-white">
      <div className="hero__top relative flex mb-5">
        <div className="hero__logo"></div>
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
